import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { PortraitImage } from './portfolio.models';

@Component({
  selector: 'app-profile-visual',
  imports: [NgOptimizedImage],
  template: `
    <div class="portrait" [class.has-image]="image()">
      @if (image(); as portrait) {
        <img
          [ngSrc]="portrait.src"
          [alt]="portrait.alt"
          fill
          [priority]="priority()"
          [style.object-position]="portrait.position ?? '50% 50%'"
          [style.transform-origin]="horizontalOrigin()"
          [style.transform]="'scale(' + (portrait.zoom ?? 1) + ')'"
          sizes="(max-width: 640px) 65vw, 30vw"
        />
      } @else {
        <span class="monogram" aria-hidden="true">CF<span>.</span></span>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
      max-width: 360px;
      margin-inline: auto;
    }
    .portrait {
      position: relative;
      overflow: hidden;
      display: grid;
      place-items: center;
      aspect-ratio: 1;
      border: 1px solid var(--border);
      border-radius: 50%;
      background: var(--surface);
    }
    .portrait:not(.has-image)::before {
      content: '';
      position: absolute;
      inset: 1.2rem;
      border: 1px solid var(--border);
      border-radius: inherit;
    }
    .monogram {
      font-size: clamp(4rem, 9vw, 7rem);
      font-weight: 700;
      letter-spacing: -0.08em;
      color: var(--muted);
    }
    .monogram span {
      color: var(--accent);
    }
    img {
      object-fit: cover;
      border-radius: inherit;
    }
    @media (max-width: 640px) {
      :host {
        max-width: 240px;
      }
    }
  `,
})
export class ProfileVisual {
  readonly image = input<PortraitImage>();
  readonly priority = input(false);
  // At this zoom level, object-position moves vertically but cannot pan the image
  // horizontally because the unscaled image already fills the circle's width.
  readonly horizontalOrigin = computed(() => {
    const horizontalPosition = this.image()?.position?.trim().split(/\s+/)[0] ?? '50%';
    return `${horizontalPosition} 50%`;
  });
}
