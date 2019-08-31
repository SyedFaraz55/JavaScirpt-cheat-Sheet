// HTTP() hyper text transfer protocol
// httpstatues.com

https://www.udemy.com/google-mapsplaces-javascript-api-with-react-native/https://www.udemy.com/google-mapsplaces-javascript-api-with-react-native/
const request = new XMLHttpRequest();
request.addEventListener('readystatechange',(e) => {
    if(e.target.readyState===4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText);
        console.log(data);

    }
})
request.open('GET','http://puzzle.mead.io/puzzle');
request.send();

// API Request, XMLHttpRequest(),fetchAPI

const request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if(this.readyState ==4 && this.status == 200){
    const data = JSON.parse(this.responseText);
    const rdata = data.last;
    console.log("last: " + rdata);
  }
}
request.open("GET","https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD");
request.send();

fetch("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD")
.then(response=>response.json())
.then(data=>console.log(data.last));

async function fetchPrice(url){
  const fetchResult = fetch(url);
  const response = await fetchResult;
  if(response.ok){
    const jsonData = await response.json();
    console.log(jsonData);
  } else {
    throw Error(response.statusText)
  }
}

fetchPrice("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD");


