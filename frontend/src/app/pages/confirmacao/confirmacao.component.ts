import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SafeUrlPipe } from '../../pipes/safe-url-pipe';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmacao',
  imports:[ NgIf,CommonModule,],
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent {
  compra: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.compra = navigation?.extras?.state?.['compra'];

    if (!this.compra) {
      this.router.navigate(['/']);
    } else {
      this.compra.total = parseFloat(this.compra.total);

      if (Array.isArray(this.compra.itens)) {
        this.compra.itens = this.compra.itens.map((item: { preco: string; }) => ({
          ...item,
          preco: parseFloat(item.preco)
        }));
      }
    }
  }
}

