const express = require('express');
const router = express.Router();
const { getUserByUsernameAndPassword, addUser, getAllUsers } = require('../controllers/userController');

router.post('/login', getUserByUsernameAndPassword);
router.post('/register', addUser);
router.get('/', getAllUsers);

module.exports = router;

