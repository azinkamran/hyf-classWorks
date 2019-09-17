// Creating a CV class

// The CV that we will be making uses three classes: Job, Education and CV. 
// The CV class we have made for you (with some missing functionality). 
// The Job and Education classes you need to create.


// Part 1:
// Create the classes Job and Education.
// Job has five properties: id, title, description, startDate and endDate 
//                      (the dates can be strings or actual Date objects).
// Education has six properties: id, title, school, address, startDate and endDate.


// Part 2:
// Now add the functionality for the methods in the CV class.

// Remember: jobs and educations are just arrays of class instances. 
// So use your array manipulation knowledge for the add and remove methods.

class CV {
  constructor(jobs, educations, email) {
    // write code here
    this.jobs=jobs
    this.educations=educations
    this.email=email
  }

  addJob(job) {
    // add functionality here
    this.jobs.push(job)
    
  }

  removeJob(job) {
    // add functionality here
    const index = this.jobs.indexOf(job)
    this.jobs.splice(index,1)
  }

  addEducation(education) {
    // add functionality here
    this.educations.push(education)
  }

  removeEducation(education) {
    // add functionality here
    const index = this.educations.indexOf(education)
    this.educations.splice(index,1)
  }
}

class job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}


const Azin=new CV([],[],"azinkamran@yahoo.com")
//console.log(Azin)

const developer = new job(1,"FE developer","coder","April","September")
Azin.addJob(developer)
//console.log(Azin)

//Azin.removeJob(developer)
//console.log(Azin)

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
const engeenier =new Education(1,"eng","DTU","copenhagen","jan","dec")
Azin.addEducation(engeenier)
console.log(Azin)

//Azin.removeEducation(engeenier)
//console.log(Azin)

