// doc.routes.ts
import { Routes } from '@angular/router';
import { DocComponent } from './doccomponent';

export const DOC_ROUTES: Routes = [
  {
    path: '',
    component: DocComponent,
    children: [
      { path: 'docComponent', component: DocComponent }
    ]
  }
];
