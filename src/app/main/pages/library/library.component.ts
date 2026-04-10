import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string | null;
  progress: number;
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibraryComponent {
  protected readonly books = signal<Book[]>([]);
}
