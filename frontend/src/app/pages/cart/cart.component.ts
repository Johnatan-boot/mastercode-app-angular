/*declare const pagarme: any;

import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { PagamentoService } from '../../services/pagamento.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // Injeções de serviços
  carrinhoService = inject(CarrinhoService);
  pagamentoService = inject(PagamentoService);


constructor(private router: Router) {}

  // Signals
  carrinho = this.carrinhoService.getCarrinho();
  totalCarrinho = computed(() =>
    this.carrinho().reduce((total, item) => total + item.preco * (item.quantidade ?? 1), 0)
  );

  remover(produto: any) {
    this.carrinhoService.remover(produto);
  }

 finalizarCompra() {
  console.log("🔔 Botão de finalizar compra foi clicado");

  // Simule navegação ou finalize a lógica
  this.router.navigate(['/confirmacao'], {
    state: { total: this.totalCarrinho() }
  });
}



/*
finalizarCompra() {
  const totalEmCentavos = this.totalCarrinho() * 100;

  const checkout = new (window as any).PagarMeCheckout.Checkout({
    encryption_key: 'pk_XDvZO3NCJh5W4Bj7', // coloque a chave do sandbox
    success: (data: any) => {
      alert('Pagamento aprovado com ID: ' + data.token);
      // Aqui você pode redirecionar para uma página de sucesso
    },
    error: (err: any) => {
      console.error('Erro no pagamento:', err);
    },
    close: () => {
      console.log('Checkout fechado pelo usuário');
    }
  });

  checkout.open({
    amount: totalEmCentavos, // valor total em centavos
    createToken: 'false',
    paymentMethods: ['credit_card', 'boleto'],
    customerData: 'true', // coleta os dados do cliente
    postbackUrl: 'https://webhook.site/teste-123', // só usado em produção
    items: this.carrinho().map((produto: any) => ({
      id: produto.id.toString(),
      title: produto.titulo,
      unit_price: produto.preco * 100,
      quantity: produto.quantidade || 1,
      tangible: true
    }))
  });
}
ponto original
*/


declare const pagarme: any;

import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';
import { PagamentoService } from '../../services/pagamento.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // Injeções de serviços
  carrinhoService = inject(CarrinhoService);
  pagamentoService = inject(PagamentoService);

  constructor(private router: Router) {}

  // Signals
  carrinho = this.carrinhoService.getCarrinho();
  totalCarrinho = computed(() =>
    this.carrinho().reduce((total, item) => total + item.preco * (item.quantidade ?? 1), 0)
  );

  remover(produto: any) {
    this.carrinhoService.remover(produto);
  }

  finalizarCompra() {
    console.log('🔔 Botão de finalizar compra foi clicado');
    this.router.navigate(['/confirmacao']);
  }
}




