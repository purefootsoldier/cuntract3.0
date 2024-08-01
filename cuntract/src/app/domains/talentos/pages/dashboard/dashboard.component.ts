import { Component } from '@angular/core';
import { TalentoService } from '../../../../services/talento/talento.service';
import { JobComponent } from "../../../jobs/components/job/job.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { HeaderComponent } from "../../../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JobComponent, FooterComponent, HeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  ofertas: any = [];
  validateForm!: FormGroup;
  constructor(private talentoService: TalentoService,
    private fb: FormBuilder
  ){

  }

  getAllOfertas() {
    this.talentoService.getAllOfertas().subscribe(res => {
      this.ofertas = res;
      console.log('ayy' +res);
    });
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      oferta: [null,[Validators.required]]
    })
    this.getAllOfertas();
  }
  searchOfertaByTitulo(){
    console.log(this.validateForm.get(['oferta']).value)
    this.talentoService.searchOfertaByTitulo(this.validateForm.get(['oferta']).value).subscribe(res =>{
      this.ofertas = res
    })
  }

  updateImg(imagen: string): string {
    return 'data:image/jpeg;base64,' + imagen;
  }


}
