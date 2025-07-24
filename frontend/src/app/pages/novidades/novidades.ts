import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-novidades',
  imports:[CommonModule,NgFor],
  templateUrl: './novidades.html',
  styleUrls: ['./novidades.css']
})
export class NovidadesComponent {
  novidades = [
    {
      titulo: 'Nova Trilha: Fullstack com Angular 17',
      data: 'Julho 2025',
      descricao: 'Lançamos uma nova trilha completa para você dominar Angular moderno com backend integrado.',
      imagem: 'https://tse2.mm.bing.net/th/id/OIP.G2dyZKnVZddbut1u43e9dAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      titulo: 'Bootcamp MasterCode 2.0',
      data: 'Junho 2025',
      descricao: '100% online, com projetos práticos e mentorias semanais. Inscrições abertas!',
      imagem: 'https://neosystems.es/wp-content/uploads/2022/07/softw3.jpg'
    },
    {
      titulo: 'Parceria com Google Cloud',
      data: 'Maio 2025',
      descricao: 'A MasterCode agora integra tecnologias da Google Cloud nas aulas de DevOps.',
      imagem: 'https://cloud.google.com/images/social-icon-google-cloud-1200-630.png'
    }
  ];
}
