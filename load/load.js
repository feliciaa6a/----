let submit=document.getElementById("submit");
let usernameInput=document.getElementById("username");
let passwordInput=document.getElementById("password");
submit.onclick=function(){ 
    ///获取用户名和密码
    let username=usernameInput.value;
    let password=passwordInput.value;
    fetch("unknown",
    {method:'post',
    headers:{
        "Content-Type":"application/json"
    },
    body:{"name":username,"password":password}
    })
    .then((response)=>{
        console.log('response',response);
        if(response.status===200){
            return response.json();
        }
    })
    .then((json)=>{
        if (json.code == "200") {
            console.log("success");
            location.href='./home.html'
            }else if (json.code == "400") {         
            console.log("failed")            
            }
    })
    .catch(err=>console.log('request failed',err));
}
