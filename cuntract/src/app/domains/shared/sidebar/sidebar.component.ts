import { Component, Output, EventEmitter } from '@angular/core';
import { UserStorageService } from '../../../services/storage/user-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() selectedOptionEvent = new EventEmitter<string>();

  selection(option: string){
    console.log(option)
    this.selectedOptionEvent.emit(option);
  }
  isTalentIn: Boolean = UserStorageService.IsTalentLoggedIn();
  isBusinessIn: Boolean = UserStorageService.IsBusinessLoggedIn();
}
