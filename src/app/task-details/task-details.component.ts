import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskDto } from '../model/taskDto';
import { data } from '../graph-display/data-mock.service';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html'
})
export class TaskDetailsComponent implements OnInit {

    task!: TaskDto;
    suppliers: TaskDto[] = [];
    consumers: TaskDto[] = [];

    @Input()
    taskSelectedFromGraph: number = 0;

    @Output()
    taskSelectedFromDetail = new EventEmitter();

    constructor() {

    }

    ngOnInit(): void {
        this.initTask(2);
    }

    initTask(id: number) {
        this.taskSelectedFromDetail.emit(id);

        this.task = data.nodes[id];
        const supplierIds = data.links
            .filter(link => link.targetId === this.task.id)
            .map(link => link.sourceId);
        this.suppliers = data.nodes.filter(node => supplierIds.indexOf(node.id) >= 0);
        const consumerIds = data.links
            .filter(link => link.sourceId == this.task.id)
            .map(link => link.targetId);
        this.consumers = data.nodes.filter(node => consumerIds.indexOf(node.id) >= 0);
    }

    clearTask() {
        this.task = new TaskDto(-1, '', '');
        this.suppliers = [];
        this.consumers = [];
    }

    save() {
        // save task
        // save dependencies
    }

}
