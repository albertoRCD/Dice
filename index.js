let numero1 = Math.floor(Math.random() * 6) +1
let numero2 = Math.floor(Math.random() *6 ) +1

$(".img1").attr("src", "images/dice"+numero1+".png");
$(".img2").attr("src", "images/dice"+numero2+".png");


if (numero1 > numero2) {
  $("h1").text("Player 1 Wins")
}
else if (numero2 >numero1){
  $("h1").text("Player 2 Wins")
}
else {
  $("h1").text("Draw")
}
