export class EventDto {

    constructor(
        public id: number,
        public start: Date,
        public end: Date,
        public title: string,
        public description: string,
        public supplierEvents: number[],
        public consumerEvents: number[],
        public priority: string,
        public tags: string[]
    ) {}
}