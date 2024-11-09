import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup,
} from '@angular/material/card';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardImage,
    MatCardActions,
    MatButton,
    MatCardTitle,
    MatCardSubtitle,
    MatCardTitleGroup,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    const currentColorTheme = this.themeService.getPreferredColorTheme();
    this.themeService.setColorTheme(currentColorTheme);
  }

  public readonly description = `Aqui no Canal Descomplicando a prática você vai encontrar muitos
  projetos e tutoriais práticos de programação. Teremos muito conteúdo de Angular,
  React, Java e Spring Boot.`;

  public toggleTheme(): void {
    this.themeService.toggleColorTheme();
  }
}
