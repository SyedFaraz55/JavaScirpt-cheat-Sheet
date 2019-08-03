const todos = [
    {
        text:'Wake Up at 7:00',
        completed:false
    },
    {
        text:'Checking Emails',
        completed:false
    },  
    {
        text:'Attend Meeting',
        completed:false
    }
]

todos.forEach(function(todo){
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
});

document.querySelector('button').addEventListener('click',function(event) {
    console.log('Did this work ?');
    event.target.textContent ='check'
});

document.querySelectorAll('button')[1].addEventListener('click',function() {
    console.log('kkk');
}); 

