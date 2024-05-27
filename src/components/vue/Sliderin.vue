<template>
    <div class="slider-container overflow-hidden relative select-none">
        <div
        class="slider flex transition-transform duration-700 ease-in-out "
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
            <div class="slide flex-shrink-0 w-full h-full mt-[75px] mb-[150px] ">
                <div class=" w-[1400px] border-[6px] border-white  ml-[250px] my-[100px] flex  items-center text-center  justify-center bg-[url('/public/sliderimg.jpg')]"  >
                    <div class="bg-[#3f3b3bad] p-12 flex justify-center items-center gap-[80px]">
                      <div class="julius-sans-one-regular text-white text-5xl mr-[40px] ">
                        Deserción en estudiantes
                      </div>
                      <div class="archivo-narrow text-2xl h-auto w-1/3">
                          <p class="leading-9 text-slate-200 ">La deserción escolar es el abandono prematuro del sistema educativo por parte de estudiantes antes de completar la etapa de educación obligatoria o de alcanzar el nivel educativo que estaban cursando. Este fenómeno puede ocurrir en cualquier nivel de la educación, desde la primaria hasta la educación secundaria o superior. La deserción escolar es un problema significativo que puede tener consecuencias a largo plazo tanto para los individuos como para la sociedad en general.</p>
                      </div>
                    </div>
                </div>
            </div>

            <div class="slide flex-shrink-0 w-full h-[744px] mt-[75px] mb-[150px] items-center flex  ">
                <div class=" w-[1400px] ml-[250px] my-[100px] flex flex-col items-center text-center justify-center"  >
                  <div class="julius-sans-one-regular pt-[40px] pb-[100px]  text-5xl">
                      <p>Objetivo de desarrollo sostenible</p>
                  </div>
                  <div class="flex items-center text-center gap-[30px] justify-center ">
                      <div class="julius-sans-one-regular text-5xl mr-[150px] hover:scale-110 duration-200 ease-in">
                          <img src="/public/objetivo.jpg" width="250px" alt="">
                      </div>
                      <div class="archivo-narrow text-2xl h-auto hover:scale-110 duration-200 ease-in">
                          <img src="/public/objetivo2.png" width="700px" alt="">
                      </div>
                  </div>
                    
                </div>
            </div>

            <div class="slide flex-shrink-0 w-full h-[744px] mt-[75px] mb-[150px] items-center flex ">
                <div class=" w-[1400px] ml-[250px] my-[100px] flex flex-col items-center text-center justify-center gap-[20px] archivo-narrow text-4xl leading-10"  >
                  <p>
                    En esta sección, nos gustaría compartir contigo cómo nuestro proyecto está haciendo una diferencia significativa en el panorama educativo. Estamos comprometidos con la promoción de la educación de calidad y la reducción de la deserción escolar, contribuyendo así al logro del Objetivo de Desarrollo Sostenible número 4: "Educación de Calidad"
                  </p>
                  <p>A través de nuestra plataforma, ofrecemos herramientas innovadoras y recursos diseñados para identificar los factores que pueden llevar a la deserción escolar y para ayudar a prevenirlos. Creemos firmemente que cada estudiante merece la oportunidad de recibir una educación de calidad y completar su formación académica con éxito.</p>
                    
                </div>
                
            </div>
        </div>
        <button @click="prevSlide" class="absolute left-[50px] top-1/2 transform -translate-y-1/2 bg-white font-bold py-4 px-4 rounded-full text-xl shadow-xl z-10 ease-in duration-200 hover:scale-110 opacity-70 hover:opacity-100 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z" />
            </svg>
        </button>
        
        <button @click="nextSlide" class="absolute right-[50px] top-1/2 transform -translate-y-1/2 bg-white  font-bold py-4 px-4 rounded-full text-xl shadow-xl z-10 ease-in duration-200 hover:scale-110 opacity-70 hover:opacity-100 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" />
            </svg>
        </button>
    </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  import { defineComponent } from 'vue';

    defineComponent({
    name: 'RiArrowLeftSLine',
    });
    defineComponent({
    name: 'RiArrowRightSLine',
    });
  const currentIndex = ref(0);
  
  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  };
  
  const nextSlide = () => {
    if (currentIndex.value < 2) { // Assuming we have 3 slides
      currentIndex.value++;
    }
  };
  </script>
  
  <style scoped>
  	@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Kanit:wght@900&family=Poppins:ital,wght@0,400;0,500;0,700;0,800;1,600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&display=swap');

    .slider-container {
      width: 100%;
    }
    
    .slider {
      display: flex;
      width: 300%; /* 100% for each of the 3 slides */
    }
    
    .slide {
      width: 100%;
    }
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