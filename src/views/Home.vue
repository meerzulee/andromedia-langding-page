<template>
  <div class="home">
    <div
      class="relative header-video h-full w-full bg-black flex items-center justify-center h-screen"
    >
      <div class="absolute inset-0 header-video z-negative lg:opacity-100 opacity-100">
        <video
          src="@/assets/video/agency.mp4"
          autoplay
          muted
          loop
          
          playsinline
          class="object-cover opacity-25  w-full h-full"
        ></video>
      </div>
      <div class="z-30 absolute">
        <div class="flex">
          <div
            class="flex flex-col justify-center h-screen items-start xs:px-8 sm:px-10 md:px-16 xl:px-32"
          >
            <p
              class="text-paris_daisy tracking-wider font-medium xs:text-2xl sm:text-3xl xl:text-5xl lg:text-4xl md:text-3xl phone:mt-0  md:-mt-10 mt-16"
            >{{ $t('home.header') }}</p>
          </div>
        </div>
      </div>

      <ScrollIcon
        v-scroll-to="{el: '#portfolio',
         duration: 1100,
         easing: 'ease-in-out'}"
      />
    </div>

    <div id="portfolio" class="home-section h-auto flex flex-col">
      <h1 class="xs:mb-6 lg:mb-16">{{ $t('links.linkPortfolio') }}</h1>
      
      <!-- <h3 class="text-2xl font-light pb-16">Discover some of our projects</h3> -->
      <Slider :data="projects" />

      <!-- <a href="#about" class="text-xl only-xs:mt-10 hover:underline mt-24">{{ $t('home.learn_more') }}</a> -->
    </div>

    <!-- Services -->
    <div class="w-full h-full customBg home-section flex flex-col py-24 px-32" id="services">
      <h1 class="xs:mb-0 md:mb-0 lg:mb-16">{{ $t('home.services.title') }}</h1>

      <div class="flex flex-wrap items-start justify-start">
        <!-- item1 -->
        <item
          v-for="(item, index) in $t('home.services.lists')"
          :key="index"
          custom="lg:w-1/3 md:w-1/2 text"
          :title="item.title"
          :desc="item.desc"
          :lis="item.lis"
          item="true"
        ></item>
      </div>
    </div>

    <!-- our clients -->
    <div class="home-section h-auto bg-black flex flex-col justify-between">
      <!-- <h1 class="text-5xl text-white font-bold mb-32"></h1> -->
      <p class="text-white xs:text-xl lg:text-4xl md:text-3xl font-medium leading-relaxed mb-6">
        <span class="text-paris_daisy">{{$t('home.clients.1')}}</span>{{$t('home.clients.2')}}
      </p>

      <div class="flex xs:m-0 md:m-2 lg:m-8 flex-col">
        <div class="flex flex-wrap">
          <div
            v-for="(x, index) in brands"
            :key="index"
            class="xl:w-1/4 lg:w-1/3  w-1/2 xs:w-1/2 xs:px-2 xs:py-4 md:p-5 xl:p-5 flex justify-center items-center"
          >
            <!-- <img :src="brands[0]" height="20px" class="grayscale" /> -->
            <Brand  :src="x.src" :link="x.link"/>
          </div>
        </div>
      </div>

      <!-- <router-link to="/about" class="text-xl hover-daisy mt-4 text-white">Подробнее о нас</router-link> -->
    </div>

    <!-- send message height-80vh -->
    <div class="home-section h-full">
      <div class="flex h-full xs:flex-col lg:flex-row justify-between">
        <div class="flex flex-col xs:w-full w-5/12 h-full justify-center md:mb-10 xs:mb-4">
          <h1 class="mb-8">{{$t('home.contact.title')}}</h1>
          <div class="flex sm:flex-row  xl:flex-row mb-4 xs:flex-col">
            <div class="sm:mr-12 lg:mr-6 xl:mr-20 mb-6">
              <h5 class="text-2xl mb-2 font-medium">{{$t('home.contact.addressName')}}</h5>
              <p class="text-xl">{{$t('home.contact.address')}}</p>
            </div>
            <div class="flex flex-col">
              <h5 class="text-2xl mb-1 font-medium">{{$t('home.contact.contacts.title')}}</h5>
             <div >
                <p class="text-xl leading-loose">
                {{$t('home.contact.contacts.phone1')}}
                <br />{{$t('home.contact.contacts.phone2')}}
              </p>
              <a href="mailto:office@andro.media" class="text-xl text-blue-700 hover:text-indigo-900 leading-loose">office@andro.media</a>
             
             </div>
            </div>
          </div>
        </div>

        <div class="flex xs:w-full w-1/2 rounded-lg">
          <!-- h-75% -->
          <div
            class="w-full relative border-contact border-paris_daisy bg-black flex flex-col phone:px-5 phone:pt-16 p-10 pt-24"
          >
            <form action="#" id="contact_us">
              <input
                class="input bg-gray-200 border-2 mb-6"
                id="grid-first-name"
                type="text"
                :placeholder="$t('home.contact.form.fullname')"
              />
              <!-- if error occurs -->
              <!-- <p class="text-red-700 text-xs italic mb-3">Please fill out this field.</p> -->

              <!-- email  border-red-500-->

              <input
                class="input border-2 bg-gray-200 mb-6"
                id="grid-email"
                type="email"
                :placeholder="$t('home.contact.form.email')"
              />

              <!-- textarea -->

              <textarea
                class="mb-5 border-2 bg-gray-200 input"
                rows="7"
                cols="50"
                name="comment"
                form="contact_us"
                :placeholder="$t('home.contact.form.textarea')"
              ></textarea>

              <input class="text-gray-300" type="checkbox" name="lol" id="agreement" />
              &nbsp;
              <span
                class="text-white"
              >{{$t('home.contact.form.agreement')}}</span>&nbsp;
              <!-- if error occurs -->
              <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
            </form>
            <div class="flex justify-end phone:mt-6 mt-12">
              <button  class="submit-btn text-black py-2 px-4 rounded mb-2">{{$t('home.contact.form.button')}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import Brand from "@/components/Brand.vue";
import Slider from "@/components/Slider.vue";
import ScrollIcon from "@/components/ScrollIcon.vue";

// import devcit from "@/assets/brands/devcit.svg";
// import devcit2 from "@/assets/brands/devcit2.svg";
import fanat from "@/assets/brands/fanat.svg";
import harats from "@/assets/brands/harats.svg";
import myata from "@/assets/brands/myata.svg";
import soros from "@/assets/brands/soros.svg";
import tsi from "@/assets/brands/tsi.svg";
import space from "@/assets/brands/space.svg";
import satsol from "@/assets/brands/satsol.svg";
import devcit from "@/assets/brands/devcit.svg";

export default {
  name: "home",
  components: {
    Item,
    Brand,
    Slider,
    ScrollIcon
    // eslint-disable-next-line vue/no-unused-components
  },
  data() {
    return {
      white: "fff",

   
      brands: [
        {
        src : devcit,
        link : "https://devcit.auca.kg/"
      },   {
        src : satsol,
        link : "https://satsol.net/"
      },   {
        src : harats,
        link : "https://bishkek.harats.com/"
      },   {
        src : myata,
        link : "https://myata24.ru/"
      },   {
        src : soros,
        link : "https://soros.kg/"
      },   {
        src : tsi,
        link : "https://tsi.auca.kg/"
      },   {
        src : space,
        link : "https://www.spacedesign.me/"
      },   {
        src : fanat,
        link : "http://fanat.kg/"
      }, 
     ],
    
    };
  },
  computed: {
      projects(){
        return [
        {
          img: "assets/images/tijo/cover.png",
          title: "Tijo Jewellery",
          desc: this.$t('projects.tijo.desc'),
          gColor1: "#f4c9c8",
          gColor2: "#8c68ac",
          link: "/tijo"
        },
        {
          img: "assets/images/dialecticon/cover.png",
          title: "Dialecticon",
          desc: this.$t('projects.dialecticon.desc'),
          gColor1: "#62de71",
          gColor2: "#00a44f",
          link: "/dialecticon"
        },
        {
          img: "assets/images/soros/cover.png",
          title: "Soros Foundation Kyrgyzstan",
          desc: this.$t('projects.soros.desc'),
          gColor1: "#AA076B",
          gColor2: "#61045F",
          link: "/soros"
        },
         {
          img: "assets/images/raincatcher/cover.png",
          title: "Raincatcher",
          desc: this.$t('projects.raincatcher.desc'),
          gColor1: "#00aeef",
          gColor2: "#00aeef",
          link: "/raincatcher"
        }           
        ]
      }
  },


};
</script>
<style lang="postcss">
.home-section {
  @apply w-full py-24 px-32;
}
@screen phone {
  .home-section {
    @apply px-5 py-12;
  }
}

@screen sm {
  .home-section {
    @apply px-10;
  }
}
@screen md {
  .home-section {
    @apply px-12;
  }
}
@screen lg {
  .home-section {
    @apply px-20;
  }
}

@screen xl {
  .home-section {
    @apply py-24 px-32;
  }
}

::selection {
  background: #ffff3c;
}
html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
</style>