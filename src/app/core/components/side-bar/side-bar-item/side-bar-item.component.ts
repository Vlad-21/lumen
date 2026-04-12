import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { LumenIconComponent } from '@core/components';
import { lumenIcon } from '@core/components';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrl: './side-bar-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, LumenIconComponent],
})
export class SideBarItemComponent {
  public readonly icon = input.required<lumenIcon>();
  public readonly label = input.required<string>();
  public readonly link = input<string | null>(null);
  public readonly soon = input<boolean>(false);
}
