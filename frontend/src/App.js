
// import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "👷 Hello! I am BuildAssist. Ask me anything about construction." },
//   ]);
//   const [input, setInput] = useState("");
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { sender: "user", text: input }];
//     setMessages(newMessages);
//     setInput("");

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/generate", {
//         prompt: input,
//       });

//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: response.data.response },
//       ]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "⚠️ Error connecting to server." },
//       ]);
//     }
//   };

//   return (
//     <div className="app-container">
//       <aside className="sidebar">
//         <h2>🏗️ BuildAssist</h2>
//         <p>Chat with your construction assistant!</p>
//       </aside>

//       <main className="chat-section">
//         <header className="chat-header">Construction Chatbot</header>

//         <div className="chat-box">
//           {messages.map((msg, idx) => (
//             <div key={idx} className={`chat-message ${msg.sender}`}>
//               <div className="message-text">{msg.text}</div>
//             </div>
//           ))}
//           <div ref={chatEndRef} />
//         </div>

//         <div className="chat-input">
//           <input
//             type="text"
//             value={input}
//             placeholder="Type your message..."
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           />
//           <button onClick={sendMessage}>➤</button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👷 Hello! I am BuildAssist. Ask me anything about construction." },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/generate", {
        prompt: input,
      });

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: response.data.response },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to server." },
      ]);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: `📎 Sent an image: ${file.name}` },
    ]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "👷 Received your image!" },
      ]);
    }, 1000);
  };

  const handleMicClick = () => {
    alert("🎤 Voice input feature coming soon!");
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
  <div className="sidebar-top">
    <h2>🏗️ BuildAssist</h2>
  </div>
  <div className="sidebar-middle">
    <p>Chat with your construction assistant!</p>
  </div>
  <div className="sidebar-bottom">
    <button className="sidebar-btn">Profile</button>
    <button className="sidebar-btn">Settings</button>
    <button className="sidebar-btn">Logout</button>
  </div>
</aside>


      <main className="chat-section">
        <header className="chat-header">Construction Chatbot</header>

        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.sender}`}>
              <div className="message-text">{msg.text}</div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-input-wrapper">
            <button className="circular-btn plus-btn">+</button>  {/* attachment */}
            
            <input
              type="text"
              value={input}
              placeholder="Type your message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="chat-input-field"
            />
            
            <button className="circular-btn send-btn">➤</button>  {/* send */}
            <button className="circular-btn mic-btn">🎤</button>  {/* mic */}
          </div>

      </main>
    </div>
  );
}

export default App;
