const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const verifyToken = require('../middlewares/auth.middleware'); // 🔒 middleware JWT

// Rotas públicas
router.post('/login', authController.login);
router.post('/register', authController.register);

// Rota protegida (exige token)
router.get('/me', verifyToken, authController.me);

module.exports = router;
