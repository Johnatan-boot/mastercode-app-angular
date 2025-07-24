import { Routes } from '@angular/router';
import { CursosComponent } from './pages/cursos/cursos.component';
import { StreamingComponent } from './pages/streaming/streaming.component';
import { ConfirmacaoComponent } from './pages/confirmacao/confirmacao.component';
import { NovidadesComponent } from './pages/novidades/novidades';
import { DashboardTableComponent } from './pages/dashboard-table';

export const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 {
   path: 'doc',
    loadChildren: () =>
      import('./pages/doccomponent/doc.routes').then((m) => m.DOC_ROUTES),
 },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login.routes').then((m) => m.LOGIN_ROUTES),
  },
   {
    path: 'cadastro',
    loadChildren: () =>
      import('./pages/cadastro/cadastro.routes').then((m) => m.CADASTRO_ROUTES),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'servicos',
    loadChildren: () =>
      import('./pages/services/servicos.routes').then((m) => m.SERVICOS_ROUTES),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'orcamento',
    loadChildren: () =>
      import('./pages/orcamento/orcamento.routes').then((m) => m.ORCAMENTO_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
  },
    { path: 'dashboard-table', component: DashboardTableComponent },

  { path: 'cursos', component: CursosComponent },
  { path: 'streaming', component: StreamingComponent },
   { path: 'confirmacao', component: ConfirmacaoComponent },
   { path: 'novidades', component: NovidadesComponent }

  // outras rotas...
];
