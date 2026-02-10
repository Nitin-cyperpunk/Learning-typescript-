// export interface Userinterface {
//     name : string;
//     age: number;
//     hasPet: boolean;

// }



// const user  :Userinterface  ={
//     name: "John",
//     age: 30,
//     hasPet: true
// }


// console.log(user.age);


//  type IDFielsType = string | number;
// const printID = ( id: IDFielsType) => {
//     console.log("ID:" + id)
// };
// printID("10184899");

// interface businesspartner {
//     name : string;
//     credit: number;
// }

// interface useridentity{
//     id : number;
//     name : string;
// }
// type employee = businesspartner & useridentity;

// const signContract = (emp: employee): void => {
//     console.log(`Hello ${emp.name} your credit is ${emp.credit} and your id is ${emp.id}`);
// }

// signContract({name: "John", credit: 5000, id: 12345});

/// enums 
// enum loginError {
//     unauthorized = "Invalid username or password",
//     locked = "User account is locked",
//     disabled = "User account is disabled",
//     expired = "User account has expired",
//     notActivated = "User account is not activated"
// }

// const printErrorMsg = (error: loginError): void => {
//     if (error === loginError.unauthorized) {
//         console.log("Please check your username and password and try again.");
//     } else if (error === loginError.locked) {
//         console.log("Your account is locked. Please contact support.");
//     } else if (error === loginError.disabled) {
//         console.log("Your account is disabled. Please contact support.");
//     } else if (error === loginError.expired) {
//         console.log("Your account has expired. Please contact support.");
//     }
//     console.log( error);
// }
// printErrorMsg(loginError.unauthorized);

// printErrorMsg(loginError.locked);

// printErrorMsg(loginError.disabled);


/// genrics

class StorageContainer<T>{
    private contensts: T[];
    constructor(){
        this.contensts = [];
    }
    addItem(item: T): void {
        this.contensts.push(item);
    }   
    getItem(idx: number): T  | undefined{
        return this.contensts[idx];
    }
}

const usernames = new StorageContainer<string>();
usernames.addItem("John");
usernames.addItem("Jane");

console.log(usernames.getItem(0));
console.log(usernames.getItem(1));

const friends = new StorageContainer<number>();
friends.addItem(23);
friends.addItem(45);
console.log(friends.getItem(0));
console.log(friends.getItem(1));