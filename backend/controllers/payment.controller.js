require('dotenv').config();
const pagarme = require('pagarme');

exports.processarPagamento = async (req, res) => {
  const { card_hash, amount } = req.body;

  try {
    const client = await pagarme.client.connect({ api_key: process.env.PAGARME_API_KEY });

    const transaction = await client.transactions.create({
      amount: amount || 10000, // Ex: R$100,00
      card_hash: card_hash,
      payment_method: 'credit_card',
      customer: {
        external_id: '#123',
        name: 'Cliente Teste',
        type: 'individual',
        email: 'email@email.com',
        country: 'br',
        documents: [
          {
            type: 'cpf',
            number: '00000000000',
          }
        ],
        phone_numbers: ['+5511999999999']
      },
      billing: {
        name: 'Cliente Teste',
        address: {
          country: 'br',
          state: 'sp',
          city: 'São Paulo',
          neighborhood: 'Centro',
          street: 'Av. Paulista',
          street_number: '1000',
          zipcode: '01311000'
        }
      }
    });

    res.status(200).json(transaction);
  } catch (error) {
    console.error('Erro ao processar pagamento:', error);
    res.status(500).json({ message: 'Erro ao processar pagamento', error });
  }
};


/*✅ O que ele faz:
É outro controller, mas ele usa a SDK oficial pagarme para conectar com a API do Pagar.me.

Espera receber no req.body um card_hash, que foi gerado no frontend Angular usando a encryption_key.

Isso significa que os dados do cartão nunca chegam ao backend.

📌 Quando usar:
Quando o Angular usa pagarme-js para gerar o card_hash.

Se quer uma abordagem mais segura e moderna.

Recomendado para aplicações não certificadas PCI (como a maioria dos projetos frontend + backend normais).

*/