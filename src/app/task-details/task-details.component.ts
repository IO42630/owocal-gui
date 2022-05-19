import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskDto } from '../model/taskDto';
import { data } from '../graph-display/data-mock.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html'
})
export class TaskDetailsComponent implements OnInit {

    nullTask = new TaskDto(-1, '', '');
    task = this.nullTask;
    suppliers: TaskDto[] = [];
    consumers: TaskDto[] = [];

    @Input()
    selectedTask!: Subject<number>;

    @Output()
    taskSelectedFromDetail = new EventEmitter();


    ngOnInit(): void {
        this.selectedTask.subscribe(task => this.initTask(task));
    }

    initTask(id: number) {
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

    selectTask(id: number) {
        this.taskSelectedFromDetail.emit(id);
        this.initTask(id);
    }

    save() {
        // save task
        // save dependencies
    }

}
