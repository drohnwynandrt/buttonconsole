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
function logFunctieSeven(){
    document.getElementById("output").innerHTML += "7";
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
