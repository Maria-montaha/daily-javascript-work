

// let student_info={
//     name:"rahim",
//     age:30,
//     address:"Dhaka"
// };

// Object.entries(student_info).forEach(function([key,info]){
//     console.log(`${key} : ${info}`);
//     // template litarls holo `(backtcik)
// });


//nested Object


// let students=[
//     {
//         name:"rahim",
//         roll:101,

// },
//     {
//         name:"hasan",
//         roll:102,

// },
//     {
//         name:"milon",
//         roll:103,

// }
// ];
// console.log(students);
// console.log(JSON.stringify(students));

// students.forEach((students,inde)=>{
//     if(typeof students=="object"){
//       let result= 
//           `Name:${students.name}
//            roll:${students.roll}
//         `;
//         console.log(result);
// // Object.entries(students).forEach(function([key,data]){
// //     console.log(`${key} : ${data}`);
//     }
   
// else{
//     console.log(students);
// }
   
// });


// function students(name,roll,address,phone,email) {
//     this.name=name;
//     this.roll=roll;
//     this.address=address;
//     this.phone=phone;
//     this.email=email;
// }
// let student=new students("rahim",101,"dhaka","015875544","abc@gmail.com")
// console.log(student);



//Class work student datasheet and show satas using foreach loop

// let students=[
//     {
//         name:"hasan",
//         roll:101,
//         class:"5th",
//         contact:"015548989",
//         email:"abc@gmail.com"
//     },
//     {
//         name:"halim",
//         roll:102,
//         class:"4th",
//         contact:"0155265865",
//         email:"acb@gmail.com"
//     },
//     {
//         name:"hamid",
//         roll:104,
//         class:"8th",
//         contact:"0157877415",
//         email:"dcb@gmail.com"
//     },
  
//     {
//         name:"sakib",
//         roll:109,
//         class:"9th",
//         contact:"0147857415",
//         email:"dbc@gmail.com"
//     },
//     {
//         name:"sabbir",
//         roll:111,
//         class:"7th",
//         contact:"017657415",
//         email:"cbd@gmail.com"
//     },
  
//     {
//         name:"samia",
//         roll:112,
//         class:"7th",
//         contact:"018142415",
//         email:"efd@gmail.com"
//     },
//     {
//         name:"emon",
//         roll:115,
//         class:"3rd",
//         contact:"014642415",
//         email:"jhd@gmail.com"
//     },
//     {
//         name:"imran",
//         roll:116,
//         class:"2nd",
//         contact:"0164578587",
//         email:"yjd@gmail.com"
//     },
  
//     {
//         name:"akbor",
//         roll:117,
//         class:"7th",
//         contact:"017578587",
//         email:"kid@gmail.com"
//     },
  
//     {
//         name:"fardin",
//         roll:118,
//         class:"6th",
//         contact:"017589587",
//         email:"rte@gmail.com"
//     },
  
// ];
// students.forEach((students,index)=>{
//     if(typeof students=="object"){
//       let result= 
//           `Name:${students.name}
//            roll:${students.roll}
//             class:${students.class}
//         contact:${students.contact}
//         email:${students.email}
//         `;
//         console.log(result);
//     }
// else{
//     console.log(students);
// }
// });




//Class work employee datasheet and show satas using foreach loop

// let employees=[
//     {
//         name:"hasan",
//         dep:"Account",  
//         contact:"015548989",
//         email:"abc@gmail.com"
//     },
//     {
//         name:"halim",
//         dep:"Admin",
//         contact:"0155265865",
//         email:"acb@gmail.com"
//     },
//     {
//         name:"hamid",
//         dep:"sales",
//         contact:"0157877415",
//         email:"dcb@gmail.com"
//     },
  
//     {
//         name:"sakib",
//         dep:"HR",
//         contact:"0147857415",
//         email:"dbc@gmail.com"
//     },
//     {
//         name:"sabbir",
//         dep:"Admin",
//         contact:"017657415",
//         email:"cbd@gmail.com"
//     },
  
//     {
//         name:"samia",
//         dep:"Marketing",
//         contact:"018142415",
//         email:"efd@gmail.com"
//     },
//     {
//         name:"emon",
//         dep:"Production",
//         contact:"014642415",
//         email:"jhd@gmail.com"
//     },
//     {
//         name:"imran",
//         dep:"Operation",
//         contact:"0164578587",
//         email:"yjd@gmail.com"
//     },
  
