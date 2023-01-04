import { Component } from '@angular/core';
import { Model,TodoItems } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToDo Application';
  model = new Model();

  getName() {
    return this.model.user;
  }
  getItems() {
    //items'ların içindeki item.action değeri false olanları
    return this.model.items.filter((item) => !item.action);
  }
  addItem(value: string){
    if(value!=""){
      this.model.items.push(new TodoItems(value,false));
    }
  }
}
