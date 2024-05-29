import jsPDF from 'jspdf';
var L1 = null;
const imgData = "../../public/test_visual/Lamina1.jpg"
const imgData2 = "../../public/test_visual/Lamina2.jpg"
const imgData3 = "../../public/test_visual/Lamina3.jpg"
const imgData4 = "../../public/test_visual/Lamina4.jpg"
const imgData5 = "../../public/test_visual/Lamina5.jpg"
const imgData6 = "../../public/test_visual/Lamina6.jpg"
const imgData7 = "../../public/test_visual/Lamina7.jpg"
const imgData8 = "../../public/test_visual/Lamina8.jpg"
const imgData9 = "../../public/test_visual/Lamina9.jpg"
const imgData10 = "../../public/test_visual/Lamina10.jpg"
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
    setTimeout(function() {
        var valort= localStorage.getItem('validacion');
        console.log("valort en el script: "+valort);
    
        var content= localStorage.getItem('contenido');
        
        if(valort>3){
            console.log("Entro al if del script:");
            lamina++;
            switch(lamina){
                case 1: 
                    L1 = content;
                    console.log("La lamina anterior fue la: "+lamina+ " (Debería ser la 1)");
                    console.log("La respuesta es: "+L1);
                    break;
                case 2: 
                    L2 = content;
                    console.log("La lamina anterior fue la: "+lamina);
                    console.log("La respuesta es: "+L2);
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
                    console.log("La lamina anterior fue la: "+lamina);
                    console.log("La respuesta es: "+L8);
                    break;
                case 9: 
                    L9 = content;
                    console.log("La lamina anterior fue la: "+lamina);
                    console.log("La respuesta es: "+L9);
                    break;
                default:
                    var content= localStorage.getItem('contenido');
                    L10 = content;
                    console.log("La lamina anterior fue la: "+lamina);
                    console.log("La respuesta es: "+L10);
                    download();
                    break;
            }
            
        }         
    }, 100);
    


}
document.getElementById("send").addEventListener("click",save)

function showLamines(){
    document.getElementById("welcome").classList.remove("flex")
    document.getElementById("welcome").classList.add("hidden")

    document.getElementById("lamdiv").classList.remove("hidden")
    document.getElementById("lamdiv").classList.add("flex")
    document.getElementById("see").focus();
    
}
document.getElementById("continue").addEventListener("click",showLamines)

function download(){
    const doc = new jsPDF();
    document.getElementById("lamdiv").classList.remove("flex")
    document.getElementById("lamdiv").classList.add("hidden")
    document.getElementById("back").classList.add("hidden")

    document.getElementById("finish").classList.remove("hidden")
    document.getElementById("finish").classList.add("flex")

    setTimeout(function() {
        doc.text(10, 20, "Test de Roschach");
        doc.addImage(imgData, 'JPEG', 10, 40, 90, 80);
        doc.text(10, 130, "Respuesta del estudiante: " + L1);
        doc.addImage(imgData2, 'JPEG', 10, 150, 90, 80);
        doc.text(10, 240, "Respuesta del estudiante: " + L2);
        doc.addPage();
        doc.addImage(imgData3, 'JPEG', 10, 40, 90, 80);
        doc.text(10, 130, "Respuesta del estudiante: " + L3);
        doc.addImage(imgData4, 'JPEG', 10, 150, 90, 80);
        doc.text(10, 240, "Respuesta del estudiante: " + L4);
        doc.addPage();
        doc.addImage(imgData5, 'JPEG', 10, 40, 90, 80);
        doc.text(10, 130, "Respuesta del estudiante: " + L5);
        doc.addImage(imgData6, 'JPEG', 10, 150, 90, 80);
        doc.text(10, 240, "Respuesta del estudiante:" + L6);
        doc.addPage();
        doc.addImage(imgData7, 'JPEG', 10, 40, 90, 80);
        doc.text(10, 130, "Respuesta del estudiante: " + L7);
        doc.addImage(imgData8, 'JPEG', 10, 150, 90, 80);
        doc.text(10, 240, "Respuesta del estudiante:" + L8);
        doc.addPage();
        doc.addImage(imgData9, 'JPEG', 10, 40, 90, 80);
        doc.text(10, 130, "Respuesta del estudiante: " + L9);
        doc.addImage(imgData10, 'JPEG', 10, 150, 90, 80);
        doc.text(10, 240, "Respuesta del estudiante: " + L10);
        doc.save("Test de Roschach" + ".pdf");        
    }, 3000);
}