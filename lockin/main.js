import './style.css'
let count = 0;


document.querySelector('#app').innerHTML = `
<div id="homepage">
  
    <button id="deallookup"> Deal Lookup </button>
    
    <button id="bpage"> Back pag </button>
    <p id="testing"></p>


  <button id="gamelookup">Game Lookup </button>
    <form action=""id="forum">
        <input type="text" id="input">
        <label for="text">What game do you wish to search for?</label>
        </form>
  

  <p> Home </p>
  <div id="divinadiv">
    </div>
  <div id="secondpage">
    <button id="secondpagebutton"> Looking up a game </div>
    
  </div>
</div>










<div id="thirdpag"> 
  <div id="divinadiv">
    
 

</div>

    

  
  

`



let Domselectors = {
  glup:document.querySelector("#gamelookup"),
  secondpage:document.querySelector("#secondpage"),
  thirdpage:document.querySelector("#thirdpag"),
  gamelookupform:document.querySelector("#input"),
  deallookupform:document.querySelector("#input1"),
  dlup:document.querySelector("#deallookup"),
  npage:document.querySelector("#npage"),
  bpage:document.querySelector("#bpage"),
  input1:document.querySelector("#input1"),
  testing:document.querySelector("#testing"),
  division:document.querySelector("#divinadiv"),
  flipcard:document.querySelector("#flip-card"),
  secondpagebutton:document.querySelector("#secondpagebutton")
  
}
Domselectors.testing.value = 0
const URL1 = `https://www.cheapshark.com/api/1.0/games?title=Lethal`;
const URL2 = `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json`
const PlayerOwnedGames = ` http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=F1872C74F497620E49CB760C36AEA826&steamid=76561197960434622&format=json`


function clear(){
  Domselectors.thirdpage.innerHTML = ""
  Domselectors.division.innerHTML = ""
}

Domselectors.glup.addEventListener("click",async function(){
  clear()
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
    Domselectors.secondpage.innerHTML = htmlelements
   
}catch{
  console.log('catched')
}
})





Domselectors.dlup.addEventListener("click",async function(){
  clear()
  try{
    let URLD = `https://www.cheapshark.com/api/1.0/deals?storeID=1`;
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
    Domselectors.division.innerHTML += htmlelements
    Domselectors.thirdpage.innerHTML += `<button id="npage"> Next pag</button>`
}catch{
  console.log('catched')
}
})





Domselectors.thirdpage.addEventListener("click",async function myFunction(){
  clear()
  count++;
  let pagenumber = count + 1
  let forbidden = [4,5,6,7,9,10,11,12,13,14,16,17,18,19,20,22,26,32,36,37]
  while (forbidden.includes(pagenumber)){
    count++
    pagenumber++
    if (pagenumber > 36){//this shit dont fucking work im offf for today
      pagenumber = 1
      count = 0
      console.log(`The while loop pagenumber is ${pagenumber}`)
      break
    }
    if (!forbidden.includes(pagenumber)){
      break
    }
  }

  
  
  Domselectors.testing.innerHTML = count + 1;
  Domselectors.testing.value = count;
  console.log(`${Domselectors.testing.value} is Count`)
  console.log(`${pagenumber} is page number`)
  try{
    let URLD = `https://www.cheapshark.com/api/1.0/deals?storeID=${pagenumber} `;
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
    Domselectors.division.innerHTML = htmlelements
    Domselectors.thirdpage.innerHTML += `<button id="npage"> Next pag</button>`
  }catch{
    console.log('catched')
  }
  })
  
  




























Domselectors.bpage.addEventListener("click",async function myFunction() {
  clear()
  count - 1;
  let pagenumber = count - 1
  let forbidden = [4,5,6,7,9,10,11,12,13,14,16,17,18,19,20,22,26,32]
  while (forbidden.includes(pagenumber)){
    count - 1
    pagenumber - 1
    if (pagenumber >= 36){//this shit dont fucking work im offf for today
      let pagenumber = 1
      console.log(`The while loop pagenumber is ${pagenumber}`)
      break
    }
    if (!forbidden.includes(pagenumber)){
      break
    }
  }

  
  
  Domselectors.testing.innerHTML = count + 1;
  Domselectors.testing.value = count;
  console.log(`${Domselectors.testing.value} is Count`)
  console.log(`${pagenumber} is page number`)
  try{
    let URLD = `https://www.cheapshark.com/api/1.0/deals?storeID=${pagenumber} `;
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
    Domselectors.thirdpage.innerHTML += htmlelements
}catch{
  console.log('catched')
}
})
  


Domselectors.secondpage.addEventListener("click",async function myFunction() {
  let htmlelements = `<button id="taketoglup"> take to glup </button>`
  Domselectors.secondpage.innerHTML = htmlelements






})