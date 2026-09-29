import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input, linkedSignal } from '@angular/core';
import { PortfolioImage } from './portfolio.models';

@Component({
  selector: 'app-project-image-carousel',
  imports: [NgOptimizedImage],
  templateUrl: './project-image-carousel.html',
  styleUrl: './project-image-carousel.scss',
  host: { '(keydown)': 'onKeydown($event)' },
})
export class ProjectImageCarousel {
  readonly images = input.required<readonly [PortfolioImage, ...PortfolioImage[]]>();
  readonly projectName = input.required<string>();
  readonly currentIndex = linkedSignal({ source: this.images, computation: () => 0 });
  readonly currentImage = computed(() => this.images()[this.currentIndex()]);
  readonly hasMultipleImages = computed(() => this.images().length > 1);

  private pointerStart: { id: number; x: number; y: number } | undefined;

  previous(): void {
    this.goTo(this.currentIndex() - 1);
  }

  next(): void {
    this.goTo(this.currentIndex() + 1);
  }

  goTo(index: number): void {
    const length = this.images().length;
    this.currentIndex.set(((index % length) + length) % length);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.altKey || event.ctrlKey || event.metaKey || !this.hasMultipleImages()) return;

    switch (event.key) {
      case 'ArrowLeft':
        this.previous();
        break;
      case 'ArrowRight':
        this.next();
        break;
      case 'Home':
        this.goTo(0);
        break;
      case 'End':
        this.goTo(this.images().length - 1);
        break;
      default:
        return;
    }
    event.preventDefault();
  }

  onPointerDown(event: PointerEvent): void {
    this.pointerStart =
      event.isPrimary && event.button === 0
        ? { id: event.pointerId, x: event.clientX, y: event.clientY }
        : undefined;
  }

  onPointerUp(event: PointerEvent): void {
    const start = this.pointerStart;
    this.pointerStart = undefined;
    if (!start || start.id !== event.pointerId) return;

    const distanceX = event.clientX - start.x;
    const distanceY = event.clientY - start.y;
    if (
      this.hasMultipleImages() &&
      Math.abs(distanceX) > 40 &&
      Math.abs(distanceX) > Math.abs(distanceY) * 1.5
    ) {
      distanceX < 0 ? this.next() : this.previous();
    }
  }

  cancelGesture(): void {
    this.pointerStart = undefined;
  }
}
