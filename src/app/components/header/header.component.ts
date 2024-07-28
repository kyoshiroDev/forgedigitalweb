import {Component,} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {NgClass, NgOptimizedImage} from "@angular/common";

interface onInit {
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  faBars = faBars;
  faXmark = faXmark;

  // Mobile menu activation
  active: boolean = false;

  toggleNavbar(): void {
    this.active = !this.active
  }

  closeNavbar() {
    this.active = false;
  }
}
