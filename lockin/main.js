import './style.css'



document.querySelector('#app').innerHTML = `
  <p> test </p>
  
`


const URL1 = `https://www.cheapshark.com/api/1.0/games?title=God`;







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

