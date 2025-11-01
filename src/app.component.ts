import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  features = signal<Feature[]>([
    {
      icon: 'M1',
      title: 'Minimalism',
      description: 'Embracing simplicity to create a clean, uncluttered, and elegant user experience that focuses on the essential.',
    },
    {
      icon: 'C2',
      title: 'Contrast',
      description: 'Utilizing a high-contrast, black-and-white palette to ensure readability and create a bold visual impact.',
    },
    {
      icon: 'F3',
      title: 'Functionality',
      description: 'Designing with purpose, where every element serves a function, providing a seamless and intuitive interaction.',
    },
  ]);
}
