import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserStorageService } from '../../../services/storage/user-storage.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isTalentIn: Boolean = UserStorageService.IsTalentLoggedIn();
  isBusinessIn: Boolean = UserStorageService.IsBusinessLoggedIn();
  menuOpen: boolean;

  constructor(private router:Router) {
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      this.isTalentIn = UserStorageService.IsTalentLoggedIn();
      this.isBusinessIn = UserStorageService.IsBusinessLoggedIn();
   })
  }
  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
