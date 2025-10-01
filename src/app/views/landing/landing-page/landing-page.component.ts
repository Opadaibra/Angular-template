import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ThemeToggleComponent } from '../../../core/shared/theme-toggle.component';

@Component({
  selector: 'app-landing-page',
  imports: [SharedModule,ThemeToggleComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {


}
