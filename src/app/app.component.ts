import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {HerosSectionComponent} from "./components/heros-section/heros-section.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {CompetencesComponent} from "./components/competences/competences.component";
import {ProjetsComponent} from "./components/projets/projets.component";
import {ContactComponent} from "./components/contact/contact.component";
import {FooterComponent} from "./components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    HerosSectionComponent,
    AboutUsComponent,
    CompetencesComponent,
    ProjetsComponent,
    ContactComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-portfolio';
}
