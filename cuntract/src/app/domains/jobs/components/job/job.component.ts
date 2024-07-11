import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {
  @Input( {required: true}) placeholder: string = '';
  @Input({required: true}) title: string = '';
  @Input({required: true}) description: string = '';
  @Input({required: true}) payment: number = 1000;
  
}
