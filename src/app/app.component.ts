import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  displayedColumns = ['task', 'prio'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title = 'gui';

  selectedTask: number = 0;


  onNodeSelected() {

  }
}

export interface Element {
  task: string;
  prio: number;
}

const ELEMENT_DATA: Element[] = [
  {task: 'Task Foo', prio: 1},
  {task: 'Task Bar', prio: 2},
];
