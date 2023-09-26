import openai
import shortuuid
import pandas as pd

_KEYS = pd.read_csv("openai_keys/openai_id.csv").to_dict("records")[0]
openai.api_key = _KEYS["openai.api_key"]
openai.organization = _KEYS["openai.organization"]

def get_feedback(paragraph):
    prompt = f"Give a feedback on how to improve this argument '{paragraph}'"
    return send_prompt(prompt, paragraph)

def send_prompt(prompt, paragraph, max_token=500, outputs=1):
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=max_token,
        n=outputs
    )
    output = list()
    for choice in response['choices']:
        output.append(choice['text'].strip())
    
    uuid = shortuuid.uuid()
    alert = [{"id":uuid, "help": "Suggestion", "action": "Consider this feedback:", 'detailed': " ".join(output)}]
    html = f"<span class='error'><span id={uuid}>{paragraph}</span></span>"

    return {'html': html, 'alerts': alert}

#test_para = "I love uniforms because everyone looks the same. So it removes inequalities among students. "