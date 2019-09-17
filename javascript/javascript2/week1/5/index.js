const myBtn = document.querySelector("button.myBtn")

console.log(myBtn)

function clicked(){
   myBtn.innerHTML ="changed"
}
myBtn.addEventListener("click",clicked)

// function mouseover(){
//     myBtn.innerHTML ="happy"
//  }
// myBtn.addEventListener("onmouseover",mouseover)

