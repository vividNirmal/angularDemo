export class Todo{
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public completed: boolean
    ){}
}
  
export class cosutomInput{
    constructor(
        public name: string,
        public value: string,
        public type: string
    ){}
}