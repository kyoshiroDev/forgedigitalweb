import {Component} from '@angular/core';
import {ChipModule} from "primeng/chip";

@Component({
  selector: 'fdw-projets',
  standalone: true,
  imports: [ChipModule],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css',
})
export class ProjetsComponent {

  projects = [
    {
      id: 1,
      image: "/assets/Images/site-refuge-des-tortues.png",
      alt: "image du site pour l'association le refuge des tortues",
      titre: "Refuge des Tortues",
      description: "Création d'un site pour une association de protection des tortues pour un exercice d'entrainement",
      languages: ["html", "CSS", "bootstrap"],
      buttonSite: "https://refuge-des-tortues.netlify.app/",
      buttonGithub: "https://github.com/kyoshiroDev/Site-des-tortues"
    },
    {
      id: 2,
      image: "/assets/Images/site-crazy-dice.png",
      alt: "image du site pour un jeux de dé",
      titre: "The crazy Dice",
      description: "Création d'un mini jeux de dé pour un exercice d'entrainement",
      languages: ["html", "CSS", "JavaScript"],
      buttonSite: "https://the-crazy-dice.netlify.app/",
      buttonGithub: "https://github.com/kyoshiroDev/The-Crazy-Dice"
    },
    {
      id: 3,
      image: "/assets/Images/garage-v-parrot.png",
      alt: "image du site pour le garage v parrot",
      titre: "GarageV Parrot",
      description: "Création d'un site de garage projet d'entrainement",
      languages: ["html", "CSS", "JavaScript", "php", "symfony", "mariadb"],
      buttonSite: "https://ecf-garage-v-parrot-ad9426be4a47.herokuapp.com/",
      buttonGithub: "https://github.com/kyoshiroDev/garage-v-parrot"
    },
  ]
}
