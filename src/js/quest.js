    
    var gone=0;
    var good=0;
    var near=0;
    var far=0;
    var numquest=0;
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
        }, 1000);
    }
    function lights2(){
        var ans= document.getElementById("ans2")
        ans.style.border = "2px solid green"
        setTimeout(function() {
            ans.style.border = "";
            change_question();
        }, 1000);
    }
    function lights3(){
        var ans= document.getElementById("ans3")
        ans.style.border = "2px solid green"
        setTimeout(function() {
            ans.style.border = "";
            change_question();
        }, 1000);
    }
    function lights4(){
        var ans= document.getElementById("ans4")
        ans.style.border = "2px solid green"
        setTimeout(function() {
            ans.style.border = "";
            change_question();
        }, 1000);
    }
    function lights5(){
        var ans= document.getElementById("ans5")
        ans.style.border = "2px solid green"
        setTimeout(function() {
            ans.style.border = "";
            change_question();
        }, 1000);
    }

    function change_question(){
        switch(numquest){
            case 1:
            document.getElementById("questionid").innerText="¿Cuánto te gusta la escuela?";
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
                document.getElementById("questionid").innerText="¿Qué tan seguido te sientes presionado/a por las expectativas académicas?";
                break;
            case 8:
                document.getElementById("questionid").innerText="¿Qué tan cómodo/a te sientes compartiendo tus opiniones?";
                break;
            case 9:
                document.getElementById("questionid").innerText="¿Qué tan preocupado/a estás por tu futuro después de la escuela?";
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
        document.getElementById("sendQuest").style.display = "flex";
    }