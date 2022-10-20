import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ul[navbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  options: { name: string, icon: string }[] = [
    { name: 'Artifacts', icon: 'location_on' },
    { name: 'Terminal', icon: 'terminal' },
    { name: 'Edit', icon: 'edit' },
  ]

  selectedOption: number = -1;

  constructor() { }

  ngOnInit(): void {
  }
}
