function getRecipe() {
    setTimeout(()=>{
        const repID = [325,456,453,464];
        console.log(repID);
        
        setTimeout((id)=> {
            const recipe ={title:'Fresh Pasta',publisher:'Jonas'};
            console.log(`${id}: ${recipe.title}`);
        },1000,repID[2]);
    },1500)
}
getRecipe();