import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { PortfolioImage } from './portfolio.models';

@Component({
  selector: 'app-project-image-carousel',
  imports: [NgOptimizedImage],
  styleUrl: './project-image-carousel.scss',
  template: `
    <div class="carousel" role="region" [attr.aria-label]="'Imágenes de ' + projectName()">
      <img
        [ngSrc]="currentImage().src"
        [alt]="currentImage().alt"
        fill
        sizes="(max-width: 700px) 90vw, 45vw"
      />
      <button
        type="button"
        class="carousel-arrow carousel-previous"
        [attr.aria-label]="'Imagen anterior de ' + projectName()"
        (click)="previous()"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        class="carousel-arrow carousel-next"
        [attr.aria-label]="'Imagen siguiente de ' + projectName()"
        (click)="next()"
      >
        <span aria-hidden="true">›</span>
      </button>
      <div
        class="carousel-dots"
        role="group"
        [attr.aria-label]="'Elegir imagen de ' + projectName()"
      >
        @for (image of images(); track image.src; let index = $index) {
          <button
            type="button"
            class="carousel-dot-button"
            [attr.aria-label]="
              'Mostrar imagen ' + (index + 1) + ' de ' + images().length + ' de ' + projectName()
            "
            [attr.aria-current]="currentIndex() === index ? 'true' : null"
            (click)="goTo(index)"
          >
            <span class="carousel-dot" aria-hidden="true"></span>
          </button>
        }
      </div>
      <span class="carousel-status" aria-live="polite" aria-atomic="true">
        Imagen {{ currentIndex() + 1 }} de {{ images().length }}
      </span>
    </div>
  `,
})
export class ProjectImageCarousel {
  readonly images = input.required<readonly [PortfolioImage, ...PortfolioImage[]]>();
  readonly projectName = input.required<string>();
  readonly currentIndex = signal(0);
  readonly currentImage = computed(() => this.images()[this.currentIndex()] ?? this.images()[0]);

  previous(): void {
    this.currentIndex.update((index) => (index - 1 + this.images().length) % this.images().length);
  }

  next(): void {
    this.currentIndex.update((index) => (index + 1) % this.images().length);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}
