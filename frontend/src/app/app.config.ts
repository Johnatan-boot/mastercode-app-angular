import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),     // Captura erros globais
    provideZonelessChangeDetection(),         // Otimização para apps zoneless
    provideRouter(routes),                    // Suporte ao roteamento
    provideHttpClient(),                      // ✅ HTTP Client para APIs
    provideAnimations(),                      // Requerido para Toastr
    provideToastr()                           // Biblioteca de notificações
  ]
};
