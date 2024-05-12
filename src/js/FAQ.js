const preguntas = document.querySelectorAll(".faq")

preguntas.forEach(pregunta =>{
    pregunta.addEventListener("click", ()=>{
        pregunta.classList.toggle("activo")
    });
});