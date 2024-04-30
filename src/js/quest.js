    
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
                document.getElementById("questionid").innerText="Quest 2";
                break;
            case 2:
                document.getElementById("questionid").innerText="Quest 3";
                break;
            case 3:
                document.getElementById("questionid").innerText="Quest 4";
                break;
            case 4:
                document.getElementById("questionid").innerText="Quest 5";
                break;
            case 5:
                document.getElementById("questionid").innerText="Quest 6";
                break;
            case 6:
                document.getElementById("questionid").innerText="Quest 7";
                break;
            case 7:
                document.getElementById("questionid").innerText="Quest 8";
                break;
            case 8:
                document.getElementById("questionid").innerText="Quest 9";
                break;
            case 9:
                document.getElementById("questionid").innerText="Quest 10";
                break;
            case 10:
                document.getElementById("questionid").innerText="Quest 11";
                break;
            case 11:
                document.getElementById("questionid").innerText="Quest 12";
                break;
            case 12:
                document.getElementById("questionid").innerText="Quest 13";
                break;
            case 13:
                document.getElementById("questionid").innerText="Quest 14";
                break;
            case 14:
                document.getElementById("questionid").innerText="Quest 15";
                break;
            case 15:
                document.getElementById("questionid").innerText="Quest 16";
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