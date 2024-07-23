import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   loginForm!: FormGroup;

   constructor(
    private authService: AuthService,
    private router: Router
   ) {

   }
  ngOnInit() {
    this.loginForm = new FormGroup ({
     email: new FormControl("",[Validators.required, Validators.email]),
     password: new FormControl("",[Validators.required])
    })
  }
  onSubmit() {
    const username = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    this.authService.login(username, password).subscribe(
      (res) => {

        console.log("token creado con exito");
        this.router.navigateByUrl("");
      },
      (error) => {
        console.log("no se logro crear el token")
      }
    )


  }

}
