import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntityService } from '../services/entity';

@Component({
  selector: 'app-table-entity',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table-entity.html',
  styleUrls: ['./table-entity.css']
})
export class TableEntityComponent {
 alunos: any[] = [];
  usuarios: any[] = [];

  novoAluno = { nome: '', email: '' };
  editandoAluno: any = null;

  novoUsuario = { nome: '', email: '' };
  editandoUsuario: any = null;

  adicionarAluno() {
    const id = Date.now();
    this.alunos.push({ id, ...this.novoAluno });
    this.novoAluno = { nome: '', email: '' };
  }

  editarAluno(aluno: any) {
    this.editandoAluno = { ...aluno };
  }

  salvarAluno() {
    const index = this.alunos.findIndex(a => a.id === this.editandoAluno.id);
    if (index !== -1) this.alunos[index] = this.editandoAluno;
    this.editandoAluno = null;
  }

  excluirAluno(id: number) {
    this.alunos = this.alunos.filter(a => a.id !== id);
  }

  cancelarEdicaoAluno() {
    this.editandoAluno = null;
  }

  adicionarUsuario() {
    const id = Date.now();
    this.usuarios.push({ id, ...this.novoUsuario });
    this.novoUsuario = { nome: '', email: '' };
  }

  editarUsuario(usuario: any) {
    this.editandoUsuario = { ...usuario };
  }

  salvarUsuario() {
    const index = this.usuarios.findIndex(u => u.id === this.editandoUsuario.id);
    if (index !== -1) this.usuarios[index] = this.editandoUsuario;
    this.editandoUsuario = null;
  }

  excluirUsuario(id: number) {
    this.usuarios = this.usuarios.filter(u => u.id !== id);
  }

  cancelarEdicaoUsuario() {
    this.editandoUsuario = null;
  }
}
