import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { Profile } from '../portfolio.models';
import { ProfileVisual } from '../profile-visual';

@Component({
  selector: 'app-home-section',
  imports: [NgOptimizedImage, ProfileVisual],
  styleUrl: './home-section.scss',
  template: `
    <section class="hero" id="inicio" aria-labelledby="inicio-titulo" tabindex="-1">
      <div class="hero-copy">
        <p class="eyebrow">Hola, soy</p>
        <h1 id="inicio-titulo">{{ profile().shortName }}</h1>
        <p class="hero-role">{{ profile().role }}</p>
        <p class="hero-description">{{ profile().introduction }}</p>
        <div class="hero-actions">
          <a
            class="button button-primary"
            href="/files/CV_Cristian_Fuentes_Gutierrez.pdf"
            download="CV_Cristian_Fuentes_Gutierrez.pdf"
            aria-label="Descargar CV en PDF"
          >
            Descargar CV
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
          </a>
          <a class="button" href="#proyectos"
            >Ver proyectos
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
            >
              <path d="M12 4v16m-6-6 6 6 6-6" />
            </svg>
          </a>
        </div>
        <ul class="social-links" aria-label="Redes sociales y correo electrónico">
          @for (link of profile().links; track link.url) {
            <li>
              <a class="text-link" [href]="link.url" [attr.aria-label]="link.label">
                <img [ngSrc]="link.icon" width="28" height="28" alt="" />
              </a>
            </li>
          }
        </ul>
      </div>
      <div class="hero-visual">
        <app-profile-visual [image]="profile().homePortrait" [priority]="true" />
        <p class="location">{{ profile().location }}</p>
        <p class="availability"><span aria-hidden="true"></span>{{ profile().availability }}</p>
      </div>
    </section>
  `,
})
export class HomeSection {
  readonly profile = input.required<Profile>();
}
