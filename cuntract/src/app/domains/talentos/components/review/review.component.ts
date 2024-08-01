import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TalentoService } from '../../../../services/talento/talento.service';
import { UserStorageService } from '../../../../services/storage/user-storage.service';
import { error } from 'console';
import { HeaderComponent } from "../../../shared/header/header.component";
import { FooterComponent } from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, FooterComponent, FooterComponent, HeaderComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  ofertaId:number = this.activatedRoute.snapshot.params['id'];
  validateForm:FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private talentoService: TalentoService,
    private activatedRoute: ActivatedRoute

  ){

  }

  ngOnInit(){
    this.validateForm = new FormGroup({
      rating: new FormControl("",[Validators.required,Validators.max(5)]),
      review: new FormControl("",[Validators.required])
    })
  }

  giveReview(){
    const reviewDto = {
      rating: this.validateForm.get("rating").value,
      review: this.validateForm.get("review").value,
      userId: UserStorageService.getUserId(),
      ofertaId: this.ofertaId
    }
    this.talentoService.giveReview(reviewDto).subscribe(res => {
    console.log('creado con exito');
    this.router.navigateByUrl("list")
    }, error=>{
      console.log('uys que mal')
    })

  }

}
