<template>
  <div >
    <a :href="link" target="_blank"  class="cursor-pointer flex justify-center" @mouseover="isActive = true" @mouseleave="isActive = false">
      <SimpleSVG :src="src"  fill-class-name="customColor" :fill="svgFillColor"  width="60%" height="60%" />
    </a>
  </div>
</template>
<script>
import { SimpleSVG } from "vue-simple-svg";

export default {
  data() {
    return {
         isActive: false,
        regularFill: 'fff',
        activeFill: '',
    };
  },
  props:['src','link'],
  components: {
    SimpleSVG
  },
   computed: {
    svgFillColor () {
      return this.isActive ? this.activeFill : this.regularFill
    },
   }
};
</script>