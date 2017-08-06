export class Dancer {
    id: number;
    firstName: string = '';
    lastName: string = '';
    age: number;
    img: string = 'assets/LKW-white copy.png';
    danceStyles: Array<string>;
    status: string = "Member";
    points: number = 0;
    schoolName: String = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
