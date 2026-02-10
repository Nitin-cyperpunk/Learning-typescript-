export interface Userinterface {
    name : string;
    age: number;
    hasPet: boolean;

}



const user  :Userinterface  ={
    name: "John",
    age: 30,
    hasPet: true
}

user.age = "31";
console.log(user.age);