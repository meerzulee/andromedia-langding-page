<template>
  <div class="w-full">
    <!-- header -->
    <div class="h-screen bg-green-700 px-8p pt-20">
      <div class="flex mx-12 h-auto items-center">
        <div class="flex w-1/2 flex-col justify-center px-2">
          <h1 class="text-5xl text-white font-black">Dialecticon</h1>
          <h3 class="text-2xl text-white font-black mb-3">консалтинговая компания</h3>
          <p
            class="font-light text-white leading-normal text-lg mb-16"
          ><b class="font-bold">Dialecticon</b> помогает другим брендам и компаниям соответствовать эре зеленой экономики, и адаптироваться к перемене климата.</p>
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
      <template v-slot:title>Проект</template>
      <template
        v-slot:desc
      > Основываясь на идеи отпечатка пальца, были созданы логотип и фирменный стиль для консалтинговой компании Dialecticon.</template>
      <template v-slot:image>
        <img src="@/assets/images/info1.jpg" alt />
      </template>
    </info>
    <info flipped>
      <span slot="title">Обзор</span>
      <template
        v-slot:desc
      >Доверия клиентов – одна из основ их компании, которая послужила началом идеи отпечатка пальца. Отпечаток пальца — это достаточно уникальный знак, ведь как мы знаем, не существует два одинаковых отпечатка. Этим мы хотели показать, что каждый их клиент является уникальным, и решения, которые принимаются Dialecticon для каждого своего клиента также уникальные.  </template>
      <template v-slot:image>
        <img src="@/assets/images/info2.jpg" alt />
      </template>
    </info>
    <info>
      <template v-slot:title>Основа иконки</template>
      <template
        v-slot:desc
      >буква “D” в форме отпечатка пальца. Разработка иконки была своего рода испытанием, так как отпечаток состоит из множества линий, и задача состояла в том, чтобы сделать иконку как можно проще. После, она была использована в качестве узора для фирменного стиля компании, которая в дальнейшем использовалась в документах и всех распечатках. Чтобы выразить рост, окружающую среду и климат, также был выбран зеленый цвет. </template>
      <template v-slot:image>
        <img src="@/assets/images/info1.jpg" alt />
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
        
        
      ]
    };
  },
  components: {
    Info
  }
};
</script>