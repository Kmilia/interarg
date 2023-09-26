#!/usr/bin/python3

import spacy
import math
import sys

import glob
from sentence2vec import Word, Sentence, sentence_to_vec

from spacy.tokenizer import Tokenizer
from nltk import sent_tokenize
from collections import defaultdict

from collections import namedtuple

from nltk.tokenize import sent_tokenize
import shortuuid

nlp = spacy.load('en_core_web_lg')
tokenizer = Tokenizer(nlp.vocab)
term = namedtuple('term', 'id type begin end text value')
attribute = namedtuple('attribute', 'id type parent value')

# euclidean distance between two vectors
def l2_dist(v1, v2):
    sum = 0.0
    if len(v1) == len(v2):
        for i in range(len(v1)):
            delta = v1[i] - v2[i]
            sum += delta * delta
        return math.sqrt(sum)

def parse_brat(topic):
    folder = ""
    if topic == "uniforms":
        folder = "is-the-school-uniform-a-good-or-bad-idea"
    elif topic == "bottles":
        folder = "ban-plastic-water-bottles"
    elif topic == "tv":
        folder = "tv-is-better-than-books"
    terms = defaultdict(namedtuple)
    attributes = defaultdict(namedtuple)
    for i, fi in enumerate(glob.glob("./data/%s/*ann" % ( folder ))):
        with open(fi) as fil:
            for l in fil:
                if l.startswith("T"):
                    l = l.split('\t')
                    l2 = l[1].split()
                    new_l = [str(i)+l[0]] + l2 + [l[2]]
                    t = term(*new_l+[""])
                    terms[str(i)+l[0]] = t
                elif l.startswith("A"):
                    l =	l.split('\t')
                    l2=l[1].split()
                    if len(l2) == 3:
                        new_l = [str(i)+l[0]] + [l2[0]] + [str(i)+l2[1]] + [l2[2]]
                    else:
                        new_l = [str(i)+l[0]] + [l2[0]] + [str(i)+l2[1]] + [""]
                    a = attribute(*new_l)
                    attributes[str(i)+l[0]] = a
    return (terms, attributes)


def create_knowledge_vectors(terms):
    embedding_size = 300

    knowledge_list = []
    knowledge_list_extras = []
    
    for term in terms.keys():
        word_list = []
        for word in terms[term].text.split():
            token = nlp.vocab[word]
            if token.has_vector:
                word_list.append(Word(word, token.vector))
            else:
                i = 3

        if len(word_list) > 0:
            knowledge_list.append(Sentence(word_list))
            knowledge_list_extras.append((terms[term].id, terms[term]))

    knowledge_vector_lookup = dict()
    knowledge_vectors = sentence_to_vec(knowledge_list, embedding_size)

    if len(knowledge_vectors) == len(knowledge_list):
        for i in range(len(knowledge_vectors)):
            knowledge_vector_lookup[knowledge_list[i].__str__()] = (knowledge_vectors[i], knowledge_list_extras[i][0], knowledge_list_extras[i][1])
    return knowledge_vector_lookup
    
def create_sentence_vector(sentence):
    embedding_size = 300
    sentence_tokens = [word.replace(".", "") for word in sentence.split()]
    sentence_tokens[-1] = sentence_tokens[-1].replace(".", "")
    sentence_list = []
    word_list = []
    for word in sentence_tokens:
        token = nlp.vocab[word]
        if token.has_vector:
            word_list.append(Word(word, token.vector))
    if len(word_list) > 0:
        sentence_list.append(Sentence(word_list))

    sentence_vector_lookup = dict()
    sentence_vectors = None
    try:
        sentence_vectors = sentence_to_vec(sentence_list, embedding_size)
    except ValueError:
        return {"knowledge_type": "Nothing"}

    sentence_vector_lookup[sentence_list[0].__str__() + "."] = sentence_vectors[0]
    return sentence_vector_lookup

def consequence_likelihood(attributes):
    for a in attributes:
        if a.type == "Likelihood":
            return a.value
    return None

def consequence_sentiment(attributes):
    for a in attributes:
        if a.type == "Sentiment":
            return a.value
    return None

