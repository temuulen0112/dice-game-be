const express = require("express");
const router = express.Router();
const GameController = require('../controller/GameController');

// Requests
router.post('/info', GameController.info);
router.get('/dice', GameController.get_dice);
router.post('/saveInfo', GameController.save_info);

module.exports = router;