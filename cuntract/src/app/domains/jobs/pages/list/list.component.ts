import { Component, signal } from '@angular/core';
import { JobComponent } from '../../components/job/job.component';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { Job } from '../../../shared/models/job.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ JobComponent, HeaderComponent, FooterComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Job[]>([]);
  constructor() {
    const initJobs: Job[] = [
      {
        id: Date.now(),
        titulo: 'gg',
        descripcion: 'bebito fiu fiu',
        paga: 100,
        images: 'https://picsum.photos/640/640?=r24'

      }
    ]
  }

}
