const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/new-user' ,userController.newUser);
router.get('/all-users' ,userController.allUsers);
// router.post('/' ,userController.);

module.exports = router;