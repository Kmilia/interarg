import openai
import shortuuid
import pandas as pd
import spacy

_GPT_MODEL = "gpt-3.5-turbo" #"gpt-4"
_KEYS = pd.read_csv("openai_keys/openai_id.csv").to_dict("records")[0]
_NLP = spacy.load("en_core_web_lg")

openai.api_key = _KEYS["openai.api_key"]
openai.organization = _KEYS["openai.organization"]

def get_feedback(paragraph: str) -> dict:
    messages = create_messages(paragraph)
    response = generate_feedback(messages)
    return serialize_feedback(response, paragraph)

def create_messages(paragraph: str) -> list:
    content = (
        f"Give a feedback on how to improve the logic of this argument '{paragraph}'."
            "The feedback should have the following format (N being the sentence number):\n"
            "SENTENCE N: \n"
        f""
    )
    return [{"role": "user", "content": content}]

def generate_feedback(messages: str) -> str:
    response = openai.ChatCompletion.create(
        model= _GPT_MODEL,
        messages = messages
    )
    return response['choices'][0]['message']['content']

def serialize_feedback(output: str, paragraph:str) -> dict:
    comments = output.split("\n\n")
    print(output)
    sentences = _NLP(paragraph).sents
    alert = []
    html = []
    for index, sentence in enumerate(sentences):
        uuid = shortuuid.uuid()
        comment_parts = comments[index].partition(":")
        alert.append({"id":uuid, "help": comment_parts[0], "action": "Consider this feedback:", 'detailed': comment_parts[2]})
        html.append(f"<span class='error'><span id={uuid}>{sentence} </span></span>")
    return {'html': "".join(html), 'alerts': alert}
