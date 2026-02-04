import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { shareReplay, filter, map } from 'rxjs/operators';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postsSubject = new BehaviorSubject<Post[] | null>(null);
  public posts$: Observable<Post[]> = this.postsSubject.asObservable()
    .pipe(
      filter((posts): posts is Post[] => posts !== null),
      shareReplay(1)
    );

  isLoading$ = this.postsSubject.asObservable().pipe(
    map(posts => posts === null)
  );

  constructor(private http: HttpClient) {}

  fetchPosts(): void {
    if (!this.postsSubject.value) {
      this.http.get<Post[]>(this.postsUrl).subscribe(posts => {
        this.postsSubject.next(posts);
      });
    }
  }

  refreshPosts(): void {
    this.http.get<Post[]>(this.postsUrl).subscribe(posts => {
      this.postsSubject.next(posts);
    });
  }
}
