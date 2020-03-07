<template>
  <div class="about">
    <div class="relative h-full w-full bg-blue-600 flex items-center justify-center h-screen">
      <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        linesColor="#ffffff"
        :particlesNumber="20"
        shapeType="circle"
        :particleSize="2"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="h-screen w-screen"
      ></vue-particles>
      <div class="z-30 absolute">
        <h1 class="text-6xl font-bold leading-none text-white">
          We're two forces
          <br />that create a
          <br />solution
        </h1>
      </div>
    </div>
    <!-- what we do -->
    <div class="w-full h-full flex flex-col pt-24 px-64">
      <h1 class="text-5xl text-grey-600 font-bold mb-16">Почему Andromedia?</h1>

      <p
        class="mb-24 font-light text-lg leading-relaxed text-gray-800"
      >Наше агентство работает на результат, который можно проверить на деле –
цифры, поэтому мы работаем с каналами рекламы, которые
можем отследить. На сегодняшний день более 73% бишкекчан являются
активными пользователями интернета. Специализация агентства Andromedia - это комплексные digital‑стратегии в Интернете, направленные на решение бизнес-задач клиента. Следующие сервисные отделы агентства работают на высокие результаты рекламных кампаний: Медиа, SMM, Креатив, Стратегия.</p>
      <!-- carousel -->

      <div class="flex flex-wrap items-start justify-between">
        <!-- item1 -->

        <item
          v-for="(item, index) in items"
          :key="index"
          custom="w-1/3 text"
          :title="item.title"
          :desc="item.desc"
          :lis="item.lis"
          item="true"
        ></item>
      </div>
      <!-- team -->
      <h1 class="text-5xl text-gray-800 font-extrabold mb-16">Team</h1>
      <div class="flex flex-wrap justify-between">
        
        <item
        v-for="(item, index) in 8" :key="index"
          custom="w-1/4"
          title="Ruiz"
          desc="CEO / Co-founder"
          team="true"
          
        >
          <img src="@/assets/images/ruiz1.jpg" alt="">

        </item>
      </div>
    </div>
    <!-- Our clients -->
    <div class="w-full h-screen bg-neon_blue flex flex-col py-24 px-32">
      <h1 class="text-5xl text-gray-200 font-bold mb-32">Our clients</h1>

      <div class="flex flex-col">
        <div class="flex flex-wrap justify-between m-8">
          <img src="@/assets/brands/devcit.svg" class=" sm:w-1/4 xl:w-1/5" v-for=" index in 15" :key="index" alt="">
        </div>  
      </div>
    </div>

    <Contact/>
    
  </div>
</template>
<script>
import Contact from '@/components/Contact.vue';

import Item from "@/components/Item.vue";
export default {
  components: {
    Item,
    Contact
  },
  data() {
    return {
      items: [
        {
          title: "Брендинг",
          desc:
            "От полного брендирования и разработки брендбука до дизайна баннеров и коммерческих предложений"
        },
        {
          title: "Разработка сайтов",  
          lis:[
              "Web-дизайн","Создание сайтов","Интернет-магазины","Техническая поддержка","IT-аутсорсинг"
          ]
        },
        {
          title: "digital-маркетинг (SMM, контекстная реклама, SEO-оптимизация)",
          desc:
            "Мы не работаем с наружной рекламой, так как не верим в ее эффективность!"
        },
        {
          title: "построение маркетинговой стратегии",
          desc:
            "Выявление целевой аудитории. Уникальный подход к каждому клиенту. Учет вашей концепции, стратегия и коммуникация бренда в одной линии с вашей миссией. Мы создаем именно ту cтратегию, которая подойдет вашему бренду."
        },
        {
          title: "Webs",
          desc:
            "We collaborate with you to create high quality websites, scalable and efficient for your business"
        },
        {
          title: "Webs",
          desc:
            "We collaborate with you to create high quality websites, scalable and efficient for your business"
        }
      ],
      team: [{ name: "Ruiz", position: "CEO / Co-founder" }]
    };
  }
};
</script>
