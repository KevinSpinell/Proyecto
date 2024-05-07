import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';
    export { Swal };
import 'sweetalert2/src/sweetalert2.scss'
const words = ["crisis","problemas","desarmonía","estrés", "mal", "solo","triste","tristeza"]

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submitButton").addEventListener("click", evaluartext);
});

function evaluartext() {
    let a = document.getElementById("text1").value
    if (a== "") {
        Swal.fire({
            title: "No escribiste nada 🤔",
            text: "Por favor escribe algo en la caja de texto",
            icon: "error"
        })
        return;
    }
    
    a=a.toLowerCase(a);
    let detect = a.split(" ");
    let SearchWords = [];

    detect.forEach(detectWord => {
        let WhioutPoint = detectWord.replace(/[!"'(),.:;?.]/ , "")
        SearchWords.push(WhioutPoint)
    });

    let c=0;
    console.log(SearchWords);
    SearchWords.forEach(SearchWords => {
        if (words.includes(SearchWords)) {
            c++;
        }
    });
    console.log(c);
    
    // let textoUsuario = document.getElementById("text1").value.trim();

    // const blob = new Blob([textoUsuario], { type: 'text/plain;charset=utf-8' });

    
    // saveAs(blob, 'datos/archivo.txt');

    // localStorage.setItem("Texto",a)

    console.log(localStorage.getItem("Texto"));
    a = document.getElementById("text1").value=" "
}

