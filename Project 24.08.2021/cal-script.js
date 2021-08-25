function multiply() {
  a = Number(document.getElementById("QTY").value);
  b = Number(document.getElementById("PPRICE").value);
  c = a * b;

  document.getElementById("TOTAL").value = c;

  d = (c * 20) / 100;
  document.getElementById("tex").value = d;

  e = c + d;

  document.getElementById("amt").value = e;
}

/*........... color change...............*/

/*...........end... color change...............*/
