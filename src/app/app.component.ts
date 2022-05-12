import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EventDto } from './model/event.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  displayedColumns = ['task', 'prio'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title = 'gui';

  selectedEvent = new EventDto(
      1,
      new Date(),
      new Date(),
      'title',
      'description',
      [2, 3],
      [3, 4],
      'prio',
      ['tag1', 'tag2']
  );


  onNodeSelected() {
    this.selectedEvent = new EventDto(
        1,
        new Date(),
        new Date(),
        'title',
        'description',
        [2, 3],
        [3, 4],
        'prio',
        ['tag1', 'tag2']
    );
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
