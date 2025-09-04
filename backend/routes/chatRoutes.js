const express = require("express");
const { getChatResponse } = require("../controllers/chatController");

const router = express.Router();

// POST /api/chat
router.post("/", getChatResponse);

module.exports = router;
