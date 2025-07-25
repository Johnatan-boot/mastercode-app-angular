import { Component, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnDestroy {

  alunos = ['Ana', 'Bruno', 'Carlos', 'Daniela'];
  showAlunos = signal(true);

  // Referências dos gráficos
  private charts: { [key: string]: Chart } = {};

  toggleAlunos() {
    this.showAlunos.update((value: any) => !value);
  }

  ngAfterViewInit(): void {
    this.createAllCharts();
  }

  ngOnDestroy(): void {
    this.destroyAllCharts();
  }

  private createAllCharts(): void {
    this.createChart('progressChart', 'bar', ['E-commerce', 'App Clínica', 'Sistema Hortelãrio'], [80, 40, 20], ['rgba(0, 255, 0, 0.7)', 'rgba(0, 200, 0, 0.7)', 'rgba(0, 150, 0, 0.7)'], 'Progresso (%)');
    this.createChart('chartUsuarios', 'doughnut', ['João', 'Maria', 'Lucas', 'Ana'], [25, 30, 20, 25], ['#00ff00', '#00cc00', '#009900', '#006600'], 'Usuários');
    this.createChart('chartServicos', 'pie', ['E-commerce', 'App Clínica', 'Hortelário'], [50, 30, 20], ['#00ff00', '#00cc00', '#006600'], 'Serviços');
    this.createChart('chartCursos', 'doughnut', ['Full Stack', 'Frontend', 'Backend', 'UX/UI'], [40, 30, 20, 10], ['#00ff00', '#00cc00', '#009900', '#006600'], 'Vendas de Cursos');
    this.createChart('chartEstoque', 'doughnut', ['Carente', 'Moderado', 'Abastecido'], [30, 40, 30], ['#ff0000', '#ffcc00', '#00ff00'], 'Estoque');
    this.createChart('chartAtendimento', 'bar', ['Satisfeitos', 'Insatisfeitos', 'A Melhorar'], [60, 20, 20], ['#00ff00', '#ff0000', '#ffcc00'], 'Atendimentos');
    this.createChart('chartSatisfacao', 'pie', ['Satisfeitos', 'Neutros', 'Insatisfeitos'], [50, 30, 20], ['#00ff00', '#ffcc00', '#ff0000'], 'Satisfação');
  }

  private createChart(id: string, type: any, labels: string[], data: number[], colors: string[], label: string): void {
    const ctx = document.getElementById(id) as HTMLCanvasElement;

    if (this.charts[id]) {
      this.charts[id].destroy();
    }

    const config = {
      type,
      data: {
        labels,
        datasets: [{
          label,
          data,
          backgroundColor: colors
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#00ff00'
            }
          }
        },
        scales: type === 'bar' ? {
          y: {
            beginAtZero: true,
            max: 100
          }
        } : {}
      }
    };

    this.charts[id] = new Chart(ctx, config);
  }

  private destroyAllCharts(): void {
    Object.keys(this.charts).forEach(id => {
      this.charts[id].destroy();
      delete this.charts[id];
    });
  }
}
