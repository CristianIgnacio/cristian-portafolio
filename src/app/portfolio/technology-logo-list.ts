import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { technologyIcons } from './technology-icons';

@Component({
  selector: 'app-technology-logo-list',
  imports: [NgOptimizedImage],
  styleUrl: './technology-logo-list.scss',
  template: `
    <ul class="technology-logo-list" role="list" [attr.aria-label]="label()">
      @for (technology of technologies(); track technology) {
        <li>
          @if (icons[technology]; as icon) {
            <img [ngSrc]="icon" width="32" height="32" [alt]="technology" [title]="technology" />
          } @else {
            <span>{{ technology }}</span>
          }
        </li>
      }
    </ul>
  `,
})
export class TechnologyLogoList {
  readonly technologies = input.required<readonly string[]>();
  readonly label = input.required<string>();
  protected readonly icons = technologyIcons;
}
