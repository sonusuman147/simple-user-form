const form=document.getElementById("userForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const data={

name:document.getElementById("name").value,

email:document.getElementById("email").value,

mobile:document.getElementById("mobile").value,

dob:document.getElementById("dob").value

};

const response=await fetch("/save",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(data)

});

const result=await response.json();

document.getElementById("msg").innerHTML=result.message;

form.reset();

});