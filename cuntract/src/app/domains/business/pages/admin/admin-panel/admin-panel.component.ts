import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/header/header.component";
import { SidebarComponent } from '../../../../shared/sidebar/sidebar.component';
import { FooterComponent } from "../../../../shared/footer/footer.component";
import { CrearOfertaComponent } from '../../../components/crear_oferta/crear-oferta/crear-oferta.component';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from "../../../components/chats/chats.component";
import { MisOfertasComponent } from "../../../components/mis-ofertas/mis-ofertas.component";
@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, CrearOfertaComponent, CommonModule, ChatsComponent, MisOfertasComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  selectedOption: string = '';

  selected(selection: string){
    this.selectedOption = selection;
  }


}
