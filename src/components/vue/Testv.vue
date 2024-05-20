<script setup>
    import {ref, onMounted} from 'vue'

    let count = ref(0);


    const countplus = () => {
        if (count.value<9) {
            count.value++;
        }
    }

    const fondos = [
    "bg-[url('/public/test_visual/Lamina1.jpg')]","bg-[url('/public/test_visual/Lamina2.jpg')]","bg-[url('/public/test_visual/Lamina3.jpg')]",
    "bg-[url('/public/test_visual/Lamina4.jpg')]","bg-[url('/public/test_visual/Lamina5.jpg')]","bg-[url('/public/test_visual/Lamina6.jpg')]",
    "bg-[url('/public/test_visual/Lamina7.jpg')]","bg-[url('/public/test_visual/Lamina8.jpg')]","bg-[url('/public/test_visual/Lamina9.jpg')]",
    "bg-[url('/public/test_visual/Lamina10.jpg')]"
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
    <main class="flex justify-center items-center pt-40 select-none">
        <div class="bg-white w-[1000px] h-[600px] rounded-3xl shadow-2xl static">
            <div class="flex flex-col items-center justify-center h-full ">
                <div id="back" class="absolute right-1/4 top-[20%] px-3 py-2 bg-[#804422] rounded-2xl text-white hover:cursor-pointer hover:bg-white hover:text-[#804422] border hover:border-[#804422] hover:scale-110 duration-150" onclick="window.location.href = 'index.html'">
                    <p>
                        Regresar
                    </p>
                </div>
                <div class=" h-[300px] w-[450px] bg-contain bg-no-repeat transition-all duration-300 bg-center text-center flex items-center archivo-narrow text-3xl justify-center" :class="fondos[count]">
                </div>
                <div class="h-8"></div>
                <div class="text-2xl archivo-narrow">
                    <p>¿Qué ves en la imagen?</p>
                </div>
                <div class="h-4"></div>
                <div class="flex justify-around w-3/4 archivo-narrow">
                    <div class="rounded-2xl border-2 border-[#804422] w-3/5 h-[40px] flex justify-center py-1 px-2">
                        <input id="meta" type="text" placeholder="Escribe lo que ves" maxlength="100" class=" w-full outline-none" >
                    </div>
                </div>
                <div class="inline-block mt-[20px]">
                    <button id="send" class="bg-[#804422] text-white py-2 px-3 rounded-3xl text-base ease-in duration-200 hover:scale-110 hover:bg-white hover:text-[#804422] border hover:border-[#804422] " @click="countplus" >Enviar respuesta</button>
                </div>
            </div>
        </div>

    </main>
</template>