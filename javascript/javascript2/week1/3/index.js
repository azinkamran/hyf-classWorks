const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];


const podCastUl = document.querySelector('ul');

for( const pod of podcasts){
   const li = document.createElement("li");
   const h1 = document.createElement("h1");
   h1.innerHTML = pod.name;
   li.appendChild(h1);
   if(pod.imageUrl){
       const img = document.createElement('img');
       img.src= pod.imageUrl
       li.appendChild(img);
   }
   podCastUl.appendChild(li);
}