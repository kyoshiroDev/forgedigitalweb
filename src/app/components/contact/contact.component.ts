import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactModel } from '../../models/contact-model';

@Component({
  selector: 'fdw-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contact: ContactModel = {
    lastName: '',
    firstName: '',
    email: '',
    message: '',
  };

  submitted = false
  onSubmit() {
    this.submitted = true
    console.log(this.contact)
  }
}
