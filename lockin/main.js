import './style.css'



document.querySelector('#app').innerHTML = `
<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">FLIP CARD</p>
            <p>Hover Me</p>
        </div>
        <div class="flip-card-back">
            <p class="title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>

  
`


const URL1 = `https://www.cheapshark.com/api/1.0/games?title=God`;

async function something(){
  try{
    let URL = `https://www.cheapshark.com/api/1.0/games?title=God`;
  let fetching = await fetch(URL);
  let RealUrl = await fetching.json();
  console.log('a')
  RealUrl.forEach((so)=>console.log(so.cheapest))
}catch{
  console.log('catched')
}
}

something()

/* 
async function gettingdata(URL){
  try{
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    

  }
  catch{
    console.log("catched")
  }
}

gettingdata(URL1)

function yay(attunement,et){
  et.addEventListener("click", function(event){
       event.preventDefault()
       let htmlelements = ""
       let x = deepwoken.filter((something)=>something.attunement===`${attunement}`);
       x.forEach((sm)=>htmlelements+=`<div id="card"> <p>${sm.name}</p> <img src=${sm.img}><p>${sm.type}</p> <p> ${sm.stars}★</div>`)
       DOMselectors.container.innerHTML = htmlelements
       
   });
}

 */