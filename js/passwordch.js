function changepass(){

    let username=document.getElementById("uname").value;
    let previouspass=document.getElementById("ppass").value;
    let newpass=document.getElementById("npass").value;


let storedpassword=localStorage.getItem("password");
let storedusername=localStorage.getItem("username");
if(previouspass==storedpassword && username==storedusername){
    alert("password changed ");
    localStorage.setItem("password",newpass);
    window.location.href="index.html";
}
}