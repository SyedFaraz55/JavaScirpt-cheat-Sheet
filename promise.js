// // Promise
// const getDataCallback = (callback)=> {
//     setTimeout(()=>{
//         callback(undefined,'This is data');
//     },2000)
// }
// getDataCallback((err,response)=> {
//     if(err){

//     } else {
//         console.log(response);
//     }
// })

// Promise
const myPromise = new Promise((reject,response)=>{
    setTimeout(()=> {
        response('This is promise data');
    },2000)
})
myPromise.then((data)=> {
    console.log('This is data');
})
.catch((err)=> {
    console.log('This is error');
})