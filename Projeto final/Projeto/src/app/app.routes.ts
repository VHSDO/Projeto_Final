import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full',loadComponent:() => {return import("./pages/login/login") .then(c => c.Login)}},
  { path:'home', pathMatch:"full",loadComponent: () => {return import("./pages/home/home") .then(c => c.Home)}},
  {path:"comparador", pathMatch:"full",loadComponent: () => {return import("./pages/comparador/comparador") .then(c => c.Comparador)}},
  {path:"reserva-compra", pathMatch:"full",loadComponent: () => {return import("./pages/reserva-compra/reserva-compra") .then(c => c.ReservaCompra)}}
];

