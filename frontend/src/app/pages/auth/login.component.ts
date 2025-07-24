import { ToastrService } from 'ngx-toastr';
import { Component, signal, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatrixCanvaComponent } from "../../components/matrixcanvacomponent/matrix.canva.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatrixCanvaComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  playerWidth: number = 300;

  @ViewChild('titleRef') titleRef!: ElementRef;

  ngAfterViewInit(): void {
    if (this.titleRef?.nativeElement) {
      this.playerWidth = this.titleRef.nativeElement.offsetWidth;
    }
  }

  username = signal('');
  get usernameValue() {
    return this.username();
  }
  set usernameValue(val: string) {
    this.username.set(val);
  }

  password = signal('');
  loginError = signal('');

  constructor(
    private router: Router,
    private toastr: ToastrService // ✅ Injetado aqui
  ) {}

  /* Navega para a página de cadastro */
  goToCadastro() {
    this.router.navigateByUrl('/cadastro');
  }

  /* Realiza o login */
  login() {
    const user = this.username();
    const pass = this.password();

    if (user === 'ana' && pass === '123456') {
      localStorage.setItem('user', user);
      this.toastr.success(`Bem-vindo(a), ${user}!`, 'Login realizado'); // ✅ toast sucesso
      this.router.navigateByUrl('/dashboard');
    } else {
      this.loginError.set('Usuário ou senha inválidos.');
      this.toastr.error('Usuário ou senha inválidos.', 'Erro ao logar'); // ✅ toast erro
    }
  }
}
