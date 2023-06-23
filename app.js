let display = document.getElementById("in-text")
console.log(display)


function clicked_items1(){
    display.value+=1;
}
function clicked_items2(){
    display.value+=2;
}
function clicked_items3(){
    display.value+=3;
}
function clicked_items4(){
    display.value+=4;
}
function clicked_items5(){
    display.value+=5;
}
function clicked_items6(){
    display.value+=6;
}
function clicked_items7(){
    display.value+=7;
}
function clicked_items8(){
    display.value+=8;
}
function clicked_items9(){
    display.value+=9;
}
function clicked_items10(){
    display.value+='+';
}
function clicked_items11(){
    display.value += "-";
}
function clicked_items12(){
    display.value += "*";
}
function clicked_items13(){
    display.value += "/";
}
// function clicked_items14(){
//     display.value = "=";
// }
function clicked_items15(){
    display.value += "0";
}
function clicked_items16(){
    display.value += ".";
}

function clicked_items17(){
    display.value = null
}



function clicked_items14(){
    display.value = eval(display.value);
}