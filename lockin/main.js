import './style.css'



document.querySelector('#app').innerHTML = `
  <p> test </p>
  
`


const URL1 = `https://www.cheapshark.com/api/1.0/games`;

for(let i=0; i=50;i++){
  const URL1 = `https://www.cheapshark.com/api/1.0/games?id=${i}`;
  const response = await fetch(URL1)
  console.log(response)
}



async function gettingdata(URL){
  try{
    const response = await fetch(URL);
    console.log(response)

  }
  catch{
    console.log("catched")
  }
}

gettingdata(URL1)


