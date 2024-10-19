async function myed(id){
    let name=document.getElementById("name").value;
    let course=document.getElementById("course").value;
    let city=document.getElementById("city").value;
    let fees=document.getElementById("fees").value;

    let api=`http://localhost:3000/students/${id}`;
  
    fetch(api, {
      method: "PATCH",
      headers: {
          "Content-Type" : "application/json"
        },
      body: JSON.stringify(
        {
            "name":name,
            "course":course,
            "fees":fees,
            "city":city  
        }
      )
    })
    .then(json => {
      alert("Data updated!!!");
    });
  }


  async function editDisplay(myid)
{
  let api=`http://localhost:3000/students/${myid}`

  let Obj= await fetch(api);
  let Data=await Obj.json();
  document.getElementById("show").style.display="block";
  myForm=`

    
          Edit Name: <input type="text" id="name" value="${Data.name}">
          <br>
           Edit Course: <input type="text" id="course" value="${Data.course}">
          <br>
           Edit City: <input type="text" id="city" value="${Data.city}">
          <br>
           Edit Fees: <input type="text" id="fees" value="${Data.fees}">
          <br>
          <button onclick="myed(${Data.id})"> Edit Save! </button>
  `
  document.getElementById("show").innerHTML=myForm;
}

async function displayed(){
    let table=`<table width='70%' >
        <tr>
            <th> ID </th>
            <th> Name </th>
            <th> City </th>
            <th> Course </th>
            <th> Fees </th>
            <th id="last">  </th>
            `
        let api="http://localhost:3000/students";
        let mydata= await fetch(api);
        let data=await mydata.json();
        data.map((key)=>{
            table+=`<tr>
                <td> ${key.id} </td>
                <td> ${key.name} </td>
                <td> ${key.city} </td>
                <td> ${key.course} </td>
                <td> ${key.fees} </td>
                <td id="last" ><a href="#" onclick="editDisplay(${key.id})"> <ion-icon name="create-outline"></ion-icon> </a>
          </td>
                </tr> `
            })
        table+="</table>"
        document.getElementById("ed").innerHTML=table;
        }
        displayed();