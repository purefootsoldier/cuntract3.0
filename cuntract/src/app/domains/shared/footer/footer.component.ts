import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkWithHref, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
