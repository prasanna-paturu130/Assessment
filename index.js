console.log("hello");

function decrease(){
    var count = document.querySelector('#quantity').value;
    count = parseInt(count)-1;
    document.querySelector('#quantity').value = count;
}

function increase(){
    var count = document.querySelector('#quantity').value;
    count = parseInt(count)+1;
    document.querySelector('#quantity').value = count; 
}