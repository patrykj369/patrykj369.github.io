
const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    let succes = errorCallback();

    if(succes){

    }
    else{
        e.preventDefault();
    }
});



function errorCallback(){
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const mail = document.getElementById("mail");
    const password = document.getElementById("password");


    if(fname.value == ""){
        const imgFname = document.getElementById("imgFname");
        const pFname = document.getElementById("pFname");

        fname.style.border = "2px solid hsl(0, 100%, 74%)";
        imgFname.style.opacity = "1";
        pFname.style.opacity = "1";

    }else{
        fname.style.border = "1px solid hsl(240, 6%, 91%)";
        imgFname.style.opacity = "0";
        pFname.style.opacity = "0";

    }

    if(lname.value == ""){
        const imgLname = document.getElementById("imgLname");
        const pLname = document.getElementById("pLname");

        lname.style.border = "2px solid hsl(0, 100%, 74%)";
        imgLname.style.opacity = "1";
        pLname.style.opacity = "1";

    }else{
        lname.style.border = "1px solid hsl(240, 6%, 91%)";
        imgLname.style.opacity = "0";
        pLname.style.opacity = "0";

    }

    const mailik = mail.value.toString();

    if(mail.value == "" || !mailik.includes("@")){
        const imgMail = document.getElementById("imgMail");
        const pMail = document.getElementById("pMail");

        mail.style.border = "2px solid hsl(0, 100%, 74%)";
        imgMail.style.opacity = "1";
        pMail.style.opacity = "1";

    }else{
        mail.style.border = "1px solid hsl(240, 6%, 91%)";
        imgMail.style.opacity = "0";
        pMail.style.opacity = "0";

    }

    if(password.value == ""){
        const imgPassword = document.getElementById("imgPassword");
        const pPassword = document.getElementById("pPassword");

        password.style.border = "2px solid hsl(0, 100%, 74%)";
        imgPassword.style.opacity = "1";
        pPassword.style.opacity = "1";
    }else{
        password.style.border = "1px solid hsl(240, 6%, 91%)";
        imgPassword.style.opacity = "0";
        pPassword.style.opacity = "0";

    }

    if(password.value == "" || mail.value == "" || !mailik.includes("@") || lname.value == "" || fname.value == ""){
        return false;
    }else{
        return true;
    }

}