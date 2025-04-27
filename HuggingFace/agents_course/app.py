import os
from huggingface_hub import InferenceClient

client = InferenceClient(
    token=os.getenv("HF_TOKEN"),
    # model="meta-llama/Meta-Llama-3.2-3B-Instruct",
    model="Qwen/Qwen2.5-Coder-32B-Instruct",
    # model="Qwen/Qwen2.5-Coder-3B-Instruct",
)

output = client.text_generation(
    "The capital of France is",
    max_new_tokens=100,
    do_sample=True,
    temperature=0.7,
    top_p=0.9,
    top_k=50,
)

print(output)

