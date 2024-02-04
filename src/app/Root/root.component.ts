import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionsComponent } from '../Sections/sections.component';
import { SocialsComponent } from '../Socials/socials.component';

@Component({
  selector: 'Root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SectionsComponent, SocialsComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {
  title = 'human';

  sections = [
    {
      title: 'Explore the Docs',
      link: 'https://angular.dev',
    },
    {
      title: 'Learn with Tutorials',
      link: 'https://angular.dev/tutorials',
    },
    {
      title: 'CLI Docs',
      link: 'https://angular.dev/tools/cli',
    },
    {
      title: 'Angular Language Service',
      link: 'https://angular.dev/tools/language-service',
    },
    {
      title: 'Angular DevTools',
      link: 'https://angular.dev/tools/devtools',
    },
  ];

  socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/angular/angular',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/angular',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/channel/UCbn1OgGei-DV7aSRo_HaAiw',
    },
  ];
}
