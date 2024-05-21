
var L1 = null;
var L2 = null;
var L3 = null;
var L4 = null;
var L5 = null;
var L6 = null;
var L7 = null;
var L8 = null;
var L9 = null;
var L10 = null;

var lamina= 0;

function charge(){
    let valor= 0;
    let content = null;
    localStorage.setItem('validacion', valor);
    localStorage.setItem('contenido',content);
}
document.addEventListener("DOMContentLoaded",charge);

function save(){
    var valort= localStorage.getItem('validacion');
    var content= localStorage.getItem('contenido');
    if(valort>3){
        lamina++;
        switch(lamina){
            case 1: 
                L1 = content;
                console.log("Aquí tienes la respuesta 1:");
                console.log(L1);
                console.log("Esta es la lamina: "+ lamina);
                break;
            case 2: 
                L2 = content;
                console.log("Aquí tienes la respuesta 2:");
                console.log(L2);
                break;
            case 3: 
                L3 = content;
                break;
            case 4: 
                L4 = content;
                break;
            case 5: 
                L5 = content;
                break;
            case 6: 
                L6 = content;
                break;
            case 7: 
                L7 = content;
                break;
            case 8: 
                L8 = content;
                break;
            default: 
                L9 = content;
                console.log("Aquí tienes la respuesta 9:");
                console.log(L9);
                setTimeout(function() {
                    var content = localStorage.getItem('contenido');
                    L10 = content;
                    console.log("Aquí tienes la respuesta 10:");
                    console.log(L10);
                    download();
                }, 50);
                break;
        }
    }
}
document.getElementById("send").addEventListener("click",save)

function showLamines(){
    document.getElementById("welcome").classList.remove("flex")
    document.getElementById("welcome").classList.add("hidden")

    document.getElementById("lamdiv").classList.remove("hidden")
    document.getElementById("lamdiv").classList.add("flex")
    
}
document.getElementById("continue").addEventListener("click",showLamines)

function download(){
    document.getElementById("lamdiv").classList.remove("flex")
    document.getElementById("lamdiv").classList.add("hidden")
    document.getElementById("back").classList.add("hidden")

    document.getElementById("finish").classList.remove("hidden")
    document.getElementById("finish").classList.add("flex")
    
}