const pagarmeService = require('../services/pagarme.service');  //NÃO SE ESQUECA DE COMENTAR O CONTEUDO DESTE ARQUIVO

exports.criarTransacao = async (req, res) => {
  try {
    const response = await pagarmeService.criarTransacao(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.error('Erro ao criar transação:', error);
    res.status(500).json({ error: 'Erro ao processar o pagamento' });
  }
};



/* O que ele faz:
É um controller que recebe uma requisição HTTP com os dados do cartão diretamente (número, validade, etc).

Encaminha esses dados para o arquivo pagarme.service.js, que é o responsável por fazer a chamada HTTP para o Pagar.me via axios (API v5).

Utiliza a abordagem de enviar dados reais do cartão ao backend.

📌 Quando usar:
Quando seu frontend não usa card_hash.

Se o backend estiver configurado com segurança total (⚠️ PCI compliance).

Se estiver usando a API REST v5 diretamente com axios.

*/