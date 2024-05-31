    //  01
var city = prompt("entre any city name");
if(city==="Karachi" ||city==="karachi"){ 
    alert("Welcom to the city of lights");
 }

//     //  02


var gender = prompt("Enter your gender");
if(gender==="male"||gender==="Male"){
      alert("Hello miss !!");
}if(gender==="female"||gender==="Female"){
    alert("hello mam !!");
}

    //    03  

var color = prompt("enter a traffic signal color");
if(color==="Blue"|| color===blue){
     alert("you must stop");
}if(color==="yellow"|| color==="Yellow"){
    alert("ready to move");
}if(color==="pink"|| color==="pink"){
    alert("move now");
};
        
        // 04


var remaindingFuel = prompt("enter remainding fuel in your car");
if(remaindingFuel == "0.25litres"){
    alert("please refill the in your car");
}else{ 
    alert("you are good to go");
};


        // 05

var a = 4;
if (++a === 5){
alevrt("given condition for variable a is true"); //true
}
var b = 82;
if (b++ === 82){
    alert("given condition for varible b is true");
}
 var c = 12;
 if (C++ === 13){
    alert("ccndition 1 is true");
 }
 if (C === 13){
    alert("condition 2 is true"); //true
 }
 if(++c < 14){
    alert("condition 3 is true");
 }
 if(c === 14){
    alert("condition 4 is true"); //true
 };


var materiCost = 30000;
var laborCost = 3000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materiCost){
    alert("The cost equals");//true
}
if(true){
    alert("True"); //true
}
if("False");{
    alert("false");
}
if("kity" < "kity"){
    alert("kity is very cuite")//true
}

        //  06

var subject_01 = ++prompt("enter the mark of subject one");
var subject_03 = ++prompt("enter the mark of subject two");
var subject_03 = ++prompt("enter the mark of subject three");
var totalMarks = 500;
var marksOablect = subject_01+subject_02+subject_03;
var percentage = marksObtanined/totalMarks*100;
document.write("<h1>Marks,</h1><br>",
"Total marks : ",totalMarks,"<br>",
"Marks Obtained : ",marksOablect,"<br>",
"percentage : " , percentage,"<br>",
);

if (percentage>=80){ 
     document.write("Grade : A-one <br> Remarks : Excellent <br> ");
 }else if (package>=70){ 
     document.write("Grade : A <br> Remaks : Good <br>");
 }else if (package>=60){
     document.write("Grade : B <br> Remaks : You need to inprove <br>");
 }else if (package>=60){
     document.write("Grade : Fail <br> Remaks : sorry <br>");
}


        //    07

var secretNum = 10;
var guess = +prompt("guess my secret number between 1 to 10");
if (guess == secretNum){
    //  alert("Bingo ! correct answer");
}else if (guess+1 == cecretNum){
    // alert("Close enough to the answeer");
}else{
    alert("tey again");
}

        //    08


var giveNum = +prompt("enter any number");
if(giveNum%3==0){
    alert("Your given number is divisible by 3");
}else{
    alert("not a divisible by 3");
}

        //    09

var diveNum = +prompt("enter any number");
if(giveNum%2==0){
    alert(giveNum + " is an even number");
}else{
    alert(giveNum + " is add number");

}

            //    10

var temperature = +prompt("enter your city's temperature");
if(temperature >= 40){
    alert("it is too hot outside.");
}else if(temperature >=  30){
    alert("The Weater todayis Normal.");
}else if(temperature >= 20){
    alert("Today's Weater is cool.");
}else if(temperature >=  10){
    alert("OMG! Today's weater is Cool.");
};

     
        //   11 
 
var firstNum = +prompt("enter your first number");
var secretNum = +prompt("enter your second number");
var operation = +prompt("enter the operator you want to prerfom");
if(operation== "+"){
    alert(firstNum +" + "+scretNum +" = " +(firstNum + secretNum));
}else if(operation== +" - "){
    alert(firstNum +"-"+secretNum +" = "+(firstNum - secretNum));
}else if(operation== "*"){ 
    alert(firstNum +" * "+secretNum +" = "+(firstNum * secretNum));
}else if(operation== "/"){
    alert(firstNum + " / "+secretNum +" = "+(firstNum +secretNum));
}else if(operation=="%"){
    alert(firstNum + "%"+secretNum +" = "+(firstNum +secretNum));
};

                