$(document).ready(function(){
    $(".toggle").click(function(){
        $(".title").hide();
        $(".navigation").css("width",100);
    })
})
$(document).ready(function(){
    $(".toggle").dblclick(function(){
        $(".title").show();
        $(".navigation").css("width",300);
    })
})

async function display(){
    let table=`<table width='70%' >
        <tr>
            <th> ID </th>
            <th> Name </th>
            <th> City </th>
            <th> Course </th>
            <th id="last"> Fees </th>
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
                <td id="last"> ${key.fees} </td>
                </tr> `
            })
        table+="</table>"
        document.getElementById("demo").innerHTML=table;
        }
        setInterval(display,1000);