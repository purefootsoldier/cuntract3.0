import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../../../services/auth/auth.service';
import { HeaderComponent } from '../../../../shared/header/header.component';
import { FooterComponent } from '../../../../shared/footer/footer.component';

@Component({
  selector: 'app-talent-signup',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule, FormsModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './talent-signup.component.html',
  styleUrl: './talent-signup.component.css'
})
export class TalentSignupComponent {
  signUpForm!: FormGroup;
  successMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(5)]),
      email: new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
      confirmPassword: new FormControl('', [Validators.required]),
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
      const nombre = this.signUpForm.get('userName')?.value;
      const correo = this.signUpForm.get('correo')?.value;
      const password = this.signUpForm.get('password')?.value;
      const role = 'TALENTO';
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
