const {
  addMessage,
  getAllMessage,
} = require("../controllers/messagesControllers");

const router = require("express").Router();

router.post("/addmsg", addMessage);
router.post("/getmsg", getAllMessage); //god knows why post but get doesn't work

module.exports = router;
