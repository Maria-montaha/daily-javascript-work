//nested if else

// Example: Nested if-else statement to check a person's age and their membership status

// let age = 25;
// let nid = true;

// if (age >= 18) {  // First condition: Check if the person is an adult
//     if (nid) {  // Nested condition: Check if the person is a member
//         console.log("You are an adult member.");
//     } else {
//         console.log("You are an adult, but not a member.");
//     }
// } else {  // If the person is not an adult
//     if (nid) {  // Nested condition for minors
//         console.log("You are a minor member.");
//     } else {
//         console.log("You are a minor and not a member.");
//     }
// }


//swicht case

// switch(parameter){
//     case condition :
//     statments
//     break;
//     case condition :
//     statments
//     break;
// default:
//     statments;
// }

//let getstatus=1; //status 0=pending, 1=accepted , -1=declined;
// switch(getstatus){
//     case 0:
//         console.log('pending');
//         break;
//     case 1:
//         console.log('accepted');
//         break;
//     case -1:
//         console.log('declined');
//         break;
//         default:
//             console.log('unknown');
// }
// switch(true){
//     case getstatus == 0:
//         console.log('pending');
//         break;
//     case  getstatus == 1:
//         console.log('accepted');
//         break;
//     case  getstatus == -1:
//         console.log('declined');
//         break;
//         default:
//             console.log('unknown');
// }





//exercise if else 

//marks 80<=A+, 70<=A,60<=A-,50<=B ,40<=C ,33<=D ,33>F 100 < || 0> invalid
//let score=56
let bangla=80;
let english=40;
let accounting=20;
let managment=30;
let history=10;
let score=(bangla + english + accounting + managment + history)/5;

console.log("The average score is:", score);

if( score > 100 ||  score <= 0  ){
    console.log("your grade invalid");
}else if( score >=  80  ){
    console.log("your grade A+");
}else if (score>=  70) {
    console.log("your grade A");
} else if (score >=  60) {
    console.log("your grade A-");
} else if (score >= 50) {
    console.log("your grade B");
} else if (score>=  40)  {
    console.log("your grade C");
} else if(score>=  33) {
    console.log("your grade D");
}else {
    console.log("F");
}


let Mathscore=99;
if( Mathscore> 100 || Mathscore<= 0  ){
    console.log("your grade invalid");
}else if( Mathscore >=  80  ){
    console.log("your grade A+");
}else if (Mathscore>=  70) {
    console.log("your grade A");
} else if (Mathscore >=  60) {
    console.log("your grade A-");
} else if (Mathscore >= 50) {
    console.log("your grade B");
} else if (Mathscore>=  40)  {
    console.log("your grade C");
} else if(Mathscore>=  33) {
    console.log("your grade D");
}else {
    console.log("F");
}

let Accountingscore=89;
if( Accountingscore> 100 || Accountingscore<= 0  ){
    console.log("your grade invalid");
}else if( Accountingscore >=  80  ){
    console.log("your grade A+");
}else if (Accountingscore>=  70) {
    console.log("your grade A");
} else if (Accountingscore >=  60) {
    console.log("your grade A-");
} else if (Accountingscore >= 50) {
    console.log("your grade B");
} else if (Accountingscore>=  40)  {
    console.log("your grade C");
} else if(Accountingscore>=  33) {
    console.log("your grade D");
}else {
    console.log("F");
}
let Banglascore=79;
if( Banglascore> 100 || Banglascore<= 0  ){
    console.log("your grade invalid");
}else if( Banglascore >=  80  ){
    console.log("your grade A+");
}else if (Banglascore>=  70) {
    console.log("your grade A");
} else if (Banglascore >=  60) {
    console.log("your grade A-");
} else if (Banglascore >= 50) {
    console.log("your grade B");
} else if (Banglascore>=  40)  {
    console.log("your grade C");
} else if(Banglascore>=  33) {
    console.log("your grade D");
}else {
    console.log("F");
}
let Managmentscore=69;
if( Managmentscore> 100 || Managmentscore<= 0  ){
    console.log("your grade invalid");
}else if( Managmentscore >=  80  ){
    console.log("your grade A+");
}else if (Managmentscore>=  70) {
    console.log("your grade A");
} else if (Managmentscore >=  60) {
    console.log("your grade A-");
} else if (Managmentscore >= 50) {
    console.log("your grade B");
} else if (Managmentscore>=  40)  {
    console.log("your grade C");
} else if(Managmentscore>=  33) {
    console.log("your grade D");
}else {
    console.log("F");
}
let Historyscore=59;
if( Historyscore> 100 || Historyscore<= 0  ){
    console.log("your grade invalid");
}else if( Historyscore >=  80  ){
    console.log("your grade A+");
}else if (Historyscore>=  70) {
    console.log("your grade A");
} else if (Historyscore >=  60) {
    console.log("your grade A-");
} else if (Historyscore >= 50) {
    console.log("your grade B");
} else if (Historyscore>=  40)  {
    console.log("your grade C");
} else if(Historyscore>=  33) {
    console.log("your grade D");
}else {
    console.log("F");
}


