import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class ServicesComponent {
  services = [
    {
      title: 'Uniformes Empresariales',
      description: 'Diseñamos y confeccionamos uniformes a medida para todo tipo de empresas. Proyecta una imagen profesional y unificada con prendas de alta calidad, durabilidad y con el logo de tu compañía bordado o estampado.',
      price: 'Consultar por cantidad',
      icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>'
    },
    {
      title: 'Ropa de Trabajo y Seguridad',
      description: 'Fabricamos ropa de trabajo resistente y funcional, ideal para el uso industrial y en la construcción. Confeccionamos pantalones, camisas, chaquetas y prendas con cinta reflectiva de alta visibilidad para mayor seguridad.',
      price: 'Consultar por modelo',
      icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>'
    },
    {
      title: 'Confección General y Arreglos',
      description: 'Además de uniformes, realizamos confecciones a medida para eventos especiales (vestidos de 15 años, novias, etc.) y ofrecemos un completo servicio de arreglos para dar nueva vida a tus prendas favoritas.',
      price: 'Desde 50.000 Gs.',
      icon: '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l-4.879 4.879M12 12L7.121 7.121m0 0L2 12m5.121-4.879L12 2m0 0l4.879 5.121"></path></svg>'
    }
  ];
}