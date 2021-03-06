import { Component } from '@angular/core';

import { DataDrivenComponent } from "./data-driven/data-driven.component";

@Component({
  moduleId: module.id,
  selector: 'forms-app',
  templateUrl: 'forms.component.html',
  directives: [DataDrivenComponent]
})
export class AppComponent {
}
