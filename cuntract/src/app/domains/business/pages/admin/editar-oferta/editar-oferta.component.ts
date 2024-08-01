import { Component } from '@angular/core';
import { FooterComponent } from "../../../../shared/footer/footer.component";
import { HeaderComponent } from "../../../../shared/header/header.component";
import { JobComponent } from "../../../../jobs/components/job/job.component";
import { NegocioService } from '../../../../../services/negocio/negocio.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-oferta',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FooterComponent, HeaderComponent, JobComponent, RouterLink],
  templateUrl: './editar-oferta.component.html',
  styleUrl: './editar-oferta.component.css'
})
export class EditarOfertaComponent {
  ofertaId: any = this.activatedroute.snapshot.params['id'];


  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  validateForm: FormGroup;
  existingImage: string | null = null;
  imgChanged = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private negocioService: NegocioService,
    private activatedroute: ActivatedRoute){}

  ngOnInit(){
    this.validateForm = new FormGroup({
      titulo:new FormControl('', [Validators.required]),
      descripcion:new FormControl('', [Validators.required]),
      pago:new FormControl('', [Validators.required]),
    })
    this.getOfertaById();
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
    this.existingImage = null;
    this.imgChanged = true
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile)
  }

  updateOferta() {

    const formData: FormData = new FormData();
    if(this.imgChanged && this.selectedFile) {
      formData.append('img', this.selectedFile);
    }
    formData.append('imagen', this.selectedFile);
    formData.append('titulo', this.validateForm.get('titulo').value);
    formData.append('descripcion', this.validateForm.get('descripcion').value);
    formData.append('pago', this.validateForm.get('pago').value);
    this.negocioService.updateOferta(this.ofertaId,formData).subscribe(res => {
      console.log('esotilin he sido mejorado')
      this.router.navigateByUrl('list');

    }, error => {
      console.log('wazaaaaa mal uso del upload')
    })
  }

  getOfertaById(){
    this.negocioService.getOfertaById(this.ofertaId).subscribe(res=>{
      console.log(res);
      this.validateForm.patchValue(res);
      this.existingImage = 'data:image/jpeg;base64,' + res.returnedImg;
    })
  }

}
