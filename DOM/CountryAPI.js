// const getCountry = (countryCode,callback)=> {
//     // const countryCode = 'IN'; //US,MX

// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange',(response)=> {
//     if(response.target.readyState === 4 && response.target.status){
//         const data = JSON.parse(response.target.responseText);
//         const country = data.find(function(country){
//             return country.alpha2Code === countryCode;
//         });

//         callback(undefined,country);

//         // console.log(country.name);
//         // console.log(country.currencies[0].code);
//         // console.log(country.currencies[0].name);
//         // console.log(country.currencies[0].symbol);
        
//     }else if(response.target.readyState === 4){
//         callback('Unable to fetch Data');
//     }
// });

// request.open('GET','https://restcountries.eu/rest/v2/all');
// request.send();


// }

// Promise
const getCountry =(countryCode)=> new Promise((resolve,reject)=>{ 
    const request = new XMLHttpRequest();

request.addEventListener('readystatechange',(response)=> {
    if(response.target.readyState === 4 && response.target.status){
        const data = JSON.parse(response.target.responseText);
        const country = data.find(function(country){
            return country.alpha2Code === countryCode;
        });

        resolve(country)
        
    }else if(response.target.readyState === 4){
        reject('Unable to fetch Data');
    }
});

request.open('GET','https://restcountries.eu/rest/v2/all');
request.send();

})
getCountry('IN').then(data=>console.log(data.name))  
.catch(err=>console.log(err))