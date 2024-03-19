var random1 = Math.floor(Math.random () * 6)+1; // 1 to 6

var diceImage = "dice" + random1 + ".png"; // dice 1 img to dice 6 img 

var randomImage = "images/" + diceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage);

var random2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}

else if(random2>random1){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
else{
    document.querySelector("h1").innerHTML = "Draw !";
}