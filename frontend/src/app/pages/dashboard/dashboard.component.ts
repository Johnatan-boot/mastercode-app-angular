import { Component, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  // Exemplo parcial do card de alunos mostrando apenas 3 itens da lista por cards card -> aluno
 alunos = ['Ana', 'Bruno', 'Carlos', 'Daniela'];

//Mostrar alunos nos cards
showAlunos = signal(true);
//Botão ocultar insformações ou seja os itens da lista no card
toggleAlunos() {
  this.showAlunos.update((value: any) => !value);
}


  ngAfterViewInit(): void {
    this.createChartUsuarios();
    this.createChartServicos();
    this.createChartCursos();
    this.createChartEstoque();
    this.createChartAtendimento();
    this.createChartSatisfacao();
    this.createProgressChart();
  }

  createProgressChart() {
    new Chart('progressChart', {
      type: 'bar',
      data: {
        labels: ['E-commerce', 'App Clínica', 'Sistema Hortelãrio'],
        datasets: [{
          label: 'Progresso (%)',
          data: [80, 40, 20],
          backgroundColor: ['rgba(0, 255, 0, 0.7)', 'rgba(0, 200, 0, 0.7)', 'rgba(0, 150, 0, 0.7)']
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }

  createChartUsuarios() {
    new Chart('chartUsuarios', {
      type: 'doughnut',
      data: {
        labels: ['João', 'Maria', 'Lucas', 'Ana'],
        datasets: [{
          label: 'Usuários',
          data: [25, 30, 20, 25],
          backgroundColor: ['#00ff00', '#00cc00', '#009900', '#006600']
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#00ff00' } } }
      }
    });
  }

  createChartServicos() {
    new Chart('chartServicos', {
      type: 'pie',
      data: {
        labels: ['E-commerce', 'App Clínica', 'Hortelário'],
        datasets: [{
          label: 'Serviços',
          data: [50, 30, 20],
          backgroundColor: ['#00ff00', '#00cc00', '#006600']
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#00ff00' } } }
      }
    });
  }

  createChartCursos() {
    new Chart('chartCursos', {
      type: 'doughnut',
      data: {
        labels: ['Full Stack', 'Frontend', 'Backend', 'UX/UI'],
        datasets: [{
          label: 'Vendas de Cursos',
          data: [40, 30, 20, 10],
          backgroundColor: ['#00ff00', '#00cc00', '#009900', '#006600']
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#00ff00' } } }
      }
    });
  }

  createChartEstoque() {
    new Chart('chartEstoque', {
      type: 'doughnut',
      data: {
        labels: ['Carente', 'Moderado', 'Abastecido'],
        datasets: [{
          data: [30, 40, 30],
          backgroundColor: ['#ff0000', '#ffcc00', '#00ff00']
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#00ff00' } } }
      }
    });
  }

  createChartAtendimento() {
    new Chart('chartAtendimento', {
      type: 'bar',
      data: {
        labels: ['Satisfeitos', 'Insatisfeitos', 'A Melhorar'],
        datasets: [{
          data: [60, 20, 20],
          backgroundColor: ['#00ff00', '#ff0000', '#ffcc00']
        }]
      },
      options: {
        scales: { y: { beginAtZero: true, max: 100 } },
        plugins: { legend: { labels: { color: '#00ff00' } } }
      }
    });
  }

  createChartSatisfacao() {
    new Chart('chartSatisfacao', {
      type: 'pie',
      data: {
        labels: ['Satisfeitos', 'Neutros', 'Insatisfeitos'],
        datasets: [{
          data: [50, 30, 20],
          backgroundColor: ['#00ff00', '#ffcc00', '#ff0000']
        }]
      },
      options: {
        plugins: { legend: { labels: { color: '#00ff00' } } }
      }
    });
  }
}
