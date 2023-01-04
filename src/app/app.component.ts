import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDo Application';
  user = 'Resul Kızmaz';
  list_items = [
    { description: 'Kahvaltı', action: 'No' },
    { description: 'Sinema', action: 'No' },
    { description: 'Spor', action: 'No' },
    { description: 'Kodlama', action: 'No' },
    { description: 'Akşam Yemeği', action: 'No' },
  ];
}
