// const countryCode = 'IN'; //US,MX

// const request = new XMLHttpRequest();
// request.open('GET','https://restcountries.eu/rest/v2/all');
// request.send();

// request.addEventListener('readystatechange',(response)=> {
//     if(response.target.readyState === 4 && response.target.status){
//         const data = JSON.parse(response.target.responseText);
//         const country = data.find(function(country){
//             return country.alpha2Code === countryCode;
//         });

//         console.log(country.name);
//         console.log(country.currencies[0].code);
//         console.log(country.currencies[0].name);
//         console.log(country.currencies[0].symbol);
        
//     }else if(response.target.readyState === 4){
//         console.log('Unable to fetch data');
//     }
// });


// getCountry('US',(error,country)=>{
//     if(error){
//         throw new Error('');
//     } else {
//         console.log(`Country Name ${country.name}`);
//     }
// })
