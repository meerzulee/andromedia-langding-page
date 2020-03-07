<template>
  <div class="projects">
    <div class="w-full flex flex-col px-8p py-20 mx-auto max-w-1440">
      <div class="mt-24 w-full h-full flex flex-wrap">
        <div class="flex flex-col w-full">
          <h1 class="text-5xl font-extrabold text-gray-900">Портфолио</h1>
          <h3
            class="text-2xl font-light pb-16"
          >Discover our projects, digital experiencies of easy use, agile and reliable</h3>
        </div>

        <div class="flex flex-col w-1/2 pr-3 py-6">
          <!-- image -->
          <div class="flex justify-center items-center bg-gray-900 py-12 mb-2">
            <img src="@/assets/cards/1.png" alt />
          </div>
          <!-- text -->
          <div>
            <h3 class="font-semibold text-lg mb-2">Shapes of life</h3>
            <p class="font-light">Roca's personality test</p>
          </div>
        </div>

        <div class="flex flex-col w-1/2 pl-3 py-6">
          <!-- image -->
          <div class="flex justify-center items-center bg-green-700 mb-2">
            <img src="@/assets/cards/2.png" alt />
          </div>
          <!-- text -->
          <div>
            <h3 class="font-semibold text-lg mb-2">Shapes of life</h3>
            <p class="font-light">Roca's personality test</p>
          </div>
        </div>

        <div class="flex flex-col w-1/2 pr-3 py-6">
          <!-- image -->
          <div class="flex justify-center items-center bg-indigo-200 mb-2">
            <img src="@/assets/cards/3.png" alt />
          </div>
          <!-- text -->
          <div>
            <h3 class="font-semibold text-lg mb-2">Shapes of life</h3>
            <p class="font-light">Roca's personality test</p>
          </div>
        </div>

        <div class="flex flex-col w-1/2 pl-3 -mt-24 py-6">
          <!-- image -->
          <div class="flex justify-center items-center bg-gray-700 py-12 mb-2">
            <img src="@/assets/cards/4.png" alt />
          </div>
          <!-- text -->
          <div>
            <h3 class="font-semibold text-lg mb-2">Shapes of life</h3>
            <p class="font-light">Roca's personality test</p>
          </div>
        </div>

        <div class="flex flex-col w-1/2 pr-3 py-6">
          <!-- image -->
          <div class="flex justify-center items-center bg-gray-700 py-12 mb-2">
            <img src="@/assets/cards/1.png" alt />
          </div>
          <!-- text -->
          <div>
            <h3 class="font-semibold text-lg mb-2">Shapes of life</h3>
            <p class="font-light">Roca's personality test</p>
          </div>
        </div>

        <div class="flex flex-col w-1/2 pl-3 py-6">
          <!-- image -->
          <div class="flex justify-center items-center bg-green-700 mb-2">
            <img src="@/assets/cards/2.png" alt />
          </div>
          <!-- text -->
          <div>
            <h3 class="font-semibold text-lg mb-2">Shapes of life</h3>
            <p class="font-light">Roca's personality test</p>
          </div>
        </div>

        <div class="flex flex-col w-1/2 pr-3 py-6">
          <!-- image -->
          <div class="flex justify-center items-center bg-indigo-200 mb-2">
            <img src="@/assets/cards/3.png" alt />
          </div>
          <!-- text -->
          <div>
            <h3 class="font-semibold text-lg mb-2">Shapes of life</h3>
            <p class="font-light">Roca's personality test</p>
          </div>
        </div>

        <div class="flex flex-col w-1/2 pl-3 -mt-24 py-6">
          <!-- image -->
          <div class="flex justify-center items-center bg-gray-700 py-12 mb-2">
            <img src="@/assets/cards/4.png" alt />
          </div>
          <!-- text -->
          <div>
            <h3 class="font-semibold text-lg mb-2">Shapes of life</h3>
            <p class="font-light">Roca's personality test</p>
          </div>
        </div>
      </div>
    </div>
    <Contact/>
  </div>
</template>
<style >

</style>
<script>
import Contact from '@/components/Contact.vue';

export default{
  components:{
    Contact
  },
  data() {
    return {
       projects: [
        {
          img: "assets/images/tijo/cover.png",
          title: "Tijo Jewellery",
          desc: "Брендинг",
          gColor1: "#f4c9c8",
          gColor2: "#8c68ac",
          link: "/tijo"
        },
        {
          img: "assets/images/dialecticon/cover.png",
          title: "Dialecticon",
          desc: "Фирменный стиль",
          gColor1: "#62de71",
          gColor2: "#00a44f",
          link: "/dialecticon"
        },
        {
          img: "assets/images/soros/cover.png",
          title: "Soros Foundation Kyrgyzstan",
          desc: "Инфографика",
          gColor1: "#AA076B",
          gColor2: "#61045F",
          link: "/soros"
        },
        
      ]
    }
  },
}
// import Project from "@/components/Project.vue";
// export default {
//   components: {
//     Project
//   },
//   data() {
//     return {
//       projects: [
//         {
//           img: "./assets/cards/1.png",
//           title: "Shapes of life",
//           desc: "Roca's personality test"
//         },
//         {
//           img: "@/assets/cards/2.png",
//           title: "Olyseum",
//           desc: "Athletes' social network"
//         },
//         {
//           img: "@/assets/cards/3.png",
//           title: "Baxi Wica",
//           desc: "The calculation tool for professionals"
//         },
//         {
//           img: "@/assets/cards/4.png",
//           title: "Roca Cocinas",
//           desc: "Site for Roca's new market"
//         }
//       ]
//     };
//   }
// };
</script>