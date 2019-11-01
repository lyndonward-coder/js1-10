//write first method
function sleep_in(weekday,vacation) {
   var sleep = !weekday || vacation
       return sleep;

}

//write second method
function monkey_trouble(a_smile, b_smile) {
    var smile = a_smile && b_smile || !a_smile && !b_smile;
    return smile;
}

//add 2-10 below here...
function string_times(hi,num){
    var line = "";
    for(var i = 0; i < num; i++){
        line = line + hi
    }
    return line;
}

function front_times(job,num){
    var line = "";
    var sub = job.slice(0,3)
    for(var i = 0; i < num; i++){
        line += sub;
    }
    return line;
}

function string_bits(string){
    var word =  "";
    for ( var i =1; i <= string.length; i++){
        if ((i -1 )% 2 != 0){
            word += string[i-1];
        }
    }
    return word;
}

function caughtSpeeding(speed, birthday){
    var result;
    if(birthday == true){
        speed -= 5
    }
    if(speed <= 60 ){
        result = 0
    }else if(speed >= 61 && speed <= 80 ){
        result = 1
    }else  if(speed >= 81 ){
        result = 2
    }
    return(result);
}

function fizz_buzz(num){
    var result;
    if (num % 3 == 0 && num % 5 == 0) {
        result = "FizzBuzz" }
    else if(num % 3 == 0 ){
        result = "Fizz" }
    else if(num % 5 == 0 ){
        result = "Buzz" }
    else{
        result = num + "!"
    }
    return result;
}
function teaParty(num1, num2){
    var result;
    if(num1 >= 5 && num2 >= 5){
        result = 1
    }
    if(num1 >= 2*num2 || num2 >= 2*num1 ){
        result = 2
    }
    if(num1 < 5 || num2 < 5){
        result = 0
    }
    return result;
}

function blackjack(num1,num2){
    var result;
    if( num1 > 21){
        num1 = 0;
    }
    if(num2 > 21) {
        num2 = 0;
    }
    var closerValue1 = 21 - num1;
    var closerValue2 = 21 - num2;
    if(closerValue1 < closerValue2){
        result = num1
    }else{
        result = num2
    }
    return result;
}

function loneSum(a1,b1,c1) {
    var a =a1;
    var b=b1;
    var c=c1;
    if (a1 == b1 || a1 == c1){
         a = 0;
    }
    if (b1 == c1 || b1 == a1){
         b = 0;
    }
    if (c1 == a1|| c1 == b1){
         c = 0;
    }
    var totalSum = a + b + c;
    return totalSum;
}

function firstLast6(arry){
    var first = arry[1-1];
    var last = arry[arry.length-1];
    var result = "";
    if( first == 6 || last == 6 ){
        result = true
    }else{
        result= false
    }
    return result;
}

function has23(arry){
    var result = ""
    for(var i = 0; i < arry.length; i++){
        if(arry[i-1]==2 ||arry[i-1]==3 || arry[i]==3){
            result = true
        }else{
            result = false
        }
    }
    return result;
}

function fix23(arry){
    for(var i = 0; i < arry.length; i++){
        if(arry[i]== 2 && arry[i+1]== 3){
            arry[i+1] = 0
        }
    }
    return arry;
}

function countYZ(arry){
    var arry = arry + " ";
    var count = 0;
    for(var i = 0; i < arry.length; i++){
        if(arry[i] == "z" && arry[i+1] == " "){
            count += 1;
        }
        if (arry[i] == "Z" && arry[i+1]== " "){
            count += 1;
        }
        if(arry[i] == "y" && arry[i+1] == " "){
            count += 1;
        }
        if(arry[i]== "Y" && arry[i+1]== " "){
            count +=1;
        }
    }
    return count;
}


function endOther(letters1, letters2){
    var result
    var lower1 = letters1.toLowerCase();
    var lower2 = letters2.toLowerCase();
    for(var i = 0; i<letters1.length; i++){
        if(lower1 == lower2 ){
            result = true ;
        }
    }
    return result;
}


//         }else if(num % 3 == 0 && num % 5 !== 0 ){
//         result = Fizz;
//     } else if (num % 5 == 0 && num % 3 !== 0 ){
//         result = Buzz;
//     }else{
//         result = num + "!"
//     }
//     return(result);
// }

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
}
