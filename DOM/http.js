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

