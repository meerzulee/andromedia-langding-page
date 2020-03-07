<template>
  <div class="h-full">
    <router-link :to="'/' + $i18n.locale + link">
      <div class="relative h-full" @mouseover="isHidden = false" @mouseleave="isHidden = true">
        <!-- color without # -->
        <div
          class="card-bg p-card flex justify-center items-center"
          :style="' background: linear-gradient(to right bottom, ' + gColor1 + ', ' + gColor2 + ');'"
        >
          <img :src="require(`../${img}`)" class="sm:max-w-xs md:w-4/5 lg:w-auto lg:max-w-xs xl:max-w-md lg:p-5 xl:p-10" alt />
        </div>
        <!-- hover -->
        <div
          v-if="!isHidden"
          class="z-10 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
          :style="' background: linear-gradient(to right bottom, ' + gColor1 + 'F2, ' + gColor2 + 'F2);'"
        >
          <h1 class="text-4xl text-center lg:text-3xl md:text-2xl text-white font-semibold">{{title}}</h1>
          <h1 class="text-xl text-center text-white mt-2 lg:mt-0 font-light">{{desc}}</h1>
        </div>
      </div>
    </router-link>
  </div>
</template>
<style lang="postcss">
@screen xs{
  .p-card {
    height: 20rem;
  }
}
@screen sm {
  .p-card {
    height: 24rem;
  }
}
@screen md {
  .p-card {
    height: 20rem;
  }
}
@screen lg {
  .p-card {
    height: 24rem;
  }
}
@@screen xl {
  .p-card {
    height: 30rem;
  }
}
</style>
<script>
export default {
  props: ["img", "title", "desc", "gColor1", "gColor2", "link"],
  data() {
    return {
      isHidden: true,
      
    };
  }
};
</script>