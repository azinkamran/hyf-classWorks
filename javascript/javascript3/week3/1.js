class Person {
  constructor(name, title) {
    this.name = name;
    this.title = title;
    
    // agar dar constuctor benevisim bayad be soorate function tarif konim 
    //vali age kharej az constructor bashad be soirate zir ast

    // this.display= function(){
    //     return `${this.name} Title is: ${this.title}`;
    // }
  }
  display() {
    return `${this.name} Title is: ${this.title}`;
  }
}

const rohit = new Person("rohit","FE developer");

console.log(rohit.display())
// console.log(rohit);
// console.log(rohit instanceof Person);
// console.log(rohit instanceof Object);
