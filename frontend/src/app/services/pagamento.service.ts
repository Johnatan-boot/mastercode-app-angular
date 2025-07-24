import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PagamentoService {
  constructor(private http: HttpClient) {}

  realizarPagamento(cardHash: string, amount: number): Observable<any> {
    const payload = {
      card_hash: cardHash,
      amount: amount
    };
    return this.http.post('/api/payment', payload);
  }
}


/*✅ Onde está a diferença?
Antes (errado)	Agora (correto)
Enviava dados do cartão diretamente	Envia apenas o card_hash
Chamava /api/pagarme/checkout	Chama /api/payment
Usava rota antiga com controller antigo	Usa controller seguro e atual (payment.controller.js)

*/
