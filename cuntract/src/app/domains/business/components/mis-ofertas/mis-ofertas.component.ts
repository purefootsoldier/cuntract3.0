import { Component } from '@angular/core';
import { NegocioService } from '../../../../services/negocio/negocio.service';
import { JobComponent } from "../../../jobs/components/job/job.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-ofertas',
  standalone: true,
  imports: [JobComponent ,CommonModule],
  templateUrl: './mis-ofertas.component.html',
  styleUrl: './mis-ofertas.component.css'
})
export class MisOfertasComponent {

  ofertas: any;

  constructor(private negocioService: NegocioService) {}

  ngOnInit() {
    this.getAllOfertasByUserId();
  }

  getAllOfertasByUserId() {
    this.negocioService.getAllOfertasByUserId().subscribe(res => {
      this.ofertas = res;
      console.log(res);
    });
  }

  updateImg(imagen: string): string {
    return 'data:image/jpeg;base64,' + imagen;
  }

  deleteOferta(ofertaId: any) {
    this.negocioService.deleteOferta(ofertaId).subscribe(res =>{
    console.log('EXITUS MAXIMUS');
    this.getAllOfertasByUserId();
    });
  }

}
