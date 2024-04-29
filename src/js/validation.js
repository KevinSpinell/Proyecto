document.addEventListener("DOMContentLoaded", function() {
    let loginButton = document.querySelector("#iniciar");
    if (loginButton) { //
        loginButton.addEventListener("click", function() {
            Login();
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let registerButton = document.querySelector('[id="register"]');
    if (registerButton) {
        registerButton.addEventListener("click", function() {
            Register();
        });   
    }  
});

// JS DEL REGISTER
let users  = []
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

    if (name && last_name && email && password && confirmpass) {
        if (name.value.length > 3 && last_name.value.length > 4) {
            if (validateEmail(email.value) && password.value == confirmpass.value && password.value.length >= 8) {
                let user = new User(name.value, last_name.value, email.value, password.value, "user")
                let userKey = "user_" + email.value
                localStorage.setItem(userKey, JSON.stringify(user))

                alert(`Usuario ${user.name} ${user.last_name}, ha sido registrado exitosamente`)
                window.location = "login"
            } else {
                alert('Error en el registro')
            }
        } else {
            alert('Los campos deben contener al menos 5 caracteres')
        }
    }
}


//JS DEL LOGIN 
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
                sessionStorage.setItem("loggedUserEmail", email.value)
                break;
            }
        }
    }

    if (valido) {
        window.location = "index.html"
    } else {
        alert("Correo electrónico o contraseña incorrectos")
    }
}

// JS DEL INDEX
