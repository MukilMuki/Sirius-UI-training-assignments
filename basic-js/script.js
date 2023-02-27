//SECTION 1
console.log(2+4);
console.log("apple" + "orange");
console.log(1 + 3 + "apple");
console.log("apple" + 1 + 2);
console.log(1 + true);
console.log(0 == false);
console.log(1 === true);
console.log(2 == "2");

//SECTION 2
//1
const players=["sumeet","rohan","gautam ghambir","salman khan","dhoni","virat kohli","sachin tendulkar","chris gayle","raina","bumrah","usain bolt"];
//2
console.log("sumeet got injured!");
players.shift();
//3
console.log(players.length);
//4
console.log("ab de villiers entered in his place!");
players.unshift("ab de villiers");
console.log(players.length);
//5
players.sort();
console.log(players);
//6
const playersObj =  {};
players.forEach(element => {
    const rand=Math.floor(Math.random() * 101);
        playersObj[rand]=element;
});
console.log(playersObj);
//7
const printJersey = players.map(value => value.toUpperCase());
console.log(printJersey);

//SECTION 3
//1
function printNum(n){
    for(let i=1;i<=n;i++)
        console.log(i);
}
printNum(100);

//2
function currentDay(){
    todayDate = new Date();
    var dd = todayDate.getDate();
    var mm = todayDate.getMonth()+1;
    var yyyy = todayDate.getFullYear();

    if(dd<10)
        dd="0"+dd;
    if(mm<10)
        mm="0"+mm;
    return (dd+'/'+mm+'/'+yyyy);   
}
console.log(currentDay());

//3
function celsiusToFahrenheit(degree){
    const fahrenheit = (9*degree + (32*5)) / 5;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(25));

//4
const numberArray=[4,2,3,4,5]; var sum=0;
function sumArray(array){
    array.forEach(element => {
    sum+=element;
});
return sum/numberArray.length;
}
console.log(sumArray(numberArray));

//5
var originalStr="Ace 2023";
function reverseString(string){
    let stringadd = "";
    for(let k=originalString.length-1;k>=0;k--)
        stradd+=string[k];
    return stringadd;
}
console.log(reverseString(originalString));
