import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NegocioService } from '../../../../../services/negocio/negocio.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../shared/header/header.component';

@Component({
  selector: 'app-crear-oferta',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './crear-oferta.component.html',
  styleUrl: './crear-oferta.component.css'
})
export class CrearOfertaComponent {

  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private negocioService: NegocioService){



  }
  ngOnInit(){
    this.validateForm = new FormGroup({
      titulo:new FormControl('', [Validators.required]),
      descripcion:new FormControl('', [Validators.required]),
      pago:new FormControl('', [Validators.required]),
      paga:new FormControl('', [Validators.required]),
    })
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile)
  }

  postOferta() {
    const formData: FormData = new FormData();

    formData.append('imagen', this.selectedFile)
    formData.append('titulo', this.validateForm.get('titulo').value);
    formData.append('descripcion', this.validateForm.get('descripcion').value);
    formData.append('pago', this.validateForm.get('pago').value);
    this.negocioService.postOferta(formData).subscribe(res => {
      console.log('esotilin')
      this.router.navigateByUrl('Business/oferta');

    }, error => {
      console.log('wazaaaaa')
    })
  }

}
