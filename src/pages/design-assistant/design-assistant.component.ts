import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-design-assistant',
  templateUrl: './design-assistant.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule]
})
export class DesignAssistantComponent {
  quote = signal({
    name: '',
    company: '',
    email: '',
    phone: '',
    garment: '',
    quantity: null as number | null,
    message: ''
  });
  
  formSubmitted = signal(false);

  submitQuote(event: Event) {
    event.preventDefault();
    const q = this.quote();
    if (!q.name || !q.email || !q.garment || !q.quantity) {
      // Basic validation
      return;
    }

    const recipient = 'roqueesteche6543@gmail.com';
    const subject = `Solicitud de Presupuesto de ${q.name}` + (q.company ? ` (${q.company})` : '');
    const body = `
      Se ha recibido una nueva solicitud de presupuesto con los siguientes detalles:
      
      -----------------------------------------
      Nombre: ${q.name}
      Empresa: ${q.company || 'No especificada'}
      Email de Contacto: ${q.email}
      Teléfono de Contacto: ${q.phone || 'No especificado'}
      -----------------------------------------
      
      Tipo de Prenda: ${q.garment}
      Cantidad Estimada: ${q.quantity}
      
      Mensaje Adicional:
      ${q.message || 'Sin mensaje adicional.'}
    `;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.replace(/^\s+/gm, ''))}`;
    window.location.href = mailtoLink;
    this.formSubmitted.set(true);
  }
}