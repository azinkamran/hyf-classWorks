const user ={
    name:'azinkamran@yahoo.com',
    age:32,
    role:'Studnet',
    classes:['Html','javascript 1'],
    hobbies:{
        favourites: 'computer',
        sports:'runnig to class'
    }
}

//console.log(user)

//how to show properties
//console.log(user.age)
//console.log(user['classes'])

//hoe to add a property
user.lastname='Kamran'
user['firstname']='Azin'

//how to delete a property
delete(user.age)

//output your favouries hobby
//console.log(user.hobbies.favourites)

//output your sendond class
//console.log(user.classes[1])

//console.log(user)

console.log({name:'Peter',lastname:'Pan'}.lastname)