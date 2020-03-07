<template>
  <div class="w-full">
    <!-- header -->
    <div class="h-screen bg-gray-700 px-8p pt-20">
      <div class="flex mx-12 h-auto items-center">
        <div class="flex w-1/2 flex-col justify-center px-2">
          <h1 class="text-5xl text-white font-black">SMM</h1>
          <h3 class="text-2xl text-white font-black mb-3">Social media marketing (Маркетинг в социальных сетях)</h3>
          <p
            class="font-light text-white leading-normal text-lg mb-16"
          ></p>
          <!-- <ul class="flex list-none flex-col flex-wrap max-h-28">
            <li class="header-li" v-for="(x, index) in features" :key="index">{{x}}</li>
          </ul> -->
          <!-- <a href="#" class="underline font-light text-white pt-10">Visit</a> -->
        </div>
        <div class="flex w-1/2 py-4">
          <img src="@/assets/images/b1.png" class="w-full" alt />
        </div>
      </div>
    </div>
    <!-- content -->
    <info>
      <template v-slot:title>Myata Lounge Bar</template>
      <template
        v-slot:desc
      > Лаундж-бар «Мята на Достык»<br>
      Локация: Республика Казахстан, г. Алматы, проспект Достык, 42 <br><br>
      Первостепенная задача заказчика была выделить страницу в Instagram лаундж-бара «Myata» на проспекте Достык среди других франшиз лаундж-баров «Myata», так как в городе Алматы количество лаундж-баров «Myata» 8 единиц. Мы разработали уникальный дизайн при ограничении и привязке логотипа к фирменному стилю филиальной сети. <br>
    <br>  <b class="font-bold mt-4">Задачи:</b><br>
      - Разработка контента для Instagram <br>
- Привлечение аудитории<br>
- Таргетированная реклама в Instagram <br></template>
      <template v-slot:image>
        <img src="@/assets/images/info1.jpg" alt />
      </template>
    </info>
      <info flipped>
      <template v-slot:title>Центр Развития Информационных Технологий «DevCIT»</template>
      <template
        v-slot:desc
      > Лаундж-бар «Мята на Достык»<br>
      Локация: Кыргызская Республика, г. Бишкек, ул. Токомбаева 7/6 (АУЦА)<br><br>
      Центр Развития Информационных Технологий «DevCIT» - это учебный центр при Американском Университете в Центральной Азии, предлагающий обучение для специалистов в различных сегментах IT индустрии. <br>
    <br>  <b class="font-bold mt-4">Задачи:</b><br>
      - Разработка контента для социальных сетей<br>
- Таргетированная реклама Facebook и Instagram<br>
- Генерация лидов и посторение воронки продаж<br></template>
      <template v-slot:image>
        <img src="@/assets/images/info1.jpg" alt />
      </template>
    </info>
      <info>
      <template v-slot:title>Harat`s Pub</template>
      <template
        v-slot:desc
      > Знаменитая российская франшиза ирландских пабов<br>
      Локация: Кыргызская Республика, г. Бишкек, проспект Чуй, 187 <br><br>
      Упор данного кейса был сделан на поднятие активности и вовлечение имеющейся аудитории в Instagram, так как у существуещего аккаунта были низкие показатели статистики. Нашей командой были разработаны различные офлайн и онлайн конкурсы и акции.   <br>
    <br>  <b class="font-bold mt-4">Задачи:</b><br>
      - Разработка контента для Instagram<br>
- Поднятие вовлечения существующей аудитории<br>
- Таргетированная реклама в Instagram<br></template>
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
        "Product Design",
        
      ]
    };
  },
  components: {
    Info
  }
};
</script>