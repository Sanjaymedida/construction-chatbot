// import React, { useState } from "react";
// import axios from "axios";
// // import "./App.css";

// function App() {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "👷 Hello! I am BuildAssist. Ask me anything about construction." },
//   ]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { sender: "user", text: input }];
//     setMessages(newMessages);

//     try {
//       const response = await axios.post("http://127.0.0.1:8000/chat", {
//         message: input,
//       });

//       setMessages([
//         ...newMessages,
//         { sender: "bot", text: response.data.response },
//       ]);
//     } catch (error) {
//       setMessages([
//         ...newMessages,
//         { sender: "bot", text: "⚠️ Error connecting to server." },
//       ]);
//     }

//     setInput("");
//   };

//   return (
//     <div className="chat-wrapper">
//       <header className="chat-header">🏗️ Construction Chatbot</header>

//       <div className="chat-box">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`chat-message ${msg.sender}`}
//           >
//             <div className="message-text">{msg.text}</div>
//           </div>
//         ))}
//         {messages.map((msg, index) => (
//   <div key={index} className={`chat-message ${msg.sender}`}>
//     {msg.text}
//   </div>
// ))}

//       </div>

//       <div className="chat-input">
//         <input
//           type="text"
//           value={input}
//           placeholder="Type your message..."
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button onClick={sendMessage}>➤</button>
//       </div>
//     </div>
//   );
// }

// export default App;
