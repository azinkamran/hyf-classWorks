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

const user2 ={
    name:'rzyazdi@yahoo.dk',
    age:39,
    role:'eng',
    classes:['Html','writing'],
    hobbies:{
        favourites: 'compyter',
        sports:'basball'
    }
}

const users=[user,user2]

//write a loop that addes the ages

let sumAge = 0
for (let i = 0; i < users.length; i++) {
    sumAge +=  users[i].age
}
console.log(sumAge)
//write average age
let average= sumAge / users.length
console.log(average)

//go through all the usres and collect all the classes but skip duplicates
let allclasses =[]
for(let j=0; j < users.length; j++){
    debugger
    for(let k=0; k < users[j].classes.length;k++){
        if(!(allclasses.includes([users[j].classes[k]]))){
            allclasses += users[j].classes[k]
            allclasses += " "
        }
    }
}
console.log(allclasses)