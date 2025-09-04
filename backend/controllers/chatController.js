// For now, this is a mock. Later we'll integrate AI + RAG pipeline.
const getChatResponse = async (req, res) => {
  try {
    const { message } = req.body;

    // Simple filter: only answer construction-related queries
    const keywords = ["construction", "building", "architect", "cement", "concrete", "material", "engineer", "site"];
    const isConstructionQuery = keywords.some((word) =>
      message.toLowerCase().includes(word)
    );

    if (!isConstructionQuery) {
      return res.json({
        reply: "⚠️ I can only answer queries related to construction and civil engineering.",
      });
    }

    // Temporary static reply (later replace with LLM)
    return res.json({
      reply: `✅ You asked about: "${message}". This is a construction-related query. (AI answer will come here soon).`,
    });
  } catch (err) {
    console.error("Chat Error:", err);
    res.status(500).json({ reply: "❌ Server error, please try again." });
  }
};

module.exports = { getChatResponse };
