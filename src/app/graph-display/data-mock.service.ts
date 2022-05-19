import { TaskDto } from '../model/taskDto';
import { DependencyDto } from '../model/dependency.dto';

let nodes: TaskDto[] = [
    {id: 0, title: 'Event 0', description: 'Hello Event 0.'},
    {id: 1, title: 'Event 1', description: 'Hello Event 1.'},
    {id: 2, title: 'Event 2', description: 'Hello Event 2.'},
    {id: 3, title: 'Event 3', description: 'Hello Event 3.'},
    {id: 4, title: 'Event 4', description: 'Hello Event 4.'},
    {id: 5, title: 'Event 5', description: 'Hello Event 5.'},
    {id: 6, title: 'Event 6', description: 'Hello Event 6.'},
    {id: 7, title: 'Event 7', description: 'Hello Event 7.'},
];

let links: DependencyDto[] = [
    {source: 0, target: 1, sourceId: 0, targetId: 1},
    {source: 1, target: 2, sourceId: 1, targetId: 2},
    {source: 2, target: 3, sourceId: 2, targetId: 3},
    {source: 2, target: 4, sourceId: 2, targetId: 4},
    {source: 3, target: 5, sourceId: 3, targetId: 5},
    {source: 3, target: 6, sourceId: 3, targetId: 6},
    {source: 3, target: 7, sourceId: 3, targetId: 7},
];

export const data = {nodes: nodes, links: links};


