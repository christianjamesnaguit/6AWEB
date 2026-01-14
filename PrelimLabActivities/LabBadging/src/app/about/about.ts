import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [RouterLink, NgIf],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  message = '';
  showMessage() {
    this.message = 'Thank you for learning more about GlobalConferences!';
  }
}
