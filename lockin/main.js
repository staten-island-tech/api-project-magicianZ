import './style.css'



document.querySelector('#app').innerHTML = `

<button id="gamelookup">Game Lookup </button>
<div id="container">
  <form action=""id="forum">
    <input type="text" id="input">
    <label for="text">What game do you wish to search for?</label>
    </form>

  
  

  
`

let Domselectors = {
  glup:document.querySelector("#gamelookup"),
  container:document.querySelector("#container"),
  gamelookupform:document.querySelector("#input"),
}

const URL1 = `https://www.cheapshark.com/api/1.0/games?title=Lethal`;



Domselectors.glup.addEventListener("click",async function(){
  try{
    let URL = `https://www.cheapshark.com/api/1.0/games?title=${Domselectors.gamelookupform.value}`;
    let fetching = await fetch(URL);
    let RealUrl = await fetching.json();
    let htmlelements = ""
    RealUrl.forEach((sm)=>htmlelements+=`
    <div class="flip-card">
      <div class="flip-card-inner">
          <div class="flip-card-front">
              <p class="title">${sm.external}</p>
              <img src=${sm.thumb}>
          </div>
          <div class="flip-card-back">
              <p class="title">${sm.cheapest}</p>
              <p>Leave Me</p>
          </div>
      </div>
  </div>
    
    
    
    `
   
    
   
    
    
    
    
    )
    Domselectors.container.innerHTML = htmlelements
   
}catch{
  console.log('catched')
}


})




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