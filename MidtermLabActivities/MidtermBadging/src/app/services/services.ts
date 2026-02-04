import { Component, inject } from '@angular/core';
import { DataService, Post } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from '../truncate.pipe';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  imports: [CommonModule, FormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  private dataService = inject(DataService);
  searchTerm: string = '';
  today: Date = new Date('2026-02-04');
  error$ = new BehaviorSubject<string | null>(null);

  searchTerm$ = new BehaviorSubject<string>('');

  loading$ = this.dataService.isLoading$;

  posts$: Observable<Post[]> = combineLatest([
    this.dataService.posts$,
    this.searchTerm$.pipe(startWith(''))
  ]).pipe(
    map(([posts, term]) => {
      const lowerTerm = term.toLowerCase();
      return posts.filter(post =>
        post.title.toLowerCase().includes(lowerTerm) ||
        post.body.toLowerCase().includes(lowerTerm)
      );
    }),
    catchError(err => {
      this.error$.next('Failed to load posts');
      return [];
    })
  );

  constructor() {
    this.dataService.fetchPosts();
  }

  onSearchTermChange(term: string) {
    this.searchTerm = term;
    this.searchTerm$.next(term);
  }
}
