function mydel(myid)
{
  let api=`http://localhost:3000/students/${myid}`

  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted!!!");
  })
  
}

async function display(){
    let table=`<table width='70%' >
        <tr>
            <th> ID </th>
            <th> Name </th>
            <th> City </th>
            <th> Course </th>
            <th> Fees </th>
            <th id="last"> </th>
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
                <td > ${key.fees} </td>
                <td id="last"><a href="#" onclick="mydel(${key.id})"><ion-icon name="trash-outline"></ion-icon></a>
 </td>
                </tr> `
            })
        table+="</table>"
        document.getElementById("remo").innerHTML=table;
        }
        setInterval(display,1000);