def most_similar(sentence_vector_lookup, knowledge_vector_lookup, attributes, sentence):
    best_type    = None
    best_dist    = 1000.0
    best_id      = None

    sentence_text = None
    sentence_vector = None

    html = ''
    alert = ''
    
    for key, value in sentence_vector_lookup.items():
        sentence_text = key
        sentence_vector = value

    similar_items = []
    best_attributes = []
    for kb_text, (kb_vector, id, term) in knowledge_vector_lookup.items():
        dist = l2_dist(sentence_vector,kb_vector)
        similar_items.append(str("{:.2f}".format(dist))+": " + kb_text)
        if dist < best_dist:
            best_dist = dist
            best_id = id
            best_attributes = [y for _,y in attributes.items() if y.parent == best_id]
            best_type = term.type

    similar_items.sort()
    if best_dist <= 15 and best_type != "Unsure": #was 3.5
        uuid = shortuuid.uuid()
        #use spacy to get root verb here
        doc = nlp(sentence_text)
        help_t = ''
        action_t = ''
        detailed_t = ''
        previous_token = None
        if best_type == "Consequence":
            if consequence_likelihood(best_attributes) == "5":
                return (sentence_text, [])
            for token in doc:
                if token.dep_ == 'ROOT':
                    if previous_token == "can":
                        return (sentence_text, []) #already corrected
                    help_t = "Suggestion: Change '%s' to '%s'" % (token.text, 'can %s' % (token.lemma_))
                    action_t = 'can %s' % (token.lemma_)
                    lh = consequence_likelihood(best_attributes)
                    s = consequence_sentiment(best_attributes)
                    detailed_t = '''Your argument: %s<br><br>The <b>%s</b> consequence you mentioned is <b>%s/5</b> likely to occur. ''' % (sentence_text, s, lh)
                    html = '<span class="error">'
                    text = sentence_text.replace(token.text, '<span id="%s">%s</span>' % (str(uuid), token.text))
                    html+=text + "</span>"
                    break
                previous_token = token.lemma_
            alert = {'id':uuid, 'help':help_t, 'action':action_t, 'detailed':detailed_t}
            return (html, alert)
        elif best_type == "Position_to_Know":
            if "Based on my own personal experience" in sentence_text:
                return (sentence_text, [])
            detailed_t = 'Your argument: %s<br><br>If you are making an argument based on your own experience, consider explicating this.' % (sentence_text)
            #<br><br><b>Most similar arguments:</b><br>%s<br>%s<br>%s' % (similar_items[0],similar_items[1],similar_items[2])
            action_t ="Based on my personal experience %s" % (sentence_text[0].lower() + sentence_text[1:])
            help_t="Suggestion: Add the phrase 'Based on my personal experience' to your argument."
            html = '<span class="error"><span id="%s">%s</span>' % (str(uuid), sentence_text)
            html += "</span>"
            alert = {'id':uuid, 'help':help_t, 'action':action_t, 'detailed':detailed_t}
            return (html, alert)
    else:
        return (sentence_text, [])

def parse_paragraph(paragraph, knowledge_vector_lookup, attributes):
    return_html = ''
    alerts = []
    sentences = sent_tokenize(paragraph)
    for sentence in sentences:
        sentence_vector_lookup = create_sentence_vector(sentence)
        html, alert = most_similar(sentence_vector_lookup, knowledge_vector_lookup, attributes, sentence)
        return_html += html + " "
        if alert:
            alerts.append(alert)
    
    return {'html':return_html, 'alerts': alerts}

def checkTextLength(paragraph):
    alerts = []
    uuid = shortuuid.uuid()
    return_html = '<span class="error"><span id="%s">%s</span>'%(uuid, paragraph)
    sentences = sent_tokenize(paragraph)
    x = None
    print(sentences, file=sys.stderr)
    if len(sentences) < 3:

        help_t = "Suggestion: Add more content."
        action_t = "Add more text"
        detailed_t = "A good response should have many claims and supporting reasons. Please write at least 3 sentences."
        alert = {'id':uuid, 'help':help_t, 'action':action_t, 'detailed':detailed_t}
        alerts.append(alert)
        x = {'html':return_html, 'alerts':alerts} 
    return x

def get_feedback(paragraph, topic):
    length = checkTextLength(paragraph)

    if length:
        return length
    terms, attributes = parse_brat(topic)
    knowledge_vector_lookup = create_knowledge_vectors(terms)
    x = parse_paragraph(paragraph, knowledge_vector_lookup, attributes)
    print(x, file=sys.stderr)
    print(str(len(sent_tokenize(paragraph))),file=sys.stderr)
    print(length, file=sys.stderr)
    return x