//exercise swicth case
let historyscore=50;
switch(true){
        case historyscore> 100 || historyscore <= 0 :
            console.log("your grade invalid");
            break;
        case   historyscore >=  80  :
            console.log("your grade A+");
            break;
        case  historyscore>=  70:
            console.log("your grade A");
            break;
        case historyscore >=  60:
            console.log("your grade A-");
            break;
        case  historyscore >= 50:
            console.log("your grade B");
            break;
        case  historyscore>=  40:
            console.log("your grade C");
            break;
        case  historyscore>=  33:
            console.log("your grade D");
            break;
            default:
                console.log('F');
    }
let mathscore=60;
switch(true){
        case mathscore> 100 || mathscore <= 0 :
            console.log("your grade invalid");
            break;
        case   mathscore >=  80  :
            console.log("your grade A+");
            break;
        case  mathscore>=  70:
            console.log("your grade A");
            break;
        case mathscore >=  60:
            console.log("your grade A-");
            break;
        case  mathscore >= 50:
            console.log("your grade B");
            break;
        case  mathscore>=  40:
            console.log("your grade C");
            break;
        case  mathscore>=  33:
            console.log("your grade D");
            break;
            default:
                console.log('F');
    }
let englishscore=50;
switch(true){
        case englishscore> 100 || englishscore <= 0 :
            console.log("your grade invalid");
            break;
        case   englishscore >=  80  :
            console.log("your grade A+");
            break;
        case  englishscore>=  70:
            console.log("your grade A");
            break;
        case englishscore >=  60:
            console.log("your grade A-");
            break;
        case  englishscore >= 50:
            console.log("your grade B");
            break;
        case  englishscore>=  40:
            console.log("your grade C");
            break;
        case  englishscore>=  33:
            console.log("your grade D");
            break;
            default:
                console.log('F');
    }
let accountingscore=40;
switch(true){
        case accountingscore> 100 || accountingscore <= 0 :
            console.log("your grade invalid");
            break;
        case   accountingscore >=  80  :
            console.log("your grade A+");
            break;
        case  accountingscore>=  70:
            console.log("your grade A");
            break;
        case accountingscore >=  60:
            console.log("your grade A-");
            break;
        case  accountingscore >= 50:
            console.log("your grade B");
            break;
        case  accountingscore>=  40:
            console.log("your grade C");
            break;
        case  accountingscore>=  33:
            console.log("your grade D");
            break;
            default:
                console.log('F');
    }
let managmentscore=111;
switch(true){
        case managmentscore> 100 || managmentscore <= 0 :
            console.log("your grade invalid");
            break;
        case   managmentscore >=  80  :
            console.log("your grade A+");
            break;
        case  managmentscore>=  70:
            console.log("your grade A");
            break;
        case managmentscore >=  60:
            console.log("your grade A-");
            break;
        case  managmentscore >= 50:
            console.log("your grade B");
            break;
        case  managmentscore>=  40:
            console.log("your grade C");
            break;
        case  managmentscore>=  33:
            console.log("your grade D");
            break;
            default:
                console.log('F');
    }

