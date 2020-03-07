<template>
  <div class="w-full">
    <!-- header -->
    <div class="h-screen bg-purple-700 px-8p pt-20">
      <div class="flex mx-12 h-auto items-center">
        <div class="flex w-1/2 flex-col justify-center px-2">
          <h1 class="text-5xl text-white font-black">FANAT.KG</h1>
          <h3 class="text-2xl text-white font-black mb-3">Сеть киберспортивных клубов </h3>
          <p
            class="font-light text-white leading-normal text-lg mb-16"
          ><b class="font-bold">Fanat.KG </b> это бренд, включающий в себя: Сеть PC, PS клубов, спортивный магазин. Также Fanat.KG является официальным представителем киберспорта в Кыргызской Республике и организовывает турниры для PC и PS игр.  </p>
          <ul class="flex list-none flex-col flex-wrap max-h-28">
            <li class="header-li" v-for="(x, index) in features" :key="index">{{x}}</li>
          </ul>
          <a href="#" class="underline font-light text-white pt-10">Visit</a>
        </div>
        <div class="flex w-1/2 py-4">
          <img src="@/assets/images/b1.png" class="w-full" alt />
        </div>
      </div>
    </div>
    <!-- content -->
    <info>
      <template v-slot:title>Цель проекта</template>
      <template
        v-slot:desc
      > создание дизайна мобильного приложения для геймеров с целью упрощения регистрации в турнирах киберспортивной сети «Fanat.kg».</template>
      <template v-slot:image>
        <img src="@/assets/images/info1.jpg" alt />
      </template>
    </info>
    <info flipped>
      <span slot="title">Задачи приложения:</span>
      <template
        v-slot:desc
      >- регистрация на турниры  <br>
- просмотр статистики команды <br>
- просмотр персональной статистики игрока<br>
- просмотр новостей <br> </template>
      <template v-slot:image>
        <img src="@/assets/images/info2.jpg" alt />
      </template>
    </info>
  
  </div>
</template>
<script>
import Info from "@/components/Info.vue";
export default {
  data() {
    return {
      features: [
        "Branding",
        "UX/UI",
        "Product Design",
        
      ]
    };
  },
  components: {
    Info
  }
};
</script>