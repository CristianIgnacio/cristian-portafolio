import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { TechnologyGroup } from '../portfolio.models';
import { technologyIcons } from '../technology-icons';

@Component({
  selector: 'app-technologies-section',
  imports: [NgOptimizedImage],
  styleUrl: './technologies-section.scss',
  template: `
    <section class="section" id="tecnologias" aria-labelledby="tecnologias-titulo" tabindex="-1">
      <div class="section-heading">
        <span class="section-number" aria-hidden="true">03</span>
        <h2 id="tecnologias-titulo">Tecnologías</h2>
      </div>
      <p class="section-intro">Lenguajes, frameworks y herramientas con los que he trabajado.</p>
      <div class="technology-grid">
        @for (group of groups(); track group.id) {
          <div class="technology-group">
            <h3 [id]="'tecnologias-' + group.id">{{ group.name }}</h3>
            <ul
              class="technology-list"
              role="list"
              [attr.aria-labelledby]="'tecnologias-' + group.id"
            >
              @for (technology of group.items; track technology) {
                <li>
                  @if (technologyIcons[technology]; as icon) {
                    <img
                      [ngSrc]="icon"
                      [width]="technology === 'Office' ? 114 : 48"
                      [height]="technology === 'Office' ? 24 : 48"
                      alt=""
                    />
                  }
                  <span>{{ technology }}</span>
                </li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `,
})
export class TechnologiesSection {
  readonly groups = input.required<readonly TechnologyGroup[]>();
  protected readonly technologyIcons = technologyIcons;
}
