// backend/index.js
/*const express = require('express');
const pagarme = require('pagarme');
const app = express();
app.use(express.json());

app.post('/api/pagamento', async (req, res) => {
  try {
    const cliente = await pagarme.client.connect({ api_key: 'SUA_API_KEY' });

    const transacao = await cliente.transactions.create({
      amount: req.body.amount, // em centavos
      card_number: req.body.card_number,
      card_cvv: req.body.card_cvv,
      card_expiration_date: req.body.card_expiration_date,
      card_holder_name: req.body.card_holder_name,
      customer: {
        external_id: '#123456789',
        name: req.body.name,
        type: 'individual',
        country: 'br',
        email: req.body.email,
        documents: [
          {
            type: 'cpf',
            number: req.body.cpf
          }
        ],
        phone_numbers: [req.body.phone]
      },
      billing: {
        name: req.body.name,
        address: {
          country: 'br',
          state: 'SP',
          city: 'São Paulo',
          neighborhood: 'Centro',
          street: 'Rua Exemplo',
          street_number: '123',
          zipcode: '01000-000'
        }
      },
      items: req.body.items
    });

    res.json(transacao);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});
*/
/*🔍 O que esse index.js está fazendo?
É um servidor Express.

Cria a rota POST /api/pagamento.

Recebe dados reais do cartão no corpo da requisição (card_number, cvv, etc).

Usa a SDK do Pagar.me (pagarme.client) para criar a transação.

Não utiliza card_hash.

É um exemplo de "servidor simples para testes rápidos".

⚠️ Problemas com esse arquivo:
Ele mistura lógica de controller, rotas e server tudo em um único arquivo.

Não é modular.

Não é seguro se os dados forem enviados diretamente do frontend.

É redundante se você já está usando payment.controller.js + rotas organizadas.

✅ Então... preciso manter esse index.js?
❌ Não precisa mais manter, se você já tem uma estrutura modular com:
payment.controller.js

routes/payment.routes.js

app.js ou server.js separado

Esse index.js só serviu como um teste isolado, e pode ser deletado com segurança.*/