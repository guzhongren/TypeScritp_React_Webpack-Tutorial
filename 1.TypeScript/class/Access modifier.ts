class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee extends Person {
    private department: string;
    readonly compony:string ="Typescript"
    constructor(name: string, department: string, cp:string) {
        super(name);
        this.department = department;
        this.compony=cp;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales","JavaScript");
// let john = new Person("John"); // Error: The 'Person' constructor is protected