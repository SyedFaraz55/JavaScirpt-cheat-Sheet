let list  = [];
let size = parseInt(prompt("Enter the list Size"));
if(size>0) {
    document.write(
      `<button type="button" class="btn btn-primary">
        Total <span class="badge badge-light">${size}</span>
        </button>`
        );
        document.write('<br>');
    // For adding elements to an array
    for(let i=0; i<size; i++){
        const item = prompt("Enter Item " + i);
        list[i] = item;
    }
    // Display information
    document.write('<br>');
    for(let i=0; i<size;i++){
        document.write('<ul class="list-group"><li class="list-group-item">' + list[i] + '</li></ul>');
    }
    
    let isTrue = confirm("Are you want to search List ?");
    if(isTrue){
    
    let key = prompt('Enter element to be searched');
    list.find(function(value,index){
        if(value === key){
            document.write('<br>');
            document.write(`<div class="alert alert-primary" role="alert">${key} found at postion ${index}</div>`);
        }
    });
    

    }
    
} else {
    document.write('Invalid Size');
}
document.write('<br>');

