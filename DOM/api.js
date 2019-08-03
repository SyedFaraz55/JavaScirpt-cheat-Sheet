// const getLocation = ()=>{
//     return fetch('https://ipinfo.io/json?token=5953fc81e4a40a').then((response)=> {
//         if(response.status === 200){
//             return response.json();
//         }else {
//             throw new Error('Unable to fetch location');
//         }
//     })
// }

// getLocation().then((data)=> {
//     console.log(data.city)
//     console.log(data.country)
//     console.log(data.ip)
//     console.log(data.postal)
//     console.log(data.region)
// })


const getLocation = async ()=>{
    const  response  = await fetch('https://ipinfo.io/json?token=5953fc81e4a40a'); 
        if(response.status === 200){
            return response.json();
        }else {
            throw new Error('Unable to fetch location');
        }
    }


getLocation().then((data)=> {
    console.log(data.city)
    console.log(data.country)
    console.log(data.ip)
    console.log(data.postal)
    console.log(data.region)
})