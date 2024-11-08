"use strict";

var i = 1;

function zmena() {
  var input = document.getElementById("input");
  document.getElementById("output").src = input.value;
  console.log("Přidal jste", i, "obrázek");
  i = i + 1;
}