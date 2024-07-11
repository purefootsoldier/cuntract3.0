import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet , Router} from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm!: FormGroup;
  successMessage: string | null = null;
  
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userName: new FormControl("",[Validators.required,Validators.minLength(5)]),
      correo: new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
      confirmPassword: new FormControl('', [Validators.required]),
      Role: new FormControl("",Validators.required)
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const userName = this.signUpForm.get('userName')?.value;
      const correo = this.signUpForm.get('correo')?.value;
      const password = this.signUpForm.get('password')?.value;
      const Role = this.signUpForm.get('Role')?.value;
    }

    this.authService.register(this.signUpForm.value).subscribe(
      (response) => {
        this.successMessage = 'Cuenta creada de forma exitosa';
        
        setTimeout(() => {
          // Oculta el mensaje de éxito
          this.successMessage = null;
  
          // Redirige a la ruta deseada
          this.router.navigateByUrl("/login");
        }, 500); // 500 milisegundos
        
      },
      (error) => {
        this.successMessage = 'algo ha salido mal, intenta otra vez';
      })
  }
}