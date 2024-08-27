import {Component, ViewChild} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactModel } from '../../models/contact-model';

@Component({
  selector: 'fdw-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

  @ViewChild('contactForm') contactForm!: NgForm;

  contact: ContactModel = {
    lastName: '',
    firstName: '',
    email: '',
    message: '',
  };

  onSubmit() {
    if(this.contactForm.valid){
    this.contactForm.submitted;
    }
  }
}
