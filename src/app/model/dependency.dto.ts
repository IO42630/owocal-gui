export class DependencyDto {

    constructor(
        public source: number,
        public target: number,
        public weight: number,
        public type: string,
        public overlap: number
    ) {}
}
