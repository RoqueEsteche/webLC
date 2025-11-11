import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery',
  template: `
    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">Nuestra Galería</h1>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Un vistazo a la calidad y el detalle en algunas de nuestras creaciones. Desde uniformes corporativos hasta prendas a medida, cada pieza refleja nuestra pasión por la confección.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (image of galleryImages; track image.src) {
          <div class="group overflow-hidden rounded-lg shadow-lg bg-white transform hover:scale-105 transition-transform duration-300">
            <img [ngSrc]="image.src" [alt]="image.alt" width="400" height="300" class="w-full h-64 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-700">{{ image.title }}</h3>
              <p class="text-sm text-gray-500 mt-1">{{ image.description }}</p>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage]
})
export class GalleryComponent {
  galleryImages = [
    {
      src: 'https://picsum.photos/id/1025/400/300',
      alt: 'Uniformes empresariales con logo bordado',
      title: 'Uniformes Corporativos',
      description: 'Camisas y blusas elegantes con el logo de la empresa bordado con precisión.'
    },
    {
      src: 'https://picsum.photos/id/237/400/300',
      alt: 'Ropa de trabajo industrial',
      title: 'Ropa de Trabajo',
      description: 'Overoles y pantalones de alta resistencia para el sector industrial.'
    },
    {
      src: 'https://picsum.photos/id/1084/400/300',
      alt: 'Vestido de gala hecho a medida',
      title: 'Alta Costura',
      description: 'Vestido de noche diseñado y confeccionado a medida para una ocasión especial.'
    },
    {
      src: 'https://picsum.photos/id/1040/400/300',
      alt: 'Delantales personalizados para restaurante',
      title: 'Uniformes Gastronómicos',
      description: 'Delantales y uniformes para personal de cocina y salón, combinando estilo y funcionalidad.'
    },
    {
      src: 'https://picsum.photos/id/163/400/300',
      alt: 'Polos con estampado para evento',
      title: 'Prendas Promocionales',
      description: 'Polos de algodón de alta calidad con estampado serigráfico para eventos corporativos.'
    },
    {
      src: 'https://picsum.photos/id/431/400/300',
      alt: 'Detalle de un bordado en una chaqueta',
      title: 'Bordados Personalizados',
      description: 'Acercamiento a la calidad de nuestro bordado computarizado sobre una chaqueta de jean.'
    }
  ];
}
