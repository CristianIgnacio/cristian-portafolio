import { Component, input } from '@angular/core';
import { Profile } from '../portfolio.models';
import { ProfileVisual } from '../profile-visual';

@Component({
  selector: 'app-about-section',
  imports: [ProfileVisual],
  styleUrl: './about-section.scss',
  template: `
    <section class="section" id="sobre-mi" aria-labelledby="sobre-mi-titulo" tabindex="-1">
      <div class="section-heading">
        <span class="section-number" aria-hidden="true">02</span>
        <h2 id="sobre-mi-titulo">Sobre mí</h2>
      </div>
      <div class="about-layout">
        <div class="about-visual"><app-profile-visual [image]="profile().aboutPortrait" /></div>
        <div class="about-copy">
          @for (paragraph of profile().about; track paragraph) {
            <p>{{ paragraph }}</p>
          }
          <h3>Me interesa</h3>
          <ul class="tag-list" role="list">
            @for (interest of profile().interests; track interest) {
              <li>{{ interest }}</li>
            }
          </ul>
        </div>
      </div>
      <div class="about-details">
        <div>
          <h3>Formación académica</h3>
          <ul class="education-list" role="list">
            @for (education of profile().education; track education.degree) {
              <li>
                <p class="education-period">{{ education.period }}</p>
                <h4>{{ education.degree }}</h4>
                <p>{{ education.institution }}</p>
                @for (detail of education.details; track detail) {
                  <p class="education-detail">{{ detail }}</p>
                }
              </li>
            }
          </ul>
        </div>
        <div>
          <h3>Idiomas</h3>
          <dl>
            @for (language of profile().languages; track language.name) {
              <div>
                <dt>{{ language.name }}</dt>
                <dd>{{ language.level }}</dd>
              </div>
            }
          </dl>
        </div>
      </div>
    </section>
  `,
})
export class AboutSection {
  readonly profile = input.required<Profile>();
}
