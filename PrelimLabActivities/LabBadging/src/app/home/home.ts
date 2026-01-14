import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'Welcome to GlobalConferences!';
  description = 'Connecting professionals and thought leaders at conferences around the world. Discover, learn, and network with us at our next global event.';
}