//     {
//         name:"akbor",
//         dep:"Sales",
//         contact:"017578587",
//         email:"kid@gmail.com"
//     },
  
//     {
//         name:"fardin",
//         dep:"Accounts",
//         contact:"017589587",
//         email:"rte@gmail.com"
//     },
  
// ];
// employees.forEach((employees,index)=>{
//     if(typeof employees=="object"){
//       let info= 
//           `Name:${employees.name}
//            dep:${employees.dep}
//         contact:${employees.contact}
//         email:${employees.email}
//         `;
//         console.table(info);
//     }
// else{
//     console.table(employees);
// }
// });





//Class work products datasheet and show satas using foreach loop

// let products=[
//     {
//         name:"Soap",
//         dep:"health & Care",  
//         price:"200",
//     },
//     {
//         name:"HandWash",
//         dep:"health & Care",  
//         price:"150",
//     },
//     {
//         name:"SHAMPOO",
//         dep:"health & Care",  
//         price:"650",
//     },
  
//     {
//         name:"DishWash",
//         dep:"Kitchen appliance",  
//         price:"200",
//     },
//     {
//         name:"Bread",
//         dep:"Food",  
//         price:"200",
//     },
  
//     {
//         name:"Jam",
//         dep:"Food",  
//         price:"450",
//     },
//     {
//         name:"Pasta",
//         dep:"Food",  
//         price:"250",
//     },
//     {
//         name:"Noodles",
//         dep:"Food",  
//         price:"250",
//     },
  
//     {
//         name:"Soap",
//         dep:"health & Care",  
//         price:"200",
//     },
  
//     {
//         name:"Soap",
//         dep:"health & Care",  
//         price:"200",
//     },
  
// ];
// products.forEach((products,index)=>{
//     console.log(`${index}`);
//     if(typeof products=="object"){
//       let info= 
//           `Name:${products.name}
//            dep:${products.dep}
//         price:${products.price}
//         `;
//         console.table(info);
//     }
// else{
//     console.table(products);
// }
// });
//     document.write(`
// <table style="border: 1px solid red; margin: 2px;">
//         <thead>
//             <tr>
//                 <th style="border: 1px solid red">name</th>
//                 <th style="border: 1px solid red">dep</th>
//                 <th style="border: 1px solid red ">price</th>
//             </tr>
//         </thead>
//         <tbody>`);
// products.forEach((products) => {
//     document.write(`
   
            
//             <tr>
//             <td style="border: 1px solid black ">${products.name}</td>
//             <td style="border: 1px solid black ">${products.dep}</td>
//             <td style="border: 1px solid black ">${products.price}.00</td>
  
//             </tr>
//        `
// );
// });
// document.write(`
//         </tbody>
//     </table>
// `);
//console.table(products);
// products.forEach((products,index)=>{
//     console.table(`${index} ${products.name} ${products.dep} ${products.price}`);
// });




//make 5 example using for-in 
//for-in use hoy key /index ber korer jonno

// 1 array

let student=["name","roll","class"];
for(let index in student ){
    console.log(`${index}:${student[index]}`);

}

// 2 object

// let student={
//     name:"Rahim",
// roll:1
// };
// for(let key in student ){
//     console.log(`${key}:${student[key]}`);

// }


//make 5 example using for-of
//for-in use hoy value /string/character ber korer jonno

//array

// let student=["name","roll"]
// for(let value of student){
//     console.log(value);

// }


//object
// let student={
//     name:"Rahim",
// roll:1
// };
// for(let value of Object.values (student) ){
//     console.log(value);

// }

//make 5 example using construct function

// let name=prompt('enter name');
// let roll=prompt('enter roll');
// let stclass=prompt('enter stclass');
// function students(name,roll,stclass){
// this.name=name;
// this.roll=roll;
// this.stclass=stclass;
// }

// // let student=new students("dfgdf",4,"df"); promt use na korle aivabe data dea jay
// let student=new students(name,roll,stclass);

// document.write(
//     `<table>
//         <thead>
//             <tr>
//                 <th>name</th>
//                 <th>roll</th>
//                 <th>stclass</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>${student.name}</td>
//                 <td>${student.roll}</td>
//                 <td>${student.stclass}</td>
//             </tr>
//         </tbody>
//     </table>`
// )
