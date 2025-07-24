import { Component, computed, signal, effect } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { NavbarComponent } from "./components/navbarcomponent/navbarcomponent";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private currentUrl = signal('');

  showNavbar = computed(() =>
    !['/login', '/cadastro'].some(route => this.currentUrl().includes(route))
  );

  constructor(private router: Router) {
    effect(() => {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        const path = event.urlAfterRedirects;
        this.currentUrl.set(path);

        const isLogin = ['/login', '/cadastro'].some(route => path.includes(route));

        // Adiciona ou remove classe no body
        document.body.classList.toggle('login-mode', isLogin);
        document.documentElement.classList.toggle('login-mode', isLogin);
      });
    });
  }
}
