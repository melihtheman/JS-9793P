var numberElement = document.querySelector(".number");

var button = document.querySelector(".btn");

let number = 0;

button.addEventListener('click', function(){
    number++;
    numberElement.textContent = number;
});
    
