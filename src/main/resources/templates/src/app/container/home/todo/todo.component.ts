import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MainDataService} from "../../../services/main.data.service";
import {TodoMain} from "../../../models/main";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {

  @Input('todoMain') todoMain:TodoMain;
  constructor(
    private mainDataService: MainDataService,
  ) { }

  ngOnInit() {
    this.todoMain = {
      itemsNum:0,
      todos:[]
    }
    this.mainDataService.selectTodoMainState();
  }

  todoFormControl = new FormControl('', [
    // Validators.required,
  ]);
  addTodo(){
    if(this.todoFormControl.value == ''){
      return;
    }
    this.mainDataService.addTodo(this.todoFormControl.value);
    this.todoFormControl.setValue('')
  }

}
