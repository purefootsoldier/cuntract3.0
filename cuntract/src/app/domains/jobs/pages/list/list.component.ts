import { Component, signal } from '@angular/core';
import { JobComponent } from '../../components/job/job.component';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { Job } from '../../../shared/models/job.model';
import { NegocioService } from '../../../../services/negocio/negocio.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, JobComponent, HeaderComponent, FooterComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  ofertas: any;

  constructor(private negocioService: NegocioService) {}

  ngOnInit() {
    this.getAllOfertasByUserId();
  }

  getAllOfertasByUserId() {
    this.negocioService.getAllOfertasByUserId().subscribe(res => {
      this.ofertas = res;
    });
  }

  updateImg(imagen: string): string {
    return 'data:image/jpeg;base64,' + imagen;
  }
}
