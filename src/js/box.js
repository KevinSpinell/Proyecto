import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';
    export { Swal };
import 'sweetalert2/src/sweetalert2.scss'

const palabrasFamiliaDesercion = [
    "abandono",
    "ausencia",
    "separación",
    "divorcio",
    "conflicto",
    "disputa",
    "distancia",
    "neglecto",
    "negligencia",
    "falta",
    "alejamiento",
    "desentendimiento",
    "desvinculación",
    "desapego",
    "desatención",
    "ruptura",
    "discordia",
    "desconexión",
    "orfandad",
    "indiferencia",
    "descuido",
    "problemas",
    "desamor",
    "desaliento",
    "desesperanza",
    "tensión",
    "soledad",
    "incomprensión",
    "rechazo",
    "confusión",
    "vacío",
    "tristeza",
    "abandono",
    "desinterés",
    "falta de apoyo",
    "inseguridad",
    "inestabilidad",
    "incomunicación",
    "evasión",
    "desconfianza",
    "desintegración",
    "perdida",
    "silencio",
    "maltrato",
    "abusos",
    "evasión",
    "fractura",
    "abuso",
    "hostilidad",
    "frialdad"
];
const palabrasAmbienteEscolarDesercion = [
    "aislamiento",
    "bullying",
    "exclusión",
    "conflicto",
    "rechazo",
    "hostilidad",
    "discriminación",
    "acoso",
    "violencia",
    "soledad",
    "ansiedad",
    "depresión",
    "estrés",
    "presión",
    "inseguridad",
    "desmotivación",
    "frustración",
    "aburrimiento",
    "desinterés",
    "desconexión",
    "falta de pertenencia",
    "falta de apoyo",
    "falta de amistades",
    "incomprensión",
    "falta de empatía",
    "desarreglo",
    "desorden",
    "desorganización",
    "dificultades académicas",
    "falta de adaptación",
    "falta de recursos",
    "falta de orientación",
    "desaliento",
    "cansancio",
    "desesperanza",
    "falta de confianza",
    "desconfianza",
    "apatía",
    "resentimiento",
    "rabia",
    "descontento",
    "insatisfacción",
    "bajo rendimiento",
    "falta de concentración",
    "deserción escolar",
    "abandono",
    "falta de asistencia",
    "falta de participación",
    "desvinculación"
];
const palabrasHabitosEstudioDesercion = [
    "procrastinación",
    "distraibilidad",
    "desorganización",
    "falta de planificación",
    "falta de concentración",
    "falta de motivación",
    "desinterés",
    "cansancio",
    "sobrecarga",
    "ansiedad",
    "estrés",
    "presión",
    "falta de método",
    "falta de disciplina",
    "falta de constancia",
    "falta de atención",
    "falta de hábito",
    "falta de rutina",
    "mal manejo del tiempo",
    "exceso de actividades extracurriculares",
    "exceso de tecnología",
    "uso excesivo de redes sociales",
    "falta de descanso",
    "falta de sueño",
    "mala alimentación",
    "sedentarismo",
    "falta de ejercicio",
    "falta de lectura",
    "falta de práctica",
    "falta de repaso",
    "falta de comprensión",
    "falta de ayuda",
    "falta de tutoría",
    "falta de recursos",
    "falta de ambiente propicio para el estudio",
    "falta de apoyo familiar",
    "falta de apoyo de los profesores",
    "falta de interacción con compañeros de estudio",
    "falta de espacio adecuado para estudiar",
    "falta de herramientas de estudio",
    "falta de acceso a internet",
    "falta de materiales de estudio",
    "falta de interés en aprender",
    "falta de metas educativas claras",
    "falta de autoevaluación",
    "falta de retroalimentación",
    "falta de autocontrol",
    "falta de autoestima académica"
];
const palabrasDebilidadesDesercionPrimeraPersona = [
    "No me creo lo suficiente",
    "Suelo ser flojo a veces",
    "A veces me falta motivación",
    "Me distraigo fácilmente",
    "Mi organización es un desastre",
    "No le pongo mucho empeño",
    "A veces me rindo demasiado pronto",
    "Me cuesta lidiar con problemas",
    "Soy bastante perezoso",
    "No tengo muy buenos amigos en clase",
    "No suelo ser constante",
    "No soy muy responsable",
    "Tiendo a dejar las cosas para después",
    "No tengo metas muy claras",
    "No sé ver más allá de la próxima semana",
    "A veces me cuesta comunicarme bien",
    "No suelo resolver problemas fácilmente",
    "No entiendo mucho de tecnología",
    "Soy malo en matemáticas",
    "No leo mucho",
    "No escribo muy bien",
    "No soy muy creativo",
    "No tengo muchas habilidades sociales",
    "No suelo ser muy empático",
    "No tolero bien a los demás",
    "Me cuesta adaptarme",
    "No soy muy innovador",
    "No soy muy ingenioso",
    "No tengo mucho liderazgo",
    "No me gusta trabajar en equipo",
    "No soy muy flexible",
    "No tengo mucha autonomía",
    "A veces no soy muy auténtico",
    "No me gusta reflexionar mucho sobre mí mismo",
    "Me cuesta controlarme",
    "No soy muy autodirigido",
    "No suelo evaluarme bien a mí mismo",
    "No soy muy autocrítico",
    "No tengo mucho autocontrol",
    "No me conozco muy bien a mí mismo"
];
const palabrasVidaSocialNegativas = [
    "Me siento solo",
    "Me siento aislado",
    "Me dejan de lado",
    "Me hacen el vacío",
    "Siempre hay líos en mis relaciones",
    "Siento que me alejo de los demás",
    "No me conecto con nadie",
    "Mis amigos se pelean entre ellos",
    "Nadie me apoya cuando lo necesito",
    "No me entienden en absoluto",
    "No me fío de nadie",
    "Siento que todos van en mi contra",
    "Me tratan como si fuera el enemigo",
    "Soy discriminado",
    "Me acosan y me hacen la vida imposible",
    "Me excluyen de todo",
    "Siempre pienso en mí mismo y no en los demás",
    "Me siento solo y no quiero estar con otras personas",
    "Siento que siempre estoy compitiendo con los demás",
    "Alguien me ha traicionado",
    "He roto con alguien que me importaba",
    "Mis amigos se están alejando de mí",
    "Siento que todos me juzgan",
    "Siento que no valgo nada para nadie",
    "Siento que todos me ignoran",
    "Siento que todos me miran con desprecio",
    "Nadie se preocupa por mí",
    "No entiendo a nadie",
    "No conecto con la gente",
    "No me comunico bien con nadie",
    "Me siento inseguro",
    "Me desanimo con facilidad",
    "Ya no tengo esperanzas",
    "Siempre me frustro con cualquier cosa",
    "Me siento muy decepcionado",
    "Estoy muy triste",
    "Me entra ansiedad cuando estoy con gente",
    "Me siento muy deprimido",
    "No me relaciono con nadie",
    "Le tengo pánico a socializar",
    "Me da mucha vergüenza ser yo mismo",
    "No me siento bien conmigo mismo",
    "Siento que no encajo en ningún sitio",
    "Me encierro en mí mismo",
    "Prefiero estar solo",
    "Me siento sola",
    "Me siento aislada",
    "Me dejan de lado",
    "Me hacen el vacío",
    "Siempre hay líos en mis relaciones",
    "Siento que me alejo de los demás",
    "No me conecto con nadie",
    "Mis amigos se pelean entre ellos",
    "Nadie me apoya cuando lo necesito",
    "No me entienden en absoluto",
    "No me fío de nadie",
    "Siento que todos van en mi contra",
    "Me tratan como si fuera la enemiga",
    "Soy discriminada",
    "Me acosan y me hacen la vida imposible",
    "Me excluyen de todo",
    "Siempre pienso en mí misma y no en los demás",
    "Me siento sola y no quiero estar con otras personas",
    "Siento que siempre estoy compitiendo con los demás",
    "Alguien me ha traicionado",
    "He roto con alguien que me importaba",
    "Mis amigos se están alejando de mí",
    "Siento que todos me juzgan",
    "Siento que no valgo nada para nadie",
    "Siento que todos me ignoran",
    "Siento que todos me miran con desprecio",
    "Nadie se preocupa por mí",
    "No entiendo a nadie",
    "No conecto con la gente",
    "No me comunico bien con nadie",
    "Me siento insegura",
    "Me desanimo con facilidad",
    "Ya no tengo esperanzas",
    "Siempre me frustro con cualquier cosa",
    "Me siento muy decepcionada",
    "Estoy muy triste",
    "Me entra ansiedad cuando estoy con gente",
    "Me siento muy deprimida",
    "No me relaciono con nadie",
    "Le tengo pánico a socializar",
    "Me da mucha vergüenza ser yo misma",
    "No me siento bien conmigo misma",
    "Siento que no encajo en ningún sitio",
    "Me encierro en mí misma",
    "Prefiero estar sola"
];
const todasPalabrasDesercion = palabrasFamiliaDesercion.concat(
    palabrasAmbienteEscolarDesercion,
    palabrasHabitosEstudioDesercion,
    palabrasDebilidadesDesercionPrimeraPersona,
    palabrasVidaSocialNegativas
);

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



