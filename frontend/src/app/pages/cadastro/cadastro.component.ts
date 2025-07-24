import { Component, signal, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatrixCanvaComponent } from "../../components/matrixcanvacomponent/matrix.canva.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatrixCanvaComponent],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class cadastroComponent implements AfterViewInit {

  playerWidth: number = 300;

  @ViewChild('titleRef') titleRef!: ElementRef;

  ngAfterViewInit(): void {
    if (this.titleRef?.nativeElement) {
      this.playerWidth = this.titleRef.nativeElement.offsetWidth;
    }
  }

  username = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  signupError = signal('');

  get usernameValue() {
    return this.username();
  }
  set usernameValue(val: string) {
    this.username.set(val);
  }

  constructor(private router: Router) { }

  signup() {
    const user = this.username();
    const pass = this.password();
    const confirmPass = this.confirmPassword();
    const email = this.email();

    if (pass !== confirmPass) {
      this.signupError.set('As senhas não coincidem.');
      return;
    }

    // Simulação de cadastro
    if (user && email && pass) {
      localStorage.setItem('user', user);
      this.router.navigateByUrl('/dashboard');
    } else {
      this.signupError.set('Preencha todos os campos corretamente.');
    }
  }
}
