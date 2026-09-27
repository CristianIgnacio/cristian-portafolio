export interface PortfolioImage {
  readonly src: string;
  readonly alt: string;
}

export interface PortraitImage extends PortfolioImage {
  readonly position?: string;
  readonly zoom?: number;
}

export interface ProfileLink {
  readonly label: string;
  readonly url: string;
  readonly icon: string;
}

export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
  readonly details: readonly string[];
}

export interface Profile {
  readonly homePortrait?: PortraitImage;
  readonly aboutPortrait?: PortraitImage;
  readonly name: string;
  readonly shortName: string;
  readonly role: string;
  readonly location: string;
  readonly introduction: string;
  readonly availability: string;
  readonly email: string;
  readonly links: readonly ProfileLink[];
  readonly about: readonly string[];
  readonly interests: readonly string[];
  readonly education: readonly Education[];
  readonly languages: readonly { readonly name: string; readonly level: string }[];
}

export interface Experience {
  readonly id: string;
  readonly role: string;
  readonly organization: string;
  readonly team?: string;
  readonly start: string;
  readonly startLabel: string;
  readonly end: string;
  readonly endLabel: string;
  readonly contributions: readonly string[];
  readonly technologies: readonly string[];
}

export interface TechnologyGroup {
  readonly id: string;
  readonly name: string;
  readonly items: readonly string[];
}

export interface Project {
  readonly image?: PortfolioImage;
  readonly images?: readonly [PortfolioImage, ...PortfolioImage[]];
  readonly id: string;
  readonly name: string;
  readonly context: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly codeUrl?: string;
  readonly demoUrl?: string;
  readonly demoLabel?: string;
}
