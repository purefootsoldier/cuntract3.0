import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { JobComponent } from "../../../jobs/components/job/job.component";
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, JobComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
