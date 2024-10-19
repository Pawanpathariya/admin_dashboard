async function Search(){

   let Table=`<table width='70%'>
   <tr>
     <td> Id </td>
     <td> Name  </td>
     <td> City  </td>
     <td> Course </td>
     <td id="last"> fees  </td>
   </tr>  
     `
let txtval= document.getElementById("nsearch").value;
let api=`http://localhost:3000/students/?name=${txtval}`;

let Obj= await  fetch(api);
let Data= await Obj.json();               
console.log(Data);

Data.map((key)=>{
Table+=`<tr>
        <td> ${key.id} </td>
        <td> ${key.name} </td>
        <td> ${key.city} </td>
        <td> ${key.course} </td>
        <td id="last"> ${key.fees} </td>
     </tr>         
   `
})

Table+="</table>";

document.getElementById("showsea").innerHTML=Table;
}