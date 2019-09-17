
//Create a new array of color of each ice cream
//Use Array.map

const iceCreams = [
    { flavor: 'pineapple', color: 'white' },
    { flavor: 'strawberry', color: 'red' },
    { flavor: 'watermelon', color: 'red' },
    { flavor: 'kiwi', color: 'green' },
    { flavor: 'mango', color: 'yellow' },
    { flavor: 'pear', color: 'green' }
  ];

const icecreamColors = iceCreams.map(function (item){
    return "the colors are : " + item.color
})
  
console.log(icecreamColors)



/////////////////// part2
// Map mentors array to a new array containing number of subjects each mentor can teach
// Use
// 1. Arrow functions
// 2. Array.map

const mentors = [
    { name: 'Abed Sujan', subjects: ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4 },
    { name: 'Ahmed Magdy', subjects: ['JS', 'Database', 'CSS'], yearOfExperience: 1 },
    { name: 'Alicia Gonzales', subjects: ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8 },
    { name: 'allan Thraen', subjects: ['REACT', 'HTML', 'CSS'], yearOfExperience: 3 },
    { name: 'Anders Ravn', subjects: ['JS', 'HTML', 'NODEJS'], yearOfExperience: 2 },
    { name: 'Daniel Fernandes', subjects: ['Database', 'HTML', 'CSS'], yearOfExperience: 9 }
  ];
  

// with Array.map 
//   const howManyTheyCanTeach = mentors.map(function(courses){
//         return courses.name + "courses are: " + courses.subjects.length
//   })
// console.log(howManyTheyCanTeach)


// with Arrow functions
 const howManyTheyCanTeach = mentors.map(courses => courses.name + "courses are: " + courses.subjects.length);

 console.log(howManyTheyCanTeach)