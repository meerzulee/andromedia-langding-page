<template>
  <div>
    <swiper :options="swiperOption" class=" w-full " ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(x, index) in data" :key="index" >
         <Project :img="x.img"  :title="x.title" :desc="x.desc" :g-color1="x.gColor1" :g-color2="x.gColor2" :link="x.link" />
      </swiper-slide>

      <!-- Optional controls -->
    </swiper>
    <div class="flex pt-12">
      <div class="mr-8 cursor-pointer" slot="btn-prev">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 80 12"
          style="enable-background:new 0 0 80 12;"
          xml:space="preserve"
          width="80"
          height="24"
          class="btn-prev"
          slot="button-prev"
        >
        <path d="M74.9,3.1H3.8l2.6-1.6l0.1-0.1c0.3-0.3,0.4-0.7,0.2-1L6.6,0.3C6.3,0,5.9-0.1,5.5,0.1l-5,3.2C0.2,3.5,0.1,3.6,0.1,3.8L0,4
	v0.1c0,0.3,0.2,0.5,0.3,0.6L5.6,8H6c0.1,0,0.4,0,0.6-0.2l0.1-0.1c0.2-0.4,0.1-0.9-0.2-1.1L3.7,4.9h71.2V3.1z"/>
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          width="80"
          height="24"
          x="0px"
          y="0px"
          viewBox="0 0 80 12"
          style="enable-background:new 0 0 80 12;"
          class="cursor-pointer btn-next"
          slot="button-next"
        >
          <path d="M0,4.9h71.1l-2.6,1.6l-0.1,0.1c-0.3,0.3-0.4,0.7-0.2,1l0.1,0.1C68.6,8,69,8.1,69.4,7.9l5-3.2c0.3-0.1,0.4-0.3,0.4-0.5
	L74.9,4V3.9c0-0.3-0.2-0.5-0.3-0.6L69.3,0h-0.4c-0.1,0-0.4,0-0.6,0.2l-0.1,0.1c-0.2,0.4-0.1,0.9,0.2,1.1l2.6,1.7H0V4.9z"/>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/css/swiper.min.css";
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from "vue-awesome-swiper";
import Project from "@/components/Project.vue";

export default {
  components: {
    swiper,
    swiperSlide,
    Project
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2.25,
        spaceBetween: 30,
        centeredSlides: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".btn-next",
          prevEl: ".btn-prev"
        },
        
        breakpoints: {
          // when window width is >= 320px
          // 320: {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
            
          // },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1.25,
            spaceBetween: 10,
          },
        
        }
      },
      
     

    };
  },   
  props: ['data']
};
</script>
<style scoped>
.cardHover{
  display: none;
}
</style>