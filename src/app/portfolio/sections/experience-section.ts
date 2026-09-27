import { Component, input } from '@angular/core';
import { Experience } from '../portfolio.models';
import { TechnologyLogoList } from '../technology-logo-list';

@Component({
  selector: 'app-experience-section',
  imports: [TechnologyLogoList],
  styleUrl: './experience-section.scss',
  template: `
    <section class="section" id="experiencia" aria-labelledby="experiencia-titulo" tabindex="-1">
      <div class="section-heading">
        <span class="section-number" aria-hidden="true">01</span>
        <h2 id="experiencia-titulo">Experiencia</h2>
      </div>
      <ol class="timeline" role="list">
        @for (experience of experiences(); track experience.id) {
          <li class="timeline-item">
            <article [attr.aria-labelledby]="'experiencia-' + experience.id">
              <header>
                <h3 [id]="'experiencia-' + experience.id">{{ experience.organization }}</h3>
                <p class="role">{{ experience.role }}</p>
                @if (experience.team) {
                  <p class="team">{{ experience.team }}</p>
                }
                <p class="dates">
                  <time [attr.datetime]="experience.start">{{ experience.startLabel }}</time>
                  – <time [attr.datetime]="experience.end">{{ experience.endLabel }}</time>
                </p>
              </header>
              <div class="contributions">
                <ul aria-label="Contribuciones">
                  @for (contribution of experience.contributions; track contribution) {
                    <li>{{ contribution }}</li>
                  }
                </ul>
                <app-technology-logo-list
                  [technologies]="experience.technologies"
                  label="Tecnologías utilizadas"
                />
              </div>
            </article>
          </li>
        }
      </ol>
    </section>
  `,
})
export class ExperienceSection {
  readonly experiences = input.required<readonly Experience[]>();
}
