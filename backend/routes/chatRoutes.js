const express = require("express");
const {
  accessChat,
  fetchChat,
  createGrouphChats,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChat);
router.route("/group").post(protect, createGrouphChats);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").patch(protect, removeFromGroup);
router.route("/groupadd").patch(protect, addToGroup);
module.exports = router;
