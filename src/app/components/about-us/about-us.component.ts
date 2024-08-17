import { Component } from '@angular/core';

@Component({
  selector: 'fdw-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  contact = {
    git: "Github",
    linkedin: "Linkedin",
    form: "Formulaire de contact",
    cv: "Télécharger mon CV"
  };
}
