const getId = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject([234,543,334,545]);
    },1500);
});
getId.then(ids => {
    console.log(ids);
})
.catch(error => {
    console.log(error);
})

