import { Component, OnInit, Input } from '@angular/core';
import { EventDto } from '../model/event.dto';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html'
})
export class TaskDetailsComponent implements OnInit {

  @Input()
  event!: EventDto;

  constructor() { }

  ngOnInit(): void {
  }

}