import { Component } from '@angular/core';
import { CourseCardComponent } from "../../components/course-card/course-card.component";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  imports: [CourseCardComponent]
})
export class CursosComponent {
  cursos = [
    {
      title: 'Angular com Práticas Reais',
      description: 'Aprenda Angular na prática com projetos completos.',
      icon: '/assets/angular.png'
    },
    {
      title: 'React JS do Zero',
      description: 'Curso completo para iniciantes em React.',
      icon: '/assets/react.png'
    }
    // mais cursos...
  ];
}
