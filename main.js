// function printRandomNumber(){
//     var rndNum = Math.floor(Math.random()*10);
//     return (rndNum);
// }
// printRandomNumber()

// function printRandomNumberZeroToHundred(number){
//  var rndNum = Math.floor(Math.random()*number)
//  return rndNum;
// }
// printRandomNumberZeroToHundred()

// function printRightNumber(){
//     var rndNum = Math.floor(Math.random()*10)
//     var num = +prompt("Enter Number")
//     if(num==rndNum){
//         console.log("Succued");
//     }
//     else{
//         console.log("Failed");
//     }
// }
// printRightNumber()

// function printRandomZeroToHunderd(){
//     var array = [];
//     for(var i=0;i<10;i++){
//         var rndNum = Math.floor(Math.random()*100)
//         array.push(rndNum)
//     }
//     console.log(array);
// }
// printRandomZeroToHunderd()

// function printBigNumber(){
//     var rndNum = Math.floor(Math.random()*10)
//     console.log(rndNum);
//     return Math.max(+prompt("Enter Number"))
// }
// console.log(printBigNumber()); 

// function printLowNumber(){
//     var savenum =[]
//     for(var i=0;i<5;i++){
//        var lowNum = +prompt("Enter Number")
//        savenum += lowNum
//     }
//     console.log(Math.min(...savenum));
// }
// printLowNumber()

// function printEvenNumber(){
//     var rndNum = Math.floor(Math.random()*100)
//     var userNum = +prompt("Enter Number")
//     if(rndNum%2==0){
//         return Math.min(userNum,rndNum)
//     }
//     else{
//         return Math.max(userNum,rndNum)
//     }
// }
// console.log(printEvenNumber()); 

// function printRndArray(){
//     var array = []
//     var rndNum = Math.floor(Math.random()*365)
//     for(var i=0;i<rndNum;i++){
//         array.push(Math.floor(Math.random()*873))
//     }
//     console.log(array);
// }
// printRndArray()

// function printRndIndex(array){
//     var i = Math.floor(Math.random()*array.length)
//     console.log(array[i]);
// }
// printRndIndex([1,2,3,4,5,6])

// function printBigNoteRnd(){
//     var userName = prompt("Enter name")
//     var myRnd = Math.floor(Math.random()*5)
//     var newUserName = userName.replace(userName.charAt(myRnd),userName[myRnd].toUpperCase())
//     console.log( newUserName);
// }
// printBigNoteRnd()

// function printAgeAndUserName(){
//     var firstNameOne = (prompt("Enter first name"));
//     var firstNameTwo = (prompt("Enter first name"));
//     var ageOne = (+prompt("Enter age"))
//     var ageTwo = (+prompt("Enter age"))
//     var myRnd = Math.floor(Math.random()*5)
//     if(firstNameOne[0]==firstNameTwo[0]){
//         console.log(myRnd);
//     }
//     if(firstNameOne[firstNameOne.length-1]==firstNameTwo[firstNameTwo.length-1]){
//         console.log(firstNameTwo[firstNameTwo.length-1]);
//     }
//     else{
//         console.log(ageOne,ageTwo);
//     }
// }
// printAgeAndUserName()

// function printRndText(){
//     var userText = prompt("Enter Text")
//     var myRnd = Math.floor(Math.random()*6)
//     console.log(userText.substring(0,myRnd));
// }
// printRndText()

// function printRndNumber(){
//     var userNum = +prompt("Enter Number")
//     var myRnd = Math.floor(Math.random()*userNum)
//     if(userNum%3==0){
//         for(var i=0;i<myRnd;i++){
//             console.log(myRnd);
//         }
//     }
//     else{
//         console.log(myRnd*Math.PI);
//     }
// }
// printRndNumber()
