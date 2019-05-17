class Person {
    constructor(name){
        this.name = name;
    }
    sayName(){
        setTimeout(function(){
             console.log("hi i am " + this.name);
        }, 1000); 
    }
}

let john = new Person("john");
john.sayName(); 
// john.sayName.call(john); 