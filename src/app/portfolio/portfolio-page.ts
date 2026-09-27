import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { experiences, profile, projects, technologyGroups } from './portfolio.data';
import { AboutSection } from './sections/about-section';
import { ExperienceSection } from './sections/experience-section';
import { HomeSection } from './sections/home-section';
import { ProjectsSection } from './sections/projects-section';
import { TechnologiesSection } from './sections/technologies-section';

@Component({
  selector: 'app-portfolio-page',
  imports: [HomeSection, ExperienceSection, AboutSection, TechnologiesSection, ProjectsSection],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.scss',
})
export class PortfolioPage {
  private readonly viewportScroller = inject(ViewportScroller);
  private readonly siteHeader = viewChild<ElementRef<HTMLElement>>('siteHeader');
  readonly profile = profile;
  readonly experiences = experiences;
  readonly technologyGroups = technologyGroups;
  readonly projects = projects;
  readonly sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'proyectos', label: 'Proyectos' },
  ] as const;

  constructor() {
    // Keep anchors visible below the header, including when the mobile menu wraps.
    this.viewportScroller.setOffset(() => [
      0,
      (this.siteHeader()?.nativeElement.getBoundingClientRect().height ?? 80) + 16,
    ]);
  }
}
