// Getting Element as it type in textfield
const data = [
    {
        name:'david',
        age:20
    },
    {
        name:'brain',
        age:20
    },
    {
        name:'susan',
        age:20
    }
];

const filters = {searchText:'',hideCompleted:false};

const renderData = (data,filters)=> {

    
    let filteredData = data.filter((dataEle)=>{
        return dataEle.name.toLowerCase().includes(filters.searchText.toLowerCase())    
    });

    filteredData = filteredData.filter(function(ee){
        if(filters.hideCompleted){
            return 
        }
    })


    document.querySelector('#data').innerHTML = '';
    filteredData.forEach(element => {
        const dataElement = document.createElement('p');
        dataElement.textContent = element.name;
        document.querySelector('#data').appendChild(dataElement);
    });
};

renderData(data,filters);

document.querySelector('#search').addEventListener('input',(event)=> {
    filters.searchText = event.target.value;
    renderData(data,filters);
});

const ret = data.filter(element=> {
    return element.name.includes('br')    
});

// console.log(ret);
// console.log(ret[0].name);
// console.log(ret[0].age);

document.querySelector('#form').addEventListener('submit',event => {
    event.preventDefault();
    console.log(event.target.elements.firstName.value);
    event.target.elements.firstName.value = '';
});

document.querySelector('#hide-completed').addEventListener('change',function(event){
    filters.hideCompleted = e.target.checked;
    renderData(data,filters);
});