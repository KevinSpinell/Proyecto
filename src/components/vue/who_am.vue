<script setup>
    import html2canvas from 'html2canvas';
    import { ref } from 'vue'
    const tasks = ref([]);
    const inputTasks = ref();
    let step = 1;
    function addTask(){
        let aja = inputTasks.value
        if(step<=12 && aja.length > 5){
            tasks.value.push(inputTasks.value)
            inputTasks.value = ''
            if(step>0){
                document.getElementById("meta").placeholder ="Escribe el siguente paso"
            }
            step ++;
        }else if(step<=12){
            console.log("hila")
            document.getElementById("meta").value = ""
            document.getElementById("meta").placeholder ="(Debe ser mayor a 5 carácteres)"
        }else{
            document.getElementById("agg").classList.add("hidden");
            document.getElementById("meta").classList.add("hidden");
        }
    }
    
    function download() {
        const section = document.getElementById('who_im');
        html2canvas(section).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'Ruta_de_Meta.png';
            link.click();
        });
        deleted();
    }
    function enviar(){
        if(step>2){
            document.getElementById("agg").classList.add("hidden");
            document.getElementById("meta").classList.add("hidden");
            document.getElementById("form").classList.add("hidden");

            document.getElementById("text_dow").classList.remove("hidden");
            download();
        }else{
            document.getElementById("meta").placeholder ="¡Antes de enviar deben haber pasos!"
        }
    }
    
</script>
<template class="select-none">
    <div class="bg-[#F2E9D8] text-center mx-auto mt-10  py-8 px-10">
        <div class="flex justify-center flex-col">
            <h1 class="text-center  text-4xl text-[#804422] julius-sans-one-regular">
                ¿Quién Quiero Ser?
            </h1>
            <p class="archivo-narrow text-[#804422] text-center text-xl mt-12 w-1/2 m-auto">
                En esta sección tendrás que escribir lo que quieres ser a futuro, luego escribirás una serie de pasos de cómo quieres llegar a serlo, 
                teniendo en cuenta el paso anterior, esto quiere decir que el paso que escribas va a ser cómo llegar al paso escrito anteriormente.
            </p>
        </div>
        <div id="caja" class="mt-12 mb-16 flex justify-center">
            <span id="text_dow" class="text-[#804422] hidden text-xl font-semibold archivo-narrow">Es momento de que coloques tu hoja de ruta en un lugar donde la puedas visualizar</span>
            <div class="flex justify-center">
                <input id="meta" type="text" placeholder="¡Escribe tu meta!" class=" mr-6 border-2 rounded-lg p-2 border-[#804422] outline-none w-96" v-model="inputTasks">
                <button id="agg" class="a bg-white mr-4 text-[#804422] pl-3 pr-3 pt-0 h-14 rounded-2xl border-2 border-[#804422] ease-in duration-300 hover:scale-110  hover:bg-[#804422] hover:text-white hover:border-[#804422] archivo-narrow" @click="addTask()" >Agregar</button>
                <button id="form" class=" bg-white text-[#804422] w-[100px] pl-3 pr-3 pt-0 h-14 rounded-2xl border-2 border-[#804422] ease-in duration-300 hover:scale-110  hover:bg-[#804422] hover:text-white hover:border-[#804422] archivo-narrow" @click="enviar()" >Enviar</button>
            </div>
        </div>
        <div class="flex justify-center flex-col items-center p-12" id="who_im">
            <div 
            id="pasos"
            class="w-1/3"
            v-for="(task, index) in tasks" :key="index"
            >
                <div 
                    v-if="index>0"
                    class="flex justify-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 512 512">
                        <path fill="none" stroke="#804422" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 244l144-144l144 144M256 120v292"/>
                    </svg>
                </div>
                <div class="min-h-20 bg-white border-2 border-[#804422]  rounded-full flex items-center justify-center text-[#804422] archivo-narrow text-xl">
                    {{task}}
                </div>
            </div>
        </div>
    </div>
</template>
<style>
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
</style>