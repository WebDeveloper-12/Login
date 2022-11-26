var firstName = document.getElementById("firstName")
var lastname = document.getElementById("lastName")
var age = document.getElementById("age")
var email = document.getElementById("email")
var password = document.getElementById("password")
var button = document.getElementById("signup")
var warning = document.getElementById('warning')
var success = document.getElementById("success")
var CurrentUser = localStorage.getItem("CurrentUser")
var welcome = document.getElementById("welcome")

var Users

// if(email.value == null){
//    document.getElementById("signup").classList.add('disabled')
// }

if(localStorage.getItem("data")==null){
    Users = []
}
else{
    Users = JSON.parse(localStorage.getItem("data")) 
}


function addUser(){
    checkExist()
    if(checkExist()==false){
        var User = {
            first_name:firstName.value,
            last_name:lastName.value,
            age:age.value,
            email:email.value,
            password:password.value,
        }
        Users.push(User)
        localStorage.setItem("data" , JSON.stringify(Users))
    }
}

function checkExist(){
    for(i = 0 ; i < Users.length ; i++){
        if(Users[i].email.toLowerCase() == email.value.toLowerCase()){
            warning.classList.replace("d-none" , "d-block")
            success.classList.replace("d-block" , "d-none")
            return true
        }
        else{
            warning.classList.replace("d-block" , "d-none")
            success.classList.replace("d-none" , "d-block")
        }
    }
    return false
}

var loginemail = document.getElementById("loginemail")
var loginpassword = document.getElementById("loginpassword")
var error = document.getElementById("error")
var loginbtn = document.getElementById("loginbtn")

function checkinfo(){
    for(var i = 0; i<Users.length ; i++){
        if(loginemail.value.toLowerCase() == Users[i].email.toLowerCase() && loginpassword.value.toLowerCase() == Users[i].password.toLowerCase()){ 
            localStorage.setItem("CurrentUser" , Users[i].first_name)
            error.classList.replace("d-block", "d-none")
            loginbtn.setAttribute("href", "home.html")
        }
        else{
            error.classList.replace("d-none", "d-block")
        }
    }
}

function logout(){
    localStorage.removeItem("CurrentUser")
    logoutbtn.setAttribute("href", "home.html")
}

welcome.innerHTML = "Welcome " + CurrentUser




