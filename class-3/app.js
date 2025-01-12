
    //for loop
// for (let i=1;i<=5;i++){    //1st e start and end nia akber loop chalay terpor add kore aber chalay
//     console.log(i);
// }


//for continue

// for (let i=1;i<=10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }
// for (let i=1;i<=10;i++){
//     if(i==5||i==7||i==9 ){
//         continue;
//     }
//     console.log(i);
// }

//for break

// for (let i=1;i<=10;i++){
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }

//factorial calculetor 

// let factnumber =5;
// let result=1; //multipie korle 1 dibo ,division korle 0 dibo
//  for(i=1;i<=factnumber; i++){
//    result *=i;
//  }
// console.log(result);

//factorial calculetor in prompt

// let factnumber =prompt("enter your number");
// let result=1; //multipie korle 1 dibo ,division korle 0 dibo
//  for(i=1;i<=factnumber; i++){
//    result *=i;
//  }
// console.log(result)



// find the prime number from 1 to 100  using for loop

//Check a letter vowel or not using switch case

// for(let i=1;i<=100; i++){
// if (i % 2==0){
//     console.log(i)
// }
// }
// let start =1;
// let end=100;
// let oddCount=0;
// let evenCount=0;

// for(start;start<=end;start++){
// if (start % 2==0){
//     evenCount++;
// }else{
//     oddCount++;
// }
// }
// console.log(evenCount);
// console.log(oddCount);

//while loop

// let start=1;
// let end=10;
// while(start<=end){
//     console.log(start);

//     start +=2;
// }


//do while loop


// do{
//     statments;
//     increment/decrement;
// }while(condition);

// let start=11;
// let end =10;

// do{
//     console.log(start);
//     start++
// }while(start<=end);


//while continue ,break , 1-100 ,factorial,event-count ,oddcount


// let start=1;
// let end=10;
// while(start <= end){
//     if(start==5){
//         start+=1;
//         continue;
//     }
//     console.log(start);
//     start+=1;

// }
// let start=1;
// let end=10;
// while(start<= end){
//     if(start==5){
//         break;
//     }
//     console.log(start);
//     start++
// }
// let i=1;
// while (i<=100){    
//     console.log(i);
//     i++
// }


// let factnum=5;
// let result=1;
// let start=1;
// while(start<=factnum){
//     result *=start;
//     start++
// }
// console.log(result);

 
// let start =1;
// let end=100;
// let oddCount=0;
// let evenCount=0;

// while(start<=end){
// if (start % 2==0){
//     evenCount++;
// }else{
//     oddCount++;
// }
// start++;
// }
// console.log(evenCount);
// console.log(oddCount);


//question:1: 0 1 1 2 3 5 8 13 21 34 (make a  Fibonacci sequence series using for loop)

let fibonacci = 10;
let a = 0;
let b = 1;
let i=3;
let c;
while(i<=fibonacci) {
    c = a + b;
    console.log(c);
    a=b;
    b=c;
    i++
}


// let fibonacci = 10;
// let a = 0;
// let b = 1;
// let c;
// for(let i=3;i<=fibonacci; i++) {
//     c = a + b;
//     console.log(c);
//     a=b;
//     b=c;
// }


//question:2:Check a letter vowel or not using switch case


// let vowel=a ||e||i||o||u;
let vowel=prompt("");
switch(true){
  
                case vowel ==  "a" ||vowel == " A" :
                    console.log("it is vowel");
                    break;
                case vowel ==  "e" ||vowel == " E" :
                    console.log("it is vowel")
                    break;
                case vowel ==  "i" ||vowel == "I" :
                    console.log("it is vowel");
                    break;
                case vowel ==  "o" ||vowel == " O" :
                    console.log("it is vowel");
                    break;
                case vowel ==  "u" ||vowel == " U" :
                    console.log("it is vowel");
                    break;
    
              
                    default:
                        console.log("it is not-vowel");
            }


//question:3:find the prime number from 1 to 100  using for loop

// let end=100;
// let primecount=0;
// for(let start=2;start<=end; start++){
//     for (result=2;result<=start;result++){
//         if(start%result==0){
//             break;
//         }
//     }
// if(start==result){
//     console.log(start +"is prime")

// }
// else{
//     console.log(start +"is not prime")
// }
// if(start==result){
//     primecount++;
// }
// console.log(primecount)
// }



