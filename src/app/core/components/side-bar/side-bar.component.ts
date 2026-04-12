import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LumenIconComponent } from '@core/components';
import { ThemeService } from '@core/services';

import { SideBarItemComponent } from './side-bar-item/side-bar-item.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LumenIconComponent, SideBarItemComponent],
})
export class SideBarComponent {
  public readonly themeService = inject(ThemeService);
}
