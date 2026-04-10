import { Injectable } from '@angular/core';

import { LumenIcon } from './lumen-icons';

@Injectable({
  providedIn: 'root',
})
export class LumenIconsService {
  private readonly registry = new Map<string, string>();

  public registerIcons(icons: LumenIcon[]): void {
    icons.forEach((icon: LumenIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    return this.registry.get(iconName);
  }
}
