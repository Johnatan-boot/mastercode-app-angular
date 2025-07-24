// services/carrinho.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  private itens = signal<any[]>([]);

  getCarrinho() {
    return this.itens;
  }

  adicionarAoCarrinho(produto: any) {
    const lista = [...this.itens()];
    const item = lista.find(p => p.id === produto.id);
    if (item) {
      item.quantidade += 1;
    } else {
      lista.push({ ...produto, quantidade: 1 });
    }
    this.itens.set(lista);
  }

  remover(produto: any) {
    const novaLista = this.itens().filter(p => p.id !== produto.id);
    this.itens.set(novaLista);
  }

  limpar() {
    this.itens.set([]);
  }

  totalValor() {
    return this.itens().reduce((acc, p) => acc + (p.preco * p.quantidade), 0);
  }

  totalItens() {
    return this.itens().reduce((acc, p) => acc + p.quantidade, 0);
  }
}
