import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matrix-canva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matrix.canva.component.html',
  styleUrls: ['./matrix.canva.component.css']
})
export class MatrixCanvaComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private letters = '010101101101010100111'.split('');
  private fontSize = 14;
  private drops: number[] = [];

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();

    const columns = Math.floor(canvas.width / this.fontSize);
    this.drops = Array(columns).fill(1);

    setInterval(() => this.draw(), 33);
  }

  private draw(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.ctx.fillStyle = '#00ff00';
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.letters[Math.floor(Math.random() * this.letters.length)];
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);

      if (this.drops[i] * this.fontSize > canvas.height || Math.random() > 0.975) {
        this.drops[i] = 0;
      }

      this.drops[i]++;
    }
  }

  @HostListener('window:resize')
  public resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const columns = Math.floor(canvas.width / this.fontSize);
    this.drops = Array(columns).fill(1);
  }
}
