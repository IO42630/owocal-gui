import { EventDto } from '../model/event.dto';
import { DependencyDto } from '../model/dependency.dto';

let nodes: EventDto[] = [
    {id: 1, name: 'James', role: 'Role1', influence: 5, sorting: 0},
    {id: 2, name: 'Bob', role: 'Role2', influence: 5, sorting: 0},
    {id: 3, name: 'Nancy', role: 'Role3', influence: 5, sorting: 0},
    {id: 4, name: 'Laura', role: 'Role5', influence: 15, sorting: 0},
];

let links: DependencyDto[] = [
    {source: 1, target: 2, weight: 0.2, type: 'Type1', overlap: 0},
    {source: 2, target: 3, weight: 0.2, type: 'Type1', overlap: 0},
    {source: 3, target: 4, weight: 0.2, type: 'Type2', overlap: 0},
    {source: 4, target: 1, weight: 0.2, type: 'Type1', overlap: 0},
];

export const data = {nodes: nodes, links: links};


