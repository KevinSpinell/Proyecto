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
    let termino = document.getElementById("text1").value="";
    
}
