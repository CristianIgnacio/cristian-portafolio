import { Component, input } from '@angular/core';
import { Project } from '../portfolio.models';
import { TechnologyLogoList } from '../technology-logo-list';
import { ProjectImageCarousel } from '../project-image-carousel';

@Component({
  selector: 'app-projects-section',
  imports: [TechnologyLogoList, ProjectImageCarousel],
  styleUrl: './projects-section.scss',
  template: `
    <section class="section" id="proyectos" aria-labelledby="proyectos-titulo" tabindex="-1">
      <div class="section-heading">
        <span class="section-number" aria-hidden="true">04</span>
        <h2 id="proyectos-titulo">Proyectos</h2>
      </div>
      <p class="section-intro">Una selección de aplicaciones en las que he trabajado.</p>
      <div class="projects-list">
        @for (project of projects(); track project.id; let index = $index) {
          <article class="project" [attr.aria-labelledby]="'proyecto-' + project.id">
            <div
              class="project-cover"
              [class.project-cover-gallery]="project.images || project.image"
            >
              @if (project.images; as images) {
                <app-project-image-carousel [images]="images" [projectName]="project.name" />
              } @else if (project.image; as image) {
                <app-project-image-carousel [images]="[image]" [projectName]="project.name" />
              } @else {
                <div class="project-lettering" aria-hidden="true">
                  <span class="cover-index">Proyecto / {{ index + 1 }}</span>
                  <span class="cover-title">{{ project.name }}</span>
                </div>
              }
            </div>
            <div class="project-copy">
              <header>
                <p class="project-context">{{ project.context }}</p>
                <h3 [id]="'proyecto-' + project.id">{{ project.name }}</h3>
              </header>
              <app-technology-logo-list
                [technologies]="project.technologies"
                [label]="'Tecnologías de ' + project.name"
              />
              <p class="project-description">{{ project.description }}</p>
              @if (project.codeUrl || project.demoUrl) {
                <footer class="project-links">
                  @if (project.codeUrl) {
                    <a
                      class="button"
                      [href]="project.codeUrl"
                      [attr.aria-label]="'Ver código de ' + project.name"
                      >Ver código <span aria-hidden="true">↗</span></a
                    >
                  }
                  @if (project.demoUrl) {
                    <a
                      class="button"
                      [href]="project.demoUrl"
                      [attr.aria-label]="(project.demoLabel ?? 'Ver demo') + ': ' + project.name"
                      >{{ project.demoLabel ?? 'Ver demo' }} <span aria-hidden="true">↗</span></a
                    >
                  }
                </footer>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProjectsSection {
  readonly projects = input.required<readonly Project[]>();
}
