var heading = document.querySelector('h1');
// heading.textContent = "Hello World";

// var header2;
// header2 = 1200;
// header2 = 1200/30;
// header2 = "Welcome to my world";
// document.querySelector('h2').textContent = header2;

// var arrayofthings;
// arrayofthings = [1,"Asanga","SE","Anemands",23.50];
// document.querySelector('h2').textContent = arrayofthings[0];

// var givennumber = 10;

// if(givennumber ===10){
//     alert(Multiplier(givennumber,10) + "Is the result we given");
// }else{
//     alert("Number is not equels to 10")
// }

// document.querySelector("h1").onclick = function(){
//     alert("Clicked inside and h1 tag");
// }

// function Multiplier(num1,num2 ){
//     return num1*num2;
// }

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var _button = document.querySelector("button");

function setusername(){
    var username = prompt("Please enter name");
    localStorage.setItem("welcomename",username);
    heading.textContent = "Welcome " +  username;
}

if(!localStorage.getItem('welcomename')){
    setusername();
}else{
    var storedname = localStorage.getItem("welcomename");
    heading.textContent = "Welcome Back "+ storedname;
}

_button.onclick = function(){
    setusername();
}