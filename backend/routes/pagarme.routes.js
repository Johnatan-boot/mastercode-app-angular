const express = require('express');
const router = express.Router();
const pagarmeController = require('../controllers/pagarme.controller');

// Criar transação (exemplo)
router.post('/checkout', pagarmeController.criarTransacao);

module.exports = router;


/*✅ Função:
Ele define uma rota POST /checkout que chama a função criarTransacao do pagarme.controller.js.

Portanto, ele depende da abordagem antiga, que envia dados reais do cartão para o backend e usa axios para chamar a API REST do Pagar.me.*/