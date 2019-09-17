let dish=['steak','sushi','shawerma','falafel','hamburger'];
const myFavoriteDish = document.querySelector("ul");

for(const meal of dish ){
    const li = document.createElement('li')
    //li.appendChild(document.createTextNode(meal));
    //above line and below line are the same
    li.innerHTML= meal;
    myFavoriteDish.appendChild(li);

}
