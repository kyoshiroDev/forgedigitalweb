import {Component, Input,} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {Title} from "@angular/platform-browser";

interface onInit {
}

@Component({
  selector: 'fdw-header',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  @Input('title') title: string = '';

  // Mobile menu activation
  active: boolean = false;

  toggleNavbar(): void {
    this.active = !this.active
  }

  closeNavbar() {
    this.active = false;
  }

  protected readonly Title = Title;
}
