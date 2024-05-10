import Swal from 'sweetalert2';
    export { Swal };
import 'sweetalert2/src/sweetalert2.scss'
let valido = sessionStorage.getItem("loggedUserEmail");

document.addEventListener("DOMContentLoaded", function() {
    let loginButton = document.querySelector("#iniciar");
    let back_button = document.getElementById("inicio");
    if (back_button) { 
        back_button.addEventListener("click", function() {
            back();
        });
    }
    if (loginButton) { 
        loginButton.addEventListener("click", function() {
            Login();
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let registerButton = document.querySelector('[id="register"]');
    let back_button = document.getElementById("inicio");
    if (back_button) { 
        back_button.addEventListener("click", function() {
            back();
        });
    }
    if (registerButton) {
        registerButton.addEventListener("click", function() {
            Register();
        });   
    }  
});
let html = String.raw`
    <div class="flex" id="account">
        <img src="../../public/logout_logo.svg" id="img" alt="" class="ml-14">
        <a href="login" id="button_login" class="ml-2 mr-10">Cerrar Sesión</a>
    </div>
`;
document.addEventListener("DOMContentLoaded", function() {
    if(valido){
        document.getElementById("account").innerHTML = html;
        let button_login = document.getElementById("button_login")
        if(button_login){
            button_login.addEventListener( 'click', function(){
                cerrarSesion()
            });
        }
    }
});

// JS DEL REGISTER
class User{
    name;last_name;email;password;role
    constructor(name, last_name, email, password,  role){
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    getRole(){
        return this.role;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
}



//JS DEL LOGIN 
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
function back(){
    window.location="index.html";
}
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function Register() {
    let name = document.getElementById("name")
    let last_name = document.getElementById("last_name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let confirmpass = document.getElementById("confirmpass")
    let role = document.getElementById("role")

    if (name && last_name && email && password && confirmpass) {
        if (name.value.length > 3 && last_name.value.length > 3) {
            if (validateEmail(email.value) && password.value == confirmpass.value && password.value.length >= 8) {
                let user = new User(name.value, last_name.value, email.value, password.value, role.value)
                let userKey = "user_" + email.value
                localStorage.setItem(userKey, JSON.stringify(user))
                Toast.fire({
                    icon: "success",
                    title: "Registro Exitoso!"
                });
                window.location = "login"
            } else {
                Toast.fire({
                    icon: "error",
                    title: "Campos Invalidos!"
                });
            }
        } else {
            Toast.fire({
                icon: "error",
                title: "Al menos 4 caracteres!"
            });
        }
    }
}
function Login() {
    let email = document.getElementById("GET-email")
    let password = document.getElementById("GET-password")
    let valido = false

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key.startsWith("user_")) {
            let user = JSON.parse(localStorage.getItem(key))
            if (user.email == email.value && user.password == password.value) {
                valido = true
                sessionStorage.setItem("loggedUserEmail", JSON.stringify(user))
                break;
            }
        }
    }
    if (valido) {
        window.location = "index.html"
    } else {
        Toast.fire({
            icon: "error",
            title: "Credenciales Incorrectas!"
        });
    }
}

function cerrarSesion(){
    sessionStorage.clear();
    document.getElementById("button_login").innerText = "Iniciar Sesión"
    window.location="login";
}
// JS DEL INDEX
