const randomNumberP1 = Math.floor((Math.random() * 5) + 1);
const randomNumberP2 = Math.floor((Math.random() * 5) + 1);

let arrayOfImages = [];
arrayOfImages.push('images/dice1.png');
arrayOfImages.push('images/dice2.png');
arrayOfImages.push('images/dice3.png');
arrayOfImages.push('images/dice4.png');
arrayOfImages.push('images/dice5.png');
arrayOfImages.push('images/dice6.png');

const player_one_img = document.querySelector(".dice .img1");
player_one_img.setAttribute("src", arrayOfImages[randomNumberP1]);

const player_two_img = document.querySelector(".dice .img2");
player_two_img.setAttribute("src", arrayOfImages[randomNumberP2]);

const winner_txt = document.querySelector(".container h1")

if (randomNumberP1 > randomNumberP2) {
    winner_txt.textContent = "🚩 Player 1 WON";
} else if (randomNumberP2 > randomNumberP1) {
    winner_txt.textContent = "Player 2 WON 🚩";
} else {
    winner_txt.textContent = "Draw";
}