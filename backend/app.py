# app.py
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from llama_cpp import Llama  # Make sure llama_cpp is installed

app = FastAPI()

# Enable CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model
try:
    model = Llama(model_path="models/mistral-7b-instruct-v0.1.Q4_0.gguf")
    print("✅ Model loaded successfully!")
except Exception as e:
    print("❌ Error loading model:", e)
    model = None  # Prevent crashes if model fails to load

# Request body schema
class PromptRequest(BaseModel):
    prompt: str

# Allowed keywords for construction domain
ALLOWED_KEYWORDS = [
    "construction", "building", "architecture", "engineering", "civil",
    "structure", "materials", "concrete", "steel", "masonry", "foundation",
    "roofing", "plumbing", "electrical", "HVAC", "interior", "exterior",
    "design", "site", "project management", "safety", "scaffolding",
    "surveying", "blueprint", "contractor", "renovation", "demolition",
    "infrastructure", "road", "bridge", "tunnel", "equipment", "machinery",
    "prefabrication", "inspection", "zoning", "permit", "sustainability",
    "green building", "urban planning", "wall", "walls", "floor", "floors", "ceiling", "roof", "bricks", "brick",
    "cement", "plaster", "paint", "tiles", "glass", "door", "doors", "window",
    "windows", "beam", "column", "pillar", "rebar", "mortar", "sand", "gravel",
    "foundation", "excavation", "sitework","hi", "hello", "hey", "good morning", "good afternoon", "good evening"
]
GREETINGS = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"]

@app.post("/generate")
def generate_text(request: PromptRequest):
    if not model:
        return {"response": "⚠️ Model not loaded."}

    prompt = request.prompt.strip()
    print("Received prompt:", prompt)

    if not prompt:
        return {"response": "⚠️ Prompt is empty."}

    if prompt.lower() in GREETINGS:
        return {"response": "👷 Hello! I am BuildAssist. Ask me anything about construction."}

    # Check if the prompt contains any construction-related keyword
    if not any(keyword in set(prompt.lower().split()) for keyword in ALLOWED_KEYWORDS):
        return {"response": "⚠️ Sorry, I can only answer construction-related questions."}

    try:
        # Add system instruction to guide the model
        system_instruction = (
            "You are BuildAssist, a chatbot specialized in construction topics. "
            "Answer the user's question concisely. "
            "Do not answer unrelated topics."
        )
        final_prompt = system_instruction + "\nUser: " + prompt

        # Generate response
        output = model(final_prompt, max_tokens=200, temperature=0.7)
        response_text = output['choices'][0]['text'].strip()
        print("Generated output:", response_text)
        return {"response": response_text}

    except Exception as e:
        print("Error generating response:", e)
        return {"response": f"⚠️ Error generating response: {e}"}

@app.get("/")
def root():
    return {"message": "Server is running. Send POST requests to /generate"}
