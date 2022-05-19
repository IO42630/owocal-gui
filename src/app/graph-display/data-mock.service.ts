import { TaskDto } from '../model/taskDto';
import { DependencyDto } from '../model/dependency.dto';

let nodes: TaskDto[] = [
    {id: 0, title: 'Event 0', description: 'Hello.'},
    {id: 1, title: 'Event 1', description: 'Hello.'},
    {id: 2, title: 'Event 2', description: 'Hello.'},
    {id: 3, title: 'Event 3', description: 'Hello.'},
    {id: 4, title: 'Event 4', description: 'Hello.'},
    {id: 5, title: 'Event 5', description: 'Hello.'},
    {id: 6, title: 'Event 6', description: 'Hello.'},
    {id: 7, title: 'Event 7', description: 'Hello.'},
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


