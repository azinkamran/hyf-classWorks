//add first name, last name and age and a
// function called changeTitle() and isOlderThan()

class Person {
  constructor(firstName, lastName, title, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.age = age;
  }
  display() {
    return `${this.firstName} ${this.lastName} Title is: ${
      this.title
    } his age is:${this.age}`;
  }
  changeTitle(newTitle) {
    this.title = newTitle;
  }

  isOlderThan(other) {
    return this.age > other.age ? true : false;
    //return this.age > other.age ? this.firstName : other.firstName
  }
}

const rohit = new Person("rohit", "Sharma", "FE developer", 30);

console.log(rohit.display());

rohit.changeTitle("happy");
console.log(rohit.display());

const Azin = new Person("Azin", "Kamran", "IT support", 33);
console.log(rohit.isOlderThan(Azin));


///teacher's way

// class Person {
//     constructor(firstName, lastName, age, title) {
//       // fix name so display() can work
//       this.name = firstName + lastName;
//       this.title = title;
//       this.age = age;
//     }
  
//     changeTitle(newTitle) {
//       // change title to newTitle
//       this.title = newTitle;
//     }
  
//     static isOlderThan(first, second) {
//       // compare with another person
//       // return bool
//       const older = first.age > second.age ? first : second;
//       return `${older.name} is older`;
//     }
  
//     display() {
//       return `${this.name} is a ${this.title}.`;
//     }
//   }
  
//   const rohit = new Person("rohit", "sharma", 29, "programmer");
//   rohit.changeTitle("chef");
//   console.log(rohit.display());
  
//   const rohan = new Person("rohan", "", 25);
//   console.log(Person.isOlderThan(rohit, rohan));