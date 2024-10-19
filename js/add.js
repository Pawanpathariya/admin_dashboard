document.getElementById("add").addEventListener("click",datasave);
let api="http://localhost:3000/students";
async function datasave(){
    let id=document.getElementById("id").value;
    let name=document.getElementById("name").value;
    let course=document.getElementById("course").value;
    let city=document.getElementById("city").value;
    let fees=document.getElementById("fees").value;

    const response= await fetch(api, {
        method: "POST",
        body: JSON.stringify({ 
          "id":id,
          "name":name,
          "course":course,
          "fees":fees,
          "city":city   
         }),
         headers: {
            "Content-Type": "application/json",
          }
    });

    alert("data save!!!");

}