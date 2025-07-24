const axios = require('axios');

exports.criarTransacao = async (dados) => {
  const response = await axios.post('https://api.pagar.me/1/transactions', {
    ...dados,
    api_key: process.env.API_KEY_TEST,
  });

  return response.data;
};



/*const axios = require('axios');
const apiKey = process.env.PAGARME_API_KEY;

exports.criarTransacao = async (dados) => {
  const response = await axios.post('https://api.pagar.me/core/v5/orders', {
    // exemplo de payload
    customer: {
      name: dados.nome,
      email: dados.email,
      phones: {
        mobile_phone: {
          country_code: '55',
          number: '999999999',
          area_code: '11'
        }
      }
    },
    items: dados.itens,
    payments: [{
      payment_method: 'credit_card',
      credit_card: {
        card: {
          number: dados.card.number,
          exp_month: dados.card.exp_month,
          exp_year: dados.card.exp_year,
          cvv: dados.card.cvv,
          holder_name: dados.card.holder_name
        }
      }
    }]
  }, {
    headers: {
      'Authorization': `Basic ${Buffer.from(apiKey + ':').toString('base64')}`,
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};*/


/*Esse serviço:

Usa o axios para fazer uma requisição POST direto na API REST v5 do Pagar.me, na rota:

bash
Copiar
Editar
https://api.pagar.me/core/v5/orders
Monta o payload (requisição) com os dados completos do cartão recebidos do frontend:

Número do cartão

CVV

Validade

Nome do titular

Adiciona autenticação usando chave de API (apiKey) codificada em base64.

⚠️ Por que você não precisa mais dele, se usar card_hash:
Essa abordagem não usa card_hash.

Ela recebe dados sensíveis diretamente do Angular — o que não é seguro, a menos que seu servidor siga as normas PCI.

Você já decidiu usar card_hash, que é a forma segura e recomendada quando usamos frontend Angular com Pagar.me.

✅ Resumindo:
Este serviço faz...	Status recomendado
Envia dados reais do cartão para a API v5 (axios)	❌ Remover
Requer que o Angular envie número do cartão para o backend	❌ Não faça isso
Usa card_hash e criptografia frontend?	❌ Não usa

✅ O que você deve fazer:
Se você vai usar a abordagem com card_hash (via pagarme-js no Angular):
❌ Apague ou arquive esse arquivo.

✅ Use apenas o fluxo com:

payment.controller.js (com SDK pagarme)

Rota /api/payment

Angular gerando card_hash com a encryption_key

Se quiser visualizar agora:
✅ Fluxo completo e seguro com card_hash:
scss
Copiar
Editar
[Angular]
 ↓  Gera card_hash (pagarme-js + encryption_key)
[POST /api/payment]
 ↓
[payment.controller.js] → SDK do Pagar.me (api_key)
 ↓
Transação aprovada ou erro
*/