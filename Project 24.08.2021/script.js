function btnRed() {
  document.getElementById("Div1").style.backgroundColor = "Red";
}
function btnGreen() {
  document.getElementById("Div1").style.backgroundColor = "Green";
}
function btnBlue() {
  document.getElementById("Div1").style.backgroundColor = "Blue";
}
function btnReset() {
  document.getElementById("Div1").style.backgroundColor = "Black";
  document.getElementById("Div1").style.backgroundColor = "white";
  document.getElementById("Div1").style.backgroundColor = "white";
}

/*..........font................*/

function btn15() {
  document.getElementById("demo").style.fontSize = "15px";
}
function btn25() {
  document.getElementById("demo").style.fontSize = "25px";
}
function btn35() {
  document.getElementById("demo").style.fontSize = "35px";
}
function btnReset() {
  document.getElementById("Div1").style.fontSize = "15px";
  document.getElementById("Div1").style.fontSize = "25px";
  document.getElementById("Div1").style.fontSize = "35px";
}

/*..........end font................*/

/*.......... start family ................*/

function btnc() {
  document.getElementById("demo").style.fontFamily = "monospace";
}
function btnf() {
  document.getElementById("demo").style.fontFamily = "Times New Roman";
}
function btng() {
  document.getElementById("demo").style.fontFamily = "fantasy";
}
function btnReset() {
  document.getElementById("Div1").style.fontFamily = "monospace";
  document.getElementById("Div1").style.fontFamily = "Times New Roman";
  document.getElementById("Div1").style.fontFamily = "fantasy";
}
/*.......... end family ................*/

/*........... color change...............*/

setInterval(
  function () {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  },

  3000
);

/*...........end... color change...............*/
