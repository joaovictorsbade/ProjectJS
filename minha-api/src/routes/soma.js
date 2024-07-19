const express = require('express');
const router = express.Router();
const somaController = require('../controllers/somaController');


router.post('/simples/' ,somaController.somaSimples);

module.exports = router;