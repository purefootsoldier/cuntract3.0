import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, Router, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserStorageService } from '../../../../services/storage/user-storage.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-job',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
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

  @Input( {required: true}) placeholder: any;
  @Input({required: true}) title: string = '';
  @Input({required: true}) description: string = '';
  @Input({required: true}) payment: any;
  @Input({required: true}) id: any;
  @Output() deleteRequest = new EventEmitter<number>();
  onDeleteClick() {
    this.deleteRequest.emit(this.id);
  }



}
