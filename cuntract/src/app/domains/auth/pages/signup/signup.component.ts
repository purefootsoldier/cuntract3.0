
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet , Router} from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';
import { FooterComponent } from "../../../shared/footer/footer.component";
import { HeaderComponent } from "../../../shared/header/header.component";
import { BusinessSignupComponent } from './business-signup/business-signup.component';
import { TalentSignupComponent } from './talent-signup/talent-signup.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FooterComponent, HeaderComponent, HeaderComponent, FooterComponent, BusinessSignupComponent, TalentSignupComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
