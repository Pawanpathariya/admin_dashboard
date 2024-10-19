document.getElementById("register").addEventListener("click",save);

function save(){
    let username=document.getElementById("username").value;
    let email=document.getElementById("mail").value;
    let password=document.getElementById("password").value;

    if(username==""||email==""||password==""){
        alert("All field are mandotry");
    }

    localStorage.setItem("username",username);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);


    window.location.href ="index.html";
}