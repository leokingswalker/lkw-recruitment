export class Dancer {
    id: number;
    firstName: string = '';
    lastName: string = '';
    age: number;
    danceStyles: Array<string>;
    isNewMember: boolean = false;
    points: number = 0;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
