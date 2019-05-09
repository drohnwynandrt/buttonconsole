function logFunctieOne(){
document.getElementById("output").innerHTML += "1";
}
function logFunctieTwo(){
    document.getElementById("output").innerHTML += "2";
 }
 function logFunctieThree(){
    document.getElementById("output").innerHTML += "3";
 }
 function logFunctieFour(){
    document.getElementById("output").innerHTML += "4";
 }
 function logFunctieFive(){
   document.getElementById("output").innerHTML += "5";
}
function logFunctieSix(){
   document.getElementById("output").innerHTML += "6";
}
function logFunctieSeven(){
    document.getElementById("output").innerHTML += "7";
 }
 function logFunctieEight(){
   document.getElementById("output").innerHTML += "8";
}
function logFunctieNine(){
   document.getElementById("output").innerHTML += "9";
}
function logFunctieZero(){
   document.getElementById("output").innerHTML += "0";
}
 function plusFunctie(){
    document.getElementById("output").innerHTML += "+";
 }

 function minusFunctie(){
    document.getElementById("output").innerHTML += "-";
 }

 function clearFunctie(){
    document.getElementById("output").innerHTML = '';
 }
 function equalsFunctie(){
     var result = eval(document.getElementById("output").innerHTML);
    document.getElementById("output").innerHTML = result;
 }
