export class DependencyDto {

    constructor(
        public source: any,
        public target: any,
        public weight: number,
        public type: string,
        public overlap: number
    ) {}
}
