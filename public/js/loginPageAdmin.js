const adminUserName=document.getElementById('adminUserName');
const adminPassword=document.getElementById('adminPassword');
const loginAdminBtn=document.getElementById('adminLogin');
const pleaseLogin=document.getElementById('okayAdmin');
let pleaseLoginDiv=document.getElementById('pleaseLOginDiv');

function sendLoginDataToServer(name,password)
{
  loginData={
    name:name,
    password:password
  }

  fetch('http://localhost:3000/admin/login',
        {
           method:"POST",
           headers: {'Content-Type':'text/plain'},
           body:JSON.stringify(loginData),
        })
        .then(function(res){ return res.json(); })
        .then(function(data){ alert( JSON.stringify( data ) ) })
       
}
function adminVerfication()
{
 const username=adminUserName.value;
  const passwordadmin=adminPassword.value;
    if(username==""&&passwordadmin=="")
   {
        pleaseLoginDiv.style.display="block";
        
    }
  else
    { 
          sendLoginDataToServer(username,passwordadmin);
    }
    
}

loginAdminBtn.addEventListener('click',adminVerfication)