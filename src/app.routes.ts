import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    title: 'Inicio | Confecciones LC'
  },
  {
    path: 'galeria',
    loadComponent: () => import('./pages/gallery/gallery.component').then(c => c.GalleryComponent),
    title: 'Galería | Confecciones LC'
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/services/services.component').then(c => c.ServicesComponent),
    title: 'Servicios | Confecciones LC'
  },
  {
    path: 'presupuesto',
    loadComponent: () => import('./pages/design-assistant/design-assistant.component').then(c => c.DesignAssistantComponent),
    title: 'Solicitar Presupuesto | Confecciones LC'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent),
    title: 'Contacto | Confecciones LC'
  },
  { path: '**', redirectTo: '' }
];