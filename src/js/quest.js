    var good=0; //No hay riesgo de desercion
    var far=0; //Casi no hay riesgo de desercion
    var near=0; //Hay ligero riesgo de desercion
    var gone=0; //Hay mucho riesgo de desercion

    var numquest=0; //Contador de las preguntas

    
    var blue= localStorage.getItem('blue');
    var green= localStorage.getItem('green');
    var yellow= localStorage.getItem('yellow');
    var orange= localStorage.getItem('orange');
    var red= localStorage.getItem('red');

    // Si no existe, inicializarla como 0
    if (!blue) {
        blue = 0;
    } else {
        blue = parseInt(blue);
    }
    if (!green) {
        green = 0;
    } else {
        green = parseInt(green);
    }
    if (!yellow) {
        yellow = 0;
    } else {
        yellow = parseInt(yellow);
    }
    if (!orange) {
        orange = 0;
    } else {
        orange = parseInt(orange);
    }
    if (!red) {
        red = 0;
    } else {
        red = parseInt(red);
    }



    function charge(){
        document.getElementById("questionid").innerText="¿Qué tan comodo es el ambiente de tu colegio para ti?";
        document.getElementById("ans1").innerText="1";
        document.getElementById("ans2").innerText="2";
        document.getElementById("ans3").innerText="3";
        document.getElementById("ans4").innerText="4";
        document.getElementById("ans5").innerText="5";
    }
    document.addEventListener("DOMContentLoaded",charge);
    function ans1quest1(){
        gone ++;
        numquest++;
        lights1()
    }
    document.getElementById("ans1").addEventListener("click",ans1quest1)
    function ans2quest1(){
        near++;
        numquest++;
        console.log(gone, good, far, numquest)
        lights2()
    }
    document.getElementById("ans2").addEventListener("click",ans2quest1)
    function ans3quest1(){
        near+=0.5;
        far+=0.5;
        numquest++;
        lights3()
    }
    document.getElementById("ans3").addEventListener("click",ans3quest1)
    function ans4quest1(){
        far ++;
        numquest++;
        lights4()
    }
    document.getElementById("ans4").addEventListener("click",ans4quest1)
    function ans5quest1(){
        good ++;
        numquest++;
        lights5()
    }
    document.getElementById("ans5").addEventListener("click",ans5quest1)

    function lights1(){
        var ans= document.getElementById("ans1")
        ans.style.border = "3px solid green"        
        setTimeout(function() {
            ans.style.border = "";
            change_question();
        }, 500);
    }
    function lights2(){
        var ans= document.getElementById("ans2")
        ans.style.border = "2px solid green"
        setTimeout(function() {
            ans.style.border = "";
            change_question();
        }, 500);
    }
    function lights3(){
        var ans= document.getElementById("ans3")
        ans.style.border = "2px solid green"
        setTimeout(function() {
            ans.style.border = "";
            change_question();
        }, 500);
    }
    function lights4(){
        var ans= document.getElementById("ans4")
        ans.style.border = "2px solid green"
        setTimeout(function() {
            ans.style.border = "";
            change_question();
        }, 500);
    }
    function lights5(){
        var ans= document.getElementById("ans5")
        ans.style.border = "2px solid green"
        setTimeout(function() {
            ans.style.border = "";
            change_question();
        }, 500);
    }

    function change_question(){
        switch(numquest){
            case 1:
            document.getElementById("questionid").innerText="¿Cuánto te gusta la escuela?";
            document.getElementById("divleft").style.background= "url('/public/quest-img/img1-2.jpg')" ;
            document.getElementById("divleft").style.backgroundSize = "cover" ;
                break;
            case 2:
                document.getElementById("questionid").innerText="¿Qué tan cómodo/a te sientes hablando con tus profesores sobre tus problemas?";
                break;
            case 3:
            document.getElementById("questionid").innerText="¿Qué tan apoyado/a te sientes por tus compañeros de clase?";
                break;
            case 4:
                document.getElementById("questionid").innerText="¿Qué tan motivado/a estás para aprender?";
                break;
            case 5:
                document.getElementById("questionid").innerText="¿Qué tan satisfecho/a estás con el ambiente escolar?";
                break;
            case 6:
                document.getElementById("questionid").innerText="¿Qué tan satisfecho/a estás con la comunicación entre tus padres/tutores y tus profesores?";
                break;
            case 7:
                document.getElementById("questionid").innerText="¿Qué tan conforme te sientes con tus resultados académicos?";
                break;
            case 8:
                document.getElementById("questionid").innerText="¿Qué tan cómodo/a te sientes compartiendo tus opiniones?";
                break;
            case 9:
                document.getElementById("questionid").innerText="¿Qué tan seguro estás de tu futuro después de la escuela?";
                break;
            case 10:
                document.getElementById("questionid").innerText="¿Qué tan seguido te sientes valorado/a y respetado/a por tus compañeros de clase?";
                break;
            case 11:
                document.getElementById("questionid").innerText="¿Qué tan bien crees que la escuela reconoce y apoya las necesidades individuales de los estudiantes?";
                break;
            case 12:
                document.getElementById("questionid").innerText="¿Qué tan bien crees que la escuela maneja los problemas de disciplina y comportamiento?";
                break;
            case 13:
                document.getElementById("questionid").innerText="¿Qué tan satisfecho/a estás con las oportunidades de desarrollo personal y académico que ofrece la escuela?";
                break;
            case 14:
                document.getElementById("questionid").innerText="¿Qué tan satisfactoria es tu experiencia general en la escuela?";
                break;
            case 15:
                document.getElementById("questionid").innerText="¿Qué tan seguro/a te sientes en tu capacidad para enfrentar los desafíos académicos?";
                break;
            case 16:
                showButton();
        }
    }
    function showButton(){
        document.getElementById("questionid").style.display = "none";
        document.getElementById("ans1").style.display = "none";
        document.getElementById("ans2").style.display = "none";
        document.getElementById("ans3").style.display = "none";
        document.getElementById("ans4").style.display = "none";
        document.getElementById("ans5").style.display = "none";
        document.getElementById("help").style.display = "none";
        document.getElementById("sendQuest").style.display = "flex";
    }
    var good=0;
    var far=0;
    var near=0;
    var gone=0;
    function showMessage(){
        document.getElementById("sendQuest").style.display = "none";
        //Mensaje cuando no hay riesgo
        if(good>far && good>near && good>gone){
            document.getElementById("titleMessage").innerText = "Tus esfuerzos dan frutos"
            document.getElementById("message").innerText = "Felicidades por tu excelente desempeño académico. Tu dedicación y esfuerzo están dando frutos, y eso es algo para estar realmente orgulloso. Sigue aprovechando tu impulso y mantén el enfoque en tus metas. Recuerda que el éxito no es solo un destino, sino un viaje continuo de crecimiento y aprendizaje. Mantén tu curiosidad y tu pasión por el conocimiento, y sigue buscando nuevas formas de desafiarte a ti mismo. Tu determinación y compromiso te llevarán aún más lejos en tu camino hacia el éxito. ¡Sigue brillando y alcanzando nuevas alturas!"
            blue++;
            localStorage.setItem('blue', blue);
        }
        //Mensaje cuando hay poco riesgo
        else if((far>good && far>near && far>gone) || (good==far && good!=0)){
            document.getElementById("titleMessage").innerText = "Vas por un muy buen camino"
            document.getElementById("message").innerText ="Eres un estudiante con un desempeño sólido y constante. Continúa trabajando con determinación y mantén tus objetivos en mente. Reconoce tus logros hasta ahora y sigue esforzándote para alcanzar tus metas. Confía en tus habilidades y en el progreso que has logrado hasta ahora, y sigue adelante con paso firme hacia tus aspiraciones."
            green++;
            localStorage.setItem('green', green);
        }
        //Mensaje cuando sí hay un poco de riesgo
        else if((near>far && near>good && near>gone) || (near==gone && near!=0)){
            document.getElementById("titleMessage").innerText = "Nada debe ser un impedimento para que te superes a ti mismo"
            document.getElementById("message").innerText ="Estás enfrentando algunos desafíos en tu desempeño académico en este momento, pero eso no define tu capacidad ni tu valía como estudiante. Reconoce las áreas en las que puedes mejorar y busca recursos y apoyo para superar estos obstáculos. Recuerda que los momentos difíciles también ofrecen oportunidades de crecimiento y aprendizaje. Mantén una actitud positiva y perseverante, y confía en tu capacidad para superar esta situación. Con esfuerzo y dedicación, puedes mejorar y alcanzar tus metas académicas."
            orange++;
            localStorage.setItem('orange', orange);
        }
        //Mensaje cuando hay mucho riesgo
        else if(gone>far && gone>near && gone>good){
            document.getElementById("titleMessage").innerText = "Caer y levantarse es parte del proceso del éxito"
            document.getElementById("message").innerText ="Entiendo que estás pasando por un momento difícil en tu desempeño académico. Es importante recordar que los contratiempos son parte de la experiencia de aprendizaje y no definen tu valía como persona. En lugar de centrarte en los errores del pasado, concéntrate en el camino hacia la mejora. Identifica las áreas en las que necesitas ayuda y busca el apoyo adecuado, ya sea de tus profesores, tutores o compañeros de clase. Recuerda que cada desafío superado te acerca un paso más a tus objetivos. Mantén la cabeza en alto, mantén una actitud positiva y sigue adelante con determinación. Con esfuerzo y perseverancia, puedes superar estos desafíos y alcanzar el éxito académico."
            red++;
            localStorage.setItem('red', red);
        }
        //Mensaje cuando no hay claridad en sus respuestas
        else if(far==near || gone==good || near==good || far==gone ){
            document.getElementById("titleMessage").innerText = "Tu puedes, nunca dudes de ello"
            document.getElementById("message").innerText = "Es natural tener altibajos en el desempeño académico, y es importante reconocer que estar en una etapa 'regular' es solo una parte del proceso de aprendizaje. Utiliza este momento como una oportunidad para reflexionar sobre tus fortalezas y áreas de mejora. Identifica qué aspectos de tu enfoque de estudio podrían ajustarse para mejorar tu rendimiento. Recuerda que cada obstáculo es una oportunidad para crecer y aprender. Mantén una actitud positiva y persevera en tus esfuerzos. Con paciencia y determinación, puedes superar los desafíos y alcanzar tus metas académicas."
            yellow++;
            localStorage.setItem('yellow', yellow);
        }
        document.getElementById("mesDiv").style.display = "flex";
    }
    document.getElementById("send").addEventListener("click",showMessage)
