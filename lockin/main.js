import './style.css'



document.querySelector('#app').innerHTML = `

<button id="gamelookup">Game Lookup </button>
<button id="deallookup"> Deal Lookup </button>
<button id="nextpage"> Next page </button>
<form action=""id="forum">
    <input type="text" id="input">
    <label for="text">What game do you wish to search for?</label>
    <input type="text" id="input1">
    <label for="text">testing phase</label>
    </form>
    
<div id="container">
  
  

`

let testing = 0

let Domselectors = {
  glup:document.querySelector("#gamelookup"),
  container:document.querySelector("#container"),
  gamelookupform:document.querySelector("#input"),
  deallookupform:document.querySelector("#input1"),
  dlup:document.querySelector("#deallookup"),
  npage:document.querySelector("#nextpage"),
  input1:document.querySelector("#input1"),
  
}

const URL1 = `https://www.cheapshark.com/api/1.0/games?title=Lethal`;
const URL2 = `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json`


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


Domselectors.dlup.addEventListener("click",async function(){
    try{
      let URLD = `https://www.cheapshark.com/api/1.0/deals?storeID=${plswork}`;
      let fetching = await fetch(URLD);
      let RealUrlD = await fetching.json();
      let htmlelements = ""
      RealUrlD.forEach((sm)=>htmlelements+=`
      <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <p class="title">${sm.title}</p>
                <img src=${sm.thumb}>
                <p class="title"> ${sm.dealRating} Rating </p>
            </div>
            <div class="flip-card-back">
                <p class="title">${sm.normalPrice} Norm Price</p>
                <p class="title">${sm.salePrice} Sale Price</p>
                <p class="title">${(((sm.normalPrice - sm.salePrice)/sm.normalPrice) * 100).toFixed(1)}% Off</p>
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


Domselectors.npage.addEventListener("click",function(event){
  
  return testing + 1
  console.log(testing)

  
  

})





  