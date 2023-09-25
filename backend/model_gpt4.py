#!/usr/bin/python3

import openai

openai.api_key = "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"
openai.organization = "org-0M5WYRn7SjJnnKLbFybd5QUE"

def get_feedback(paragraph, topic):
    prompt = f"Give a feedback on how to improve this argument '{paragraph}'"
    return send_prompt(prompt)

def send_prompt(prompt, max_token=500, outputs=1):
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=max_token,
        n=outputs
    )
    output = list()
    for choice in response['choices']:
        output.append(choice['text'].strip())
    print(output)
    return {'html': " ".join(output), 'alerts': ""}

#test_para = "I love uniforms because everyone looks the same. So it removes inequalities among students. "
#print(get_feedback(test_para, "uniforms"))