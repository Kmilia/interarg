import openai
import shortuuid

openai.api_key = "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"
openai.organization = "org-0M5WYRn7SjJnnKLbFybd5QUE"

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