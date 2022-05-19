export class DependencyDto {

    constructor(
        public source: any,
        public target: any,
        public sourceId: number,
        public targetId: number,
    ) {}
}
