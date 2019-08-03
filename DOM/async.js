const processData = async ()=> {
    return 12
}

processData().then(data=>console.log('Data',data))
processData().catch(err=>console.log('Error',err))