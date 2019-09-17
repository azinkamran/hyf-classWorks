//create a big c
console.log("     #####")
console.log("  ##       ##")
console.log("#")
console.log("#")
console.log("#")
console.log("#")
console.log("  ##       ##")
console.log("     #####")

//another way
let firstlast="     #####"
let second="  ##       ##"
let middle="#"

console.log(firstlast)
console.log(second)
console.log(middle)
console.log(middle)
console.log(middle)
console.log(middle)
console.log(second)
console.log(firstlast)


//another way
console.log(firstlast)
console.log(second)
for (let index = 0; index < 5; index++) {
    console.log(middle)
    
}
console.log(second)
console.log(firstlast)


// mod
let a=26
let b=5
console.log(a % b)


//try if

let isItEven = 39
if( !(isItEven % 2) ){
    console.log(isItEven, "IS EVEN")
}else{
    console.log(isItEven, "is ODD")
}