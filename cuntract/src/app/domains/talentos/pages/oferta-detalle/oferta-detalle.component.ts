import { Component } from '@angular/core';
import { TalentoService } from '../../../../services/talento/talento.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../../shared/header/header.component";
import { FooterComponent } from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-oferta-detalle',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, RouterOutlet],
  templateUrl: './oferta-detalle.component.html',
  styleUrl: './oferta-detalle.component.css'
})
export class OfertaDetalleComponent {
  oferta:any
  avatarUrl: any;
  ofertaId: any = this.activatedroute.snapshot.params['id'];
  constructor(private talentoService: TalentoService,
    private activatedroute: ActivatedRoute,
  ){

  }

  ngOnInit(){
    this.getOfertaDetailsByOfertaId();
  }
  getOfertaDetailsByOfertaId(){
    this.talentoService.getOfertaDetailsById(this.ofertaId).subscribe(res => {
      console.log(res);
      this.avatarUrl = "data:image/jpeg;base64," + res.ofertaDto.imagenRegresada;
      this.oferta = res.ofertaDto;
    })
  }

}
