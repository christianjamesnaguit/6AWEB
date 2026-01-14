import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-partners',
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './partners.html',
  styleUrl: './partners.css',
})
export class Partners {
  partners = [
    'University of Innovation',
    'Tech Leaders Inc.',
    'Global Skills Network'
  ];
}
