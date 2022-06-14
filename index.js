// Your code goes here
document.addEventListener("DOMContentLoaded",() =>{
    
    console.log(document.querySelector('#text'));
    const p = document.getElementById('text');
p.textContent = 'This is really cool!'
console.log("The DOM has loaded");
});
