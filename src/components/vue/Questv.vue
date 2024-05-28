<script setup>
    import {ref, onMounted} from 'vue'

    let count = ref(0);


    const countplus = () => {
        if (count.value<17) {
            count.value++;
        }
    }


    // let quality = ref(["Muy poco","Poco","Más o menos","Un poco","Mucho"])
    const bg_grad = [
        "bg-gradient-to-r from-[#eeab2f] to-[#f2e9d8]",
        "bg-gradient-to-r from-[#ECAD39] to-[#ECDDC0]",
        "bg-gradient-to-r from-[#EAB34D] to-[#E7D3AD]",
        "bg-gradient-to-r from-[#E5BA6A] to-[#E4C894]",
        "bg-gradient-to-r from-[#EAC47F] to-[#E9C37D]",
        "bg-gradient-to-r from-[#E7CA94] to-[#E5B65D]",
        "bg-gradient-to-r from-[#E7CA94] to-[#E5B65D]",
        "bg-gradient-to-r from-[#EED9B2] to-[#E4A939]",
        "bg-gradient-to-r from-[#EFE6D6] to-[#E5A120]",

        "bg-gradient-to-r from-[#EED9B2] to-[#E4A939]",
        "bg-gradient-to-r from-[#E7CA94] to-[#E5B65D]",
        "bg-gradient-to-r from-[#EAC47F] to-[#E9C37D]",
        "bg-gradient-to-r from-[#E5BA6A] to-[#E4C894]",
        "bg-gradient-to-r from-[#EAB34D] to-[#E7D3AD]",
        "bg-gradient-to-r from-[#EAB34D] to-[#E7D3AD]",
        "bg-gradient-to-r from-[#ECAD39] to-[#ECDDC0]",
        "bg-gradient-to-r from-[#eeab2f] to-[#f2e9d8]",

    ]
    const gradientesArray = [
  "bg-[#F2E9D8]",
  "bg-[#F1E5CD]",
  "bg-[#F0E1C2]",
  "bg-[#EFDDB7]",
  "bg-[#EED9AC]",
  "bg-[#EDD5A1]",
  "bg-[#ECD196]",
  "bg-[#EBCC8B]",
  "bg-[#EAC880]",
  "bg-[#E9C475]",
  "bg-[#E8C06A]",
  "bg-[#E7BC5F]",
  "bg-[#E6B754]",
  "bg-[#E5B349]",
  "bg-[#E4AF3E]",
  "bg-[#E3AA33]",
  "bg-[#EEAB2F]"
]


   
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Kanit:wght@900&family=Poppins:ital,wght@0,400;0,500;0,700;0,800;1,600&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&display=swap');
	
	.julius-sans-one-regular {
		font-family: "Julius Sans One", sans-serif;
		font-weight: 400;
        font-style: normal;
	}
	.archivo-narrow {
		font-family: "Archivo Narrow", sans-serif;
		font-optical-sizing: auto;
		font-weight: 600;
		font-style: normal;
	}
    .answer-div{
        border: 2px solid rgb(187, 186, 186);
        padding: 5px;
        border-radius: 100%;
        padding: 12px 20px;
    }
    .answer-div:hover{
        cursor: pointer;
    }
    
</style>
<template>
        <main class="h-lvh transition-all duration-200" :class="gradientesArray[count]">
            <div class="flex justify-center items-center pt-40 select-none">
                <div class="bg-white w-[1000px] h-[600px] rounded-3xl shadow-2xl static">
                    <div class="flex flex-col items-center justify-center h-full">
                        <div id="back" class="absolute right-1/4 top-[20%] archivo-narrow px-3 py-2 bg-[#804422] rounded-2xl text-white hover:cursor-pointer hover:bg-white hover:text-[#804422] border hover:border-[#804422] hover:scale-110 duration-150" onclick="window.location.href = 'index.html'">
                            <p>
                                Regresar
                            </p>
                        </div>
                        <div id="counter" class="absolute right-[50%] top-[21%] text-lg archivo-narrow rounded-full py-2 px-2 border-[#804422] border text-[#804422]" >
                            <p>
                                {{ count }}/16
                            </p>
                        </div>
                        <!-- <div id="help" class="absolute left-1/4 top-[20%] px-5 py-2 rounded-2xl border-2 border-[#804422] archivo-narrow text-base ">
                            <p>
                                5: Mucho | 4: Un poco | 3: Más o menos | 2: Poco | 1: Muy Poco
                            </p>
                        </div> -->
                        <div class="w-3/5 h-[150px]  text-center flex items-center archivo-narrow text-3xl justify-center" id="questionid"></div>
                        <div class="h-[80px]"></div>
                        <div class="flex justify-around w-3/4 archivo-narrow" id="anscont">
                            <div class="flex flex-col items-center gap-2">
                                <div class="answer-div hover:scale-125 hover:bg-[#804422] duration-150 ease-in hover:text-white font-semibold" id="ans1" @click="countplus" >1</div>
                                <div>Nada</div>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <div class="answer-div hover:scale-125 hover:bg-[#804422] duration-150 ease-in hover:text-white font-semibold" id="ans2" @click="countplus" >2</div>
                                <div>Muy poco</div>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <div class="answer-div hover:scale-125 hover:bg-[#804422] duration-150 ease-in hover:text-white font-semibold" id="ans3" @click="countplus" >3</div>
                                <div>Algo</div>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <div class="answer-div hover:scale-125 hover:bg-[#804422] duration-150 ease-in hover:text-white font-semibold" id="ans4" @click="countplus" >4</div>
                                <div>Bastante</div>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <div class="answer-div hover:scale-125 hover:bg-[#804422] duration-150 ease-in hover:text-white font-semibold" id="ans5" @click="countplus" >5</div>
                                <div>Mucho</div>
                            </div>
                        </div>
                        <div id="sendQuest" class=" hidden flex-col items-center">
                            <div class="text-3xl flex flex-col items-center  archivo-narrow">
                                <h3>Nos alegra que hayas respondido todas las preguntas</h3>
                                <div class="h-[10px]"></div>
                                <h3>Es hora de enviar las respuestas</h3>
                            </div>
                            <div class="h-[60px]"></div>
                            <div class="inline-block archivo-narrow">
                                <button id="send" class="bg-[#804422] text-white py-2 px-3 rounded-3xl text-xl ease-in duration-300 hover:scale-110 hover:bg-white hover:text-[#804422] border hover:border-[#804422]">Enviar respuestas</button>
                            </div>
                        </div>
                        <div id="mesDiv" class=" flex-col items-center px-32 leading-10">
                            <div class="text-center">
                                <h3 id="titleMessage" class="text-3xl julius-sans-one-regular"></h3>
                                <div class="h-[30px]"></div>
                                <div id="message" class="archivo-narrow text-lg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>
