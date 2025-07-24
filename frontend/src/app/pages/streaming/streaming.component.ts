import { Component } from '@angular/core';
import { SafeUrlPipe } from '../../pipes/safe-url-pipe';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-streaming',
  imports:[SafeUrlPipe, NgFor],
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css']
})
export class StreamingComponent {
  posts = [
    {
      title: 'Apresentação da MasterCode',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Conheça nossos valores, missão e visão para o futuro da educação em tecnologia.'
    },
    {
      title: 'Como funciona nossa metodologia',
      videoUrl: 'https://www.youtube.com/embed/Bey4XXJAqS8',
      description: 'Explicamos como ensinamos na prática com foco em projetos reais.'
    }
  ];
}
