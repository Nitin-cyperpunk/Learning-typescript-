"use strict";

// let age : number = 21;
// console.log(typeof(age));

// const concat = (a: string, b: string): string => {
//     return a + b;
// }   
// console.log(concat("Hello ", "World!"));    
// console.log(concat("5", "10"));


interface Employee {
   readonly employeeId: number;
     readonly startDate: Date;

    name: string;
    age: number;
    hasPet: boolean;
    department: string;
}

const employee: Employee = {
    employeeId: 12345,
    startDate: new Date(),
    name: "John",
    age: 30,
    hasPet: true,
    department: "IT"
}


console.log(employee);