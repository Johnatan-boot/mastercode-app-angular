import { Component, computed, inject, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CarrinhoService } from '../../services/carrinho.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar-component',
  imports: [MatToolbarModule,MatIconModule,MatButtonModule, NgIf,RouterModule],
  templateUrl: './navbarcomponent.html',
  styleUrl: './navbarcomponent.css'
})
export class NavbarComponent {
  carrinho = inject(CarrinhoService);
  total = computed(() => this.carrinho.totalItens());
}
