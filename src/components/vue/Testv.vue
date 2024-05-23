<script setup>
    import {ref, onMounted} from 'vue'

    let count = ref(0);



    const countplus = () => {
        let valor = document.getElementById("see").value.length;
        let content = document.getElementById("see").value
        localStorage.setItem('validacion', valor);
        localStorage.setItem('contenido',content);

        if (valor>3 && count.value<9) {
            count.value++;
            document.getElementById("see").value = ""
            document.getElementById("see").placeholder = "Escribe lo que ves"
            console.log("if:");
            console.log("count: " + count.value);
            console.log(valor);
        }
        else {
            document.getElementById("see").placeholder = "Escribe algo más largo"
        }
    }

    const fondos = [
    "bg-[url('/public/test_visual/Lamina1.jpg')]","bg-[url('/public/test_visual/Lamina2.jpg')]","bg-[url('/public/test_visual/Lamina3.jpg')]",
    "bg-[url('/public/test_visual/Lamina4.jpg')]","bg-[url('/public/test_visual/Lamina5.jpg')]","bg-[url('/public/test_visual/Lamina6.jpg')]",
    "bg-[url('/public/test_visual/Lamina7.jpg')]","bg-[url('/public/test_visual/Lamina8.jpg')]","bg-[url('/public/test_visual/Lamina9.jpg')]",
    "bg-[url('/public/test_visual/Lamina10.jpg')]"
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
		font-weight: <weight>;
		font-style: normal;
	}
    .answer-div{
        border: 1px solid rgb(187, 186, 186);
        padding: 5px;
        border-radius: 100%;
        padding: 12px 20px;
    }
    .answer-div:hover{
        cursor: pointer;
    }
</style>

<template>
    <main class="h-lvh transition-all duration-700" :class="gradientesArray[count]">
        <div class="flex justify-center items-center pt-40 select-none">
            <div class="bg-white w-[1000px] h-[600px] rounded-3xl shadow-2xl static">
                <div class="flex flex-col items-center justify-center h-full ">
                    <div id="back" class="absolute right-1/4 top-[20%] px-3 py-2 bg-[#804422] rounded-2xl text-white hover:cursor-pointer hover:bg-white hover:text-[#804422] border hover:border-[#804422] hover:scale-110 duration-150" onclick="window.location.href = 'index.html'">
                        <p>
                            Regresar
                        </p>
                    </div>
                    <div id="lamdiv" class="hidden flex-col items-center justify-center h-full w-full">
                        
                        <div class=" h-[300px] w-[450px] bg-contain bg-no-repeat transition-all duration-300 bg-center text-center flex items-center archivo-narrow text-3xl justify-center" :class="fondos[count]">
                        </div>
                        <div class="h-8"></div>
                        <div class="text-2xl archivo-narrow">
                            <p>¿Qué ves en la imagen?</p>
                        </div>
                        <div class="h-4"></div>
                        <div class="flex justify-around w-3/4 archivo-narrow">
                            <div class="rounded-2xl border-2 border-[#804422] w-3/5 h-[40px] flex justify-center py-1 px-2">
                                <input id="see" type="text" placeholder="Escribe lo que ves" maxlength="32" autocomplete="off" class=" w-full outline-none" >
                            </div>
                        </div>
                        <div class="inline-block mt-[20px]">
                            <button id="send" class="bg-[#804422] archivo-narrow text-white py-2 px-3 rounded-3xl text-base ease-in duration-200 hover:scale-110 hover:bg-white hover:text-[#804422] border hover:border-[#804422] " @click="countplus" >Enviar respuesta</button>
                        </div>
                    </div>

                    <div id="welcome" class="flex flex-col items-center archivo-narrow text-center  px-[150px] ">
                        <div class="text-3xl flex flex-col items-center leading-10">
                            <h3>El siguiente test se conoce como "La prueba de Rorschach" y consiste en describir qué ves en cada lámina o imagen para poder analizar tus respuestas</h3>
                        </div>
                        <div class="h-[60px]"></div>
                        <div class="inline-block">
                            <button id="continue" class="bg-[#804422] text-white py-2 px-5 rounded-3xl text-xl ease-in duration-300 hover:scale-110 hover:bg-white hover:text-[#804422] border hover:border-[#804422]">Continuar</button>
                        </div>
                    </div>
                    <div id="finish" class="hidden flex-col items-center archivo-narrow text-center  px-[150px] ">
                        <div class="text-3xl flex flex-col items-center leading-10">
                            <h3>Guarda el siguiente PDF con la información de tus respuestas para que tu psicólogo pueda darte un diagnóstico personal en base a estas</h3>
                        </div>
                        <div class="h-[60px]"></div>
                        <div class="inline-block">
                            <button class="bg-[#804422] text-white py-2 px-5 rounded-3xl text-xl ease-in duration-300 hover:scale-110 hover:bg-white hover:text-[#804422] border hover:border-[#804422]" onclick="window.location.href = 'index.html'">Volver a la página principal</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>

</template>