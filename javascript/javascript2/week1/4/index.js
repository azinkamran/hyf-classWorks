const myBtn = document.querySelector("button.myBtn")

console.log(myBtn)

function mybuttonCLickHandler(){
    console.log("Why did you click me?")
    const url='https://picsum.photos/50/50'
    const img = document.createElement('img')
    img.src = url

}
//complete it from class video