const myButton = document.getElementById("myButton");
const diceImages = document.getElementById("diceImages");
const images = [];


const min = 1;
const max = 6;
let randomNum;

diceImages.innerHTML = `<img src="dice_images/1.png">`;

myButton.onclick = function()
{
    randomNum = Math.floor(Math.random() * max) + min;
    diceImages.innerHTML = `<img src = "dice_images/${randomNum}.png">`;
}
