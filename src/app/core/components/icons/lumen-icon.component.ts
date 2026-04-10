import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  input,
} from '@angular/core';

import { lumenIcon } from './lumen-icons';
import { LumenIconsService } from './lumen-icons.service';

@Component({
  selector: 'app-icon',
  template: `<ng-content />`,
  styles: [
    ':host::ng-deep svg { display: flex; justify-content: center; align-items: center }',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LumenIconComponent {
  public readonly name = input.required<lumenIcon>();

  private svgIcon: SVGElement | undefined;

  private readonly document = inject<Document>(DOCUMENT);
  private readonly iconsService = inject(LumenIconsService);
  private readonly element = inject(ElementRef);

  constructor() {
    effect(() => {
      const iconName = this.name();

      if (this.svgIcon) {
        this.element.nativeElement.removeChild(this.svgIcon);
      }

      const svgData = this.iconsService.getIcon(iconName);

      if (!svgData) {
        return;
      }

      this.svgIcon = this.svgElementFromString(svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    });
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
