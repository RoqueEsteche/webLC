import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule]
})
export class ContactComponent {
  formSubmitted = signal(false);
  contact = signal({ name: '', email: '', message: '' });

  submitForm(event: Event) {
    event.preventDefault();
    const contactData = this.contact();
    const recipient = 'roqueesteche6543@gmail.com';
    const subject = `Mensaje de Contacto de ${contactData.name}`;
    const body = `
      Nombre: ${contactData.name}
      Email: ${contactData.email}
      
      Mensaje:
      ${contactData.message}
    `;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    this.formSubmitted.set(true);
  }
}