var hossz1Input = document.querySelector('#hossz_1')
var hossz2Input = document.querySelector('#hossz_2')
var resultInput = document.querySelector('#result')
var calcButton = document.querySelector('#calcButton')

calcButton.addEventListener('click', ()=>{
let hossz = hossz1Input.value;
// console.log("mükszik")

let result = (3/2) * Math.pow(hossz1Input.value,2) * Math.sqrt(3) + ((3/2) * Math.pow(hossz2Input.value,2) * Math.sqrt(3)/2);
resultInput.value = result;
console.log(result)
})

