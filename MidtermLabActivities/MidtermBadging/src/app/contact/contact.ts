import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, TruncatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name: string = '';
  email: string = '';
  message: string = '';
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}
