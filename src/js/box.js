import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';
    export { Swal };
import 'sweetalert2/src/sweetalert2.scss'
const words = ["crisis","problemas","desarmonía","estrés", "mal", "solo","triste","tristeza"]

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submitButton").addEventListener("click", evaluartext);
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("next").addEventListener("click", change);
});

function change() {
    let selectElement = document.getElementById('select');
    let selectElement1 = document.getElementById('select1');
    selectElement.classList.remove('hidden');
    selectElement1.classList.add('hidden');
    
}


document.getElementById("option1").innerText="Cuentanos como es tu vida con tus familiares";
document.getElementById("option2").innerText="Como te llevas con tus compañeros y si te gusta tu ambiente escolar";
document.getElementById("option3").innerText="Que habitos de estudio practicas";
document.getElementById("option4").innerText="Cuentanos acerca de tus fortalezas";
document.getElementById("option5").innerText="Como es tu vida social en general";


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("option1").addEventListener("click", option1);
});

function option1() {
    let selectElement = document.getElementById('select');
    let selectElement1 = document.getElementById('Box');
    selectElement1.classList.remove('hidden');
    selectElement.classList.add('hidden');
    let text = document.getElementById('text').innerText="como es tu vida con tus familiares"
    let textarea = document.getElementById("text1");
    textarea.focus();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("option2").addEventListener("click", option2);
});

function option2() {
    let selectElement = document.getElementById('select');
    let selectElement1 = document.getElementById('Box');
    selectElement1.classList.remove('hidden');
    selectElement.classList.add('hidden');
    let text = document.getElementById('text').innerText="como te llevas con tus compañeros y si te gusta tu ambiente escolar"
    let textarea = document.getElementById("text1");
    textarea.focus();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("option3").addEventListener("click", option3);
});

function option3() {
    let selectElement = document.getElementById('select');
    let selectElement1 = document.getElementById('Box');
    selectElement1.classList.remove('hidden');
    selectElement.classList.add('hidden');
    let text = document.getElementById('text').innerText="los habitos de estudio que practicas"
    let textarea = document.getElementById("text1");
    textarea.focus();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("option4").addEventListener("click", option4);
});

function option4() {
    let selectElement = document.getElementById('select');
    let selectElement1 = document.getElementById('Box');
    selectElement1.classList.remove('hidden');
    selectElement.classList.add('hidden');
    let text = document.getElementById('text').innerText="como es tu vida social en general"
    let textarea = document.getElementById("text1");
    textarea.focus();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("option5").addEventListener("click", option5);
});



function option5() {
    let selectElement = document.getElementById('select');
    let selectElement1 = document.getElementById('Box');
    selectElement1.classList.remove('hidden');
    selectElement.classList.add('hidden');
    let text = document.getElementById('text').innerText="como es tu vida con tus familiares"
    let textarea = document.getElementById("text1");
    textarea.focus();
}



function evaluartext(event) {
    event.preventDefault();
    let a = document.getElementById("text1").value
    if (a== "") {
        Swal.fire({
            title: "No escribiste nada 🤔",
            text: "Por favor escribe algo en la caja de texto",
            icon: "error"
        })
        return;
    }else{
        window.location.href = "/";
    }
    
    a=a.toLowerCase(a);
    let detect = a.split(" ");
    
    let textoUsuario = document.getElementById("text1").value.trim();
    // let topic = document.getElementById("option1").value;
    let name = localStorage.getItem('name')
    console.log(name);

    const doc = new jsPDF();
                const lines = doc.splitTextToSize(textoUsuario, doc.internal.pageSize.width - 20);
                doc.text(10, 10, lines);
                doc.save("archivo"+".pdf");
    
    localStorage.setItem("Texto",a)

    a = document.getElementById("text1").value=" "
}