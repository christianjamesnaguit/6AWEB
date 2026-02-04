import { Component, inject } from '@angular/core';
import { DataService, Post } from '../data.service';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  posts$ = inject(DataService).posts$;
  today: Date = new Date('2026-02-04'); // Use current date

  constructor() {
    inject(DataService).fetchPosts();
  }
}