function option5(palabrasVidaSocialNegativas) {
    let selectElement = document.getElementById('select');
    let selectElement1 = document.getElementById('Box');
    selectElement1.classList.remove('hidden');
    selectElement.classList.add('hidden');
    let text = document.getElementById('text').innerText="como es tu vida con tus familiares"
    let textarea = document.getElementById("text1");
    textarea.focus();
    evaluartext(palabrasVidaSocialNegativas);
}



function evaluartext(event) {
    event.preventDefault();
    const doc = new jsPDF();
    let words = todasPalabrasDesercion;
    let a = document.getElementById("text1").value;
    if (a === "") {
        Swal.fire({
            title: "No escribiste nada 🤔",
            text: "Por favor escribe algo en la caja de texto",
            icon: "error"
        });
        return;
    } else {
        window.location.href = "/";
    }

    a = a.toLowerCase();
    let detect = a.split(" ");
    let Bword =[]
    let c=10;
    let b=20;
    let x = 10; // Coordenada x inicial
    let y = 40; // Coordenada y inicial
    let textoUsuario = detect.join(" ");
    const lines = doc.splitTextToSize(textoUsuario, doc.internal.pageSize.width - 20);
    doc.text(10, 20, lines);
    doc.addPage();
    let highlightedWords = detect.filter(detectWord => words.includes(detectWord.replace(/[!"'(),.:;?.]/ , "")));
    doc.text("Palabras Alarmantes", c, b);
    doc.text("Las siguientes palabras Son extraidas del texto:", c, b+10);
    // Imprimir el texto con las palabras clave resaltadas en rojo
    highlightedWords.forEach(word => {
        doc.setTextColor(255, 0, 0); // Establecer el color de texto a rojo
        doc.text(word, x, y); // Imprimir la palabra clave resaltada
        y += 10;
    });

    let name = localStorage.getItem('name');
    console.log(name);

    // Guardar el documento PDF
    doc.save("archivo" + ".pdf");

    localStorage.setItem("Texto", a);

    document.getElementById("text1").value = "";
}
