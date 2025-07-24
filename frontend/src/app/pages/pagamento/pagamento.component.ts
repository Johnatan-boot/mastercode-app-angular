declare var pagarme: any;

export class PagamentoComponent {
  card = {
    card_holder_name: '',
    card_expiration_date: '',
    card_number: '',
    card_cvv: ''
  };

  encryptionKey = 'SUA_ENCRYPTION_KEY_PAGARME';

  gerarToken() {
    pagarme.client.connect({ encryption_key: this.encryptionKey })
      .then((client: any) => {
        return client.security.encrypt(this.card);
      })
      .then((cardHash: string) => {
        console.log('Token do cartão gerado:', cardHash);
        // Enviar para o backend
        this.enviarTokenParaServidor(cardHash);
      })
      .catch((error: any) => {
        console.error('Erro ao gerar token:', error);
      });
  }

  enviarTokenParaServidor(cardHash: string) {
    // Aqui você faz um POST para o seu backend com o cardHash
  }
}
