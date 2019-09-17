//write a function that takes temprature in celcius
// and returns the tempreture in farenhait
const celTemp = 20
let farTemp=converting(celTemp)


console.log("the degree is "+farTemp+" in farenhait")


function converting(celTemp) {
    return celTemp * 9/5 +32
}

//reverce function
const tempInFarenhait=101
let tempInCelcios = farToCel(tempInFarenhait)

function farToCel(tempInFarenhait){
    return (tempInFarenhait-32) * 5/9
}
console.log("the degree is "+tempInCelcios+" in celsious")

// get in celsious change to far change