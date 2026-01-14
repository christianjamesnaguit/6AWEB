import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-join',
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './join.html',
  styleUrl: './join.css',
})
export class Join {
  name = '';
  email = '';
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
