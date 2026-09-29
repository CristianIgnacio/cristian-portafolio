import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectImageCarousel } from './project-image-carousel';
import { PortfolioImage } from './portfolio.models';

describe('ProjectImageCarousel', () => {
  let fixture: ComponentFixture<ProjectImageCarousel>;
  let element: HTMLElement;
  const images: readonly [PortfolioImage, ...PortfolioImage[]] = [
    { src: '/images/soloropa-catalog.png', alt: 'Catálogo' },
    { src: '/images/soloropa-explorer.png', alt: 'Explorador' },
    { src: '/images/soloropa-home.png', alt: 'Inicio' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectImageCarousel] }).compileComponents();
    fixture = TestBed.createComponent(ProjectImageCarousel);
    fixture.componentRef.setInput('images', images);
    fixture.componentRef.setInput('projectName', 'SoloRopa');
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  function button(label: string): HTMLButtonElement {
    const match = element.querySelector<HTMLButtonElement>(`button[aria-label="${label}"]`);
    if (!match) throw new Error(`Button not found: ${label}`);
    return match;
  }

  function swipe(x: number, y: number, cancelled = false): void {
    const viewport = element.querySelector('.viewport');
    const event = (type: string, clientX: number, clientY: number) => {
      const pointer = new Event(type, { bubbles: true });
      Object.assign(pointer, { pointerId: 1, isPrimary: true, button: 0, clientX, clientY });
      return pointer;
    };
    viewport?.dispatchEvent(event('pointerdown', 200, 100));
    if (cancelled) viewport?.dispatchEvent(event('pointercancel', 200, 100));
    viewport?.dispatchEvent(event('pointerup', 200 + x, 100 + y));
    fixture.detectChanges();
  }

  it('wraps in both directions and exposes only the selected slide to assistive technology', () => {
    button('Imagen anterior de SoloRopa').click();
    fixture.detectChanges();
    expect(element.querySelector('.slide.is-active img')?.getAttribute('alt')).toBe('Inicio');
    expect(element.querySelectorAll('.slide[aria-hidden="false"]')).toHaveLength(1);
    expect(element.querySelector('[aria-current="true"]')?.getAttribute('aria-label')).toContain(
      '3 de 3',
    );

    button('Imagen siguiente de SoloRopa').click();
    fixture.detectChanges();
    expect(element.querySelector('.slide.is-active img')?.getAttribute('alt')).toBe('Catálogo');
  });

  it('supports direct selection and keyboard navigation without intercepting modified shortcuts', () => {
    button('Mostrar imagen 2 de 3: Explorador').click();
    fixture.detectChanges();
    expect(element.querySelector('.slide.is-active img')?.getAttribute('alt')).toBe('Explorador');

    const next = button('Imagen siguiente de SoloRopa');
    for (const [key, expected] of [
      ['End', 'Inicio'],
      ['Home', 'Catálogo'],
      ['ArrowRight', 'Explorador'],
      ['ArrowLeft', 'Catálogo'],
    ]) {
      next.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }));
      fixture.detectChanges();
      expect(element.querySelector('.slide.is-active img')?.getAttribute('alt')).toBe(expected);
    }
    const shortcut = new KeyboardEvent('keydown', {
      key: 'ArrowLeft',
      altKey: true,
      bubbles: true,
      cancelable: true,
    });
    next.dispatchEvent(shortcut);
    expect(shortcut.defaultPrevented).toBe(false);
    expect(fixture.componentInstance.currentIndex()).toBe(0);
  });

  it('resets selection when a different gallery replaces the current images', () => {
    button('Mostrar imagen 3 de 3: Inicio').click();
    fixture.componentRef.setInput('images', [images[1]]);
    fixture.detectChanges();
    expect(element.querySelector('.slide.is-active img')?.getAttribute('alt')).toBe('Explorador');
    expect(element.querySelector('.status')?.textContent).toContain('Imagen 1 de 1: Explorador');
    expect(element.querySelector('.controls')).toBeNull();
    expect(element.querySelectorAll('button')).toHaveLength(0);
  });

  it('changes slides on horizontal gestures', () => {
    swipe(-90, 4);
    expect(element.querySelector('.slide.is-active img')?.getAttribute('alt')).toBe('Explorador');
    swipe(90, 4);
    expect(element.querySelector('.slide.is-active img')?.getAttribute('alt')).toBe('Catálogo');
  });

  it('ignores vertical, short and cancelled gestures', () => {
    swipe(-10, 0);
    swipe(-60, 100);
    swipe(-100, 0, true);
    expect(element.querySelector('.slide.is-active img')?.getAttribute('alt')).toBe('Catálogo');
  });
});
