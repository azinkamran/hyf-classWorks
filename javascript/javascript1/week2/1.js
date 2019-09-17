let fruits = ['oranges','apples','cherries'];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log()
//the same loop in while

i = 0
while (i < fruits.length) {
    console.log(fruits[i])
    i++
}

console.log()
//print in reverse order by loop
for(i=2;i<fruits.length & i>=0;i--){
    console.log(fruits[i])
}

console.log()
//print in reverse order by loop another way
for(i=fruits.length-1;i>=0;i--){
    console.log(fruits[i])
}

console.log()
// out put like this "oranges, apples and cherries"
let a =""
for(i=0;i<fruits.length;i++){
    
    if(i===0){
        a =a +fruits[i]
    }
    else if (i===1){ 
        a=a+', '
        a =a +fruits[i]
    }else if(i===2){ 
        a=a+' and '
        a =a +fruits[i]
    }
}
console.log(a);