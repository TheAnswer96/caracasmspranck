let TRIALS = 0;
const fruits = new Map([
  [1, "Q.png"],
  [2, "J.png"],
  [3, "10.png"],
  [4, "K.png"]
]);

var image = document.getElementsById("cards");
image.src = "../src/cover.png"

function reset() {
  TRIALS=0;
  image.src="../src/K.png"
}
