# from flask import Flask, request, jsonify
# from llama_cpp import Llama
# import os

# app = Flask(__name__)

# # Load your downloaded .gguf model
# model_path = os.path.join("models", "mistral-7b-instruct-v0.1.Q4_0.gguf")
# llm = Llama(model_path=model_path)

# # Optional: load construction documents
# context = ""
# data_folder = "data"
# if os.path.exists(data_folder):
#     for filename in os.listdir(data_folder):
#         if filename.endswith(".txt"):
#             with open(os.path.join(data_folder, filename), "r", encoding="utf-8") as f:
#                 context += f.read() + "\n"

# @app.route("/api/ai", methods=["POST"])
# def chat():
#     data = request.get_json()
#     message = data.get("message", "")

#     keywords = ["construction", "cement", "material", "engineer", "architect", "building", "project"]
#     if not any(word in message.lower() for word in keywords):
#         return jsonify({"reply": "⚠️ I only answer construction-related queries."})

#     prompt = f"Answer the following question using the context below:\n{context}\nQuestion: {message}\nAnswer:"

#     # Generate response
#     response = llm(prompt, max_tokens=300)
#     reply = response['choices'][0]['text']

#     return jsonify({"reply": reply})

# if __name__ == "__main__":
#     app.run(port=5001)


from llama_cpp import Llama

model = Llama(model_path="models/mistral-7b-instruct-v0.1.Q4_0.gguf")

response = model(prompt="Explain the steps to build a concrete foundation.", max_tokens=100)
print(response['choices'][0]['text'])
