import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';

interface Produto {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  imagem: string;
  quantidade?: number;
}

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
 carrinho = inject(CarrinhoService);

  produtos = [
    { id: 1, titulo: 'Site Responsivo', preco: 3, imagem: 'https://sp.yimg.com/ib/th/id/OIP.lCyRdq7j_I0YdbJonp7XCAHaE7?pid=Api&w=148&h=148&c=7&rs=1', descricao: 'Desenvolvimento Web moderno' },
    { id: 2, titulo: 'Consultoria', preco: 500, imagem: 'https://up.yimg.com/ib/th/id/OIP.G2dyZKnVZddbut1u43e9dAHaFj?pid=Api&rs=1&c=1&qlt=95&w=139&h=104', descricao: 'Escolha de tecnologias' },
    { id: 3, titulo: 'Suporte Técnico', preco: 800, imagem: 'https://sp.yimg.com/ib/th/id/OIP.XATtfwy5V9sP5Vz6DekKVwHaHa?pid=Api&w=148&h=148&c=7&rs=1', descricao: 'Manutenção completa' }
  ];

  adicionar(produto: any) {
    this.carrinho.adicionarAoCarrinho(produto);
  }
}
