let paso = 0;
function who_am(){
    console.log("hoola")
    let input = document.getElementById("meta").value;
    let placeholder = `Escribe el Paso ${paso + 1}`;
    switch(paso){
        case 0:
            console.log(paso)
            console.log(placeholder)
            document.getElementById("paso_10").innerText = input;
            document.getElementById("meta").placeholder = placeholder;
            input = document.getElementById("meta").value = "";
            break;
        case 1:
            console.log(placeholder)
            document.getElementById("paso_1").innerText = input;
            document.getElementById("meta").setAttribute("placeholder", placeholder);
            input = document.getElementById("meta").value = "";
            break;
        case 2:
            document.getElementById("paso_2").innerText = input;
            document.getElementById("meta").setAttribute("placeholder", placeholder);
            input = document.getElementById("meta").value = "";
            break;
        case 3:
            document.getElementById("paso_3").innerText = input;
            document.getElementById("meta").setAttribute("placeholder", placeholder);
            input = document.getElementById("meta").value = "";
            break;
        case 4:
            document.getElementById("paso_4").innerText = input;
            document.getElementById("meta").setAttribute("placeholder", placeholder);
            input = document.getElementById("meta").value = "";
            break;
        case 5:
            document.getElementById("paso_5").innerText = input;
            document.getElementById("meta").setAttribute("placeholder", placeholder);
            input = document.getElementById("meta").value = "";
            break;
        case 6:
            document.getElementById("paso_6").innerText = input;
            document.getElementById("meta").setAttribute("placeholder", placeholder);
            input = document.getElementById("meta").value = "";
            break;
        case 7:
            document.getElementById("paso_7").innerText = input;
            document.getElementById("meta").setAttribute("placeholder", placeholder);
            input = document.getElementById("meta").value = "";
            break;
        case 8:
            document.getElementById("paso_8").innerText = input;
            document.getElementById("meta").setAttribute("placeholder", placeholder);
            input = document.getElementById("meta").value = "";
            break;
        case 9:
            document.getElementById("paso_9").innerText = input;
            document.getElementById("meta").setAttribute("placeholder", placeholder);
            input = document.getElementById("meta").value = "";
            break;
    }
    paso += 1;
}
function enviar(){
    if(paso<=9){
        who_am();
    }else{
        document.getElementById("form").disabled = true;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    let envia = document.querySelector("#form");
    if(envia){
        envia.addEventListener("click", function(){
            enviar();
        })
    }
    
});