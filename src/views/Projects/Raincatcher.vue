<template>
  <div class="tijo">
    <!-- img -->
    <div class="w-full dia-header h-auto  overflow-hidden bg-black flex relative">
      <div class=" w-full opacity-50 ">
          <video playsinline autoplay muted loop src="@/assets/images/raincatcher/r3.mp4"></video>
      </div>
      <div
        class=" absolute flex bottom-2 left-2 flex-col w-1/2 justify-end "
      >
        <h1 class="text-header  relative  text-white">Raincatcher</h1>
      </div>
    </div>
    <!-- text -->
    <div class="project-section ">
      <p class="project-p">{{$t('projects.raincatcher.p1')}}</p>
    </div>
    <!-- img -->
    <div class="w-full">
      <img src="@/assets/images/raincatcher/p1.png" alt />
    </div>  
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p "
      >{{$t('projects.raincatcher.p2')}}</p>
    </div>
    <!-- img -->
    <div>
               <video playsinline autoplay muted loop src="@/assets/images/raincatcher/r1.mp4"></video>
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.raincatcher.p3')}}</p>
    </div>
    <!-- img -->
    <div>
               <video playsinline autoplay muted loop src="@/assets/images/raincatcher/r2.mp4"></video>
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.raincatcher.p4')}}</p>
    </div>
    <!-- video -->
      <div>
     <video playsinline autoplay muted loop src="@/assets/images/raincatcher/r3.mp4"></video>
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      ></p>
    </div>
    <!-- img -->
    <div class="w-full">
      <img src="@/assets/images/raincatcher/p2.png" alt />
    </div>
   
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      features: ["Branding", "Product Design"]
    };
  },
  mounted () {
  window.scrollTo(0, 0)
},
  components: {}
};
</script>
<style >
.tijo-bg {
  background-color: #eeddca;
}
</style>