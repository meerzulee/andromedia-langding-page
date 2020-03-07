<template>
  <div class="h-full mt-20 relative">
    <!-- right decor -->
    <div class="absolute h-full w-5/12 bg-gray-300 -z-10" :class="[flipped ? 'left-0': 'right-0']"></div>
    <!-- section info -->
    <section
      class="flex items-center px-8p mx-12 py-20"
      :class="[flipped ? 'flex-row-reverse': '']"
    >
      <!-- left -->
      <div class="w-1/2 flex px-3 flex-col justify-center" :class="[flipped ? 'pl-12': 'pr-12']">
        <h1 class="font-extrabold text-4xl text-gray-900 mb-4">
          <slot name="title"></slot>
        </h1>
        <p class="font-light text-gray-900 leading-normal text-base">
          <slot name="desc"></slot>
        </p>
      </div>
      <div class="w-1/2 px-3">
        <div class="window relative m-auto overflow-hidden rounded-xs">
          <!-- image -->
          <div>
            <slot name="image"></slot>
            
          </div>
          <div class="dots-container flex">
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style >
.window {
  box-shadow: rgba(0, 0, 0, 0.21) 0px 2px 25px 0px;
  padding-top: 30px;
  background-color: rgb(245, 245, 245);
  max-width: 768px;
}
.dots-container {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}
.dots {
  width: 10px;
  height: 10px;
  margin-right: 10px;
  background-color: rgb(226, 226, 226);
  border-radius: 10px;
}
</style>
<script>
export default {
  props: {
      flipped:{
          type: Boolean,
          default: false
      }
  }
};
</script>