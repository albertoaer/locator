import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: '<ng-content></ng-content>',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor() { }

}
