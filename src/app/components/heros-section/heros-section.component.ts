import { Component } from '@angular/core';


// Import icons Font Awasome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faSquareGithub,} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-heros-section',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './heros-section.component.html',
  styleUrl: './heros-section.component.css'
})

export class HerosSectionComponent {
  // socials icons
  faLinkedin = faLinkedin;
  faSquareGithub = faSquareGithub;
}
