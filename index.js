

var nrPly1 = (Math.floor(Math.random()*6)+1);
var nrPly2 = (Math.floor(Math.random()*6)+1);
if (nrPly1 > nrPly2) {
  document.querySelector("h1").innerHTML = "The winner is player 1!";
}
if (nrPly1 < nrPly2) {
  document.querySelector("h1").innerHTML = "The winner is player 2!";
}
if (nrPly1 === nrPly2) {
  document.querySelector("h1").innerHTML = "Draw!"
}
function changeImg() {
  const img1 = document.getElementById("ply1");
  img1.src = "images/dice" + nrPly1 + ".png"
  const img2 = document.getElementById("ply2");
  img2.src = "images/dice" + nrPly2 + ".png"
}
changeImg();
