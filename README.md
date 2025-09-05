🏗️ BuildAssist – Construction Domain Chatbot

BuildAssist is an AI-powered construction-domain chatbot built using RAG (Retrieval Augmented Generation).
It helps engineers, architects, and builders get answers to construction-related queries only.

This project was developed as part of the Arqonz Global Pvt Ltd Assignment for the Full-Stack / AIML role.

🚀 Features

🧠 Domain-specific chatbot – Answers only construction-related queries.

📑 RAG-enabled – Uses local construction documents for context-aware answers.

🖥️ Modern chat UI – Clean and simple React frontend.

⚡ Fast backend – Built with Python (FastAPI + LlamaIndex).

🛠️ Custom filter – Rejects non-construction queries politely.

🔒 Safe – Ensures responses are always relevant to construction.

🛠️ Tech Stack

Frontend: React + CSS

Backend: FastAPI (Python)

AI Engine: LlamaIndex + RAG (local construction PDFs)

Database: FAISS / Vector Index (in-memory for demo)

Deployment: Railway / Netlify

⚙️ Setup Instructions
🔹 1. Clone the repository
git clone (https://github.com/Sanjaymedida/construction-chatbot/)
cd construction-chatbot

🔹 2. Backend Setup
cd backend
pip install -r requirements.txt
uvicorn app:app --reload --port 8000


The backend will start at:
👉 http://127.0.0.1:8000

🔹 3. Frontend Setup
cd frontend
npm install
npm start


The frontend will start at:
👉 http://localhost:3000

💡 Usage

Open the frontend (http://localhost:3000
).

Type a construction-related question (e.g., “What are the standard grades of concrete used in buildings?”).

The bot will fetch relevant context from construction documents and reply.

If you ask something outside construction (e.g., “Who won the FIFA World Cup?”), the bot will respond:
“I can only answer construction-related queries.”

📸 Screenshots


🔹 Chat Interface

<img width="1920" height="1020" alt="Screenshot 2025-09-04 225105" src="https://github.com/user-attachments/assets/3d70926a-710a-4260-aea4-2164f52118ed" />



  <img width="1920" height="1020" alt="Screenshot 2025-09-04 225749" src="https://github.com/user-attachments/assets/09003fe4-877f-4114-8761-5e3f6fd792fb" />





🔹 Backend Running

<img width="1920" height="1020" alt="Screenshot 2025-09-04 225435" src="https://github.com/user-attachments/assets/5367bc01-d93f-4811-8bff-60a2e56350f7" />


<img width="1920" height="1020" alt="Screenshot 2025-09-04 225820" src="https://github.com/user-attachments/assets/2e3a03c6-4fe4-4036-bffa-13b044474a8c" />


✨ Future Improvements

✅ Add authentication (user login).

✅ Save chat history per user.

✅ Multi-language support.

✅ Connect to real-time construction project data.


👨‍💻 Author

Sanjay Medida


📧 Email: medidasanjay89@gmail.com


