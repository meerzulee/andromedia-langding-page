<template>
  <div class="tijo">
    <!-- img -->
    <div class="tijo-bg w-full h-75vh   md:h-auto overflow-hidden flex  xs:flex-col-reverse sm:flex-row relative xs:justify-center">
      <div class="absolute header-opacity"></div>
      <div class="flex flex-col w-1/2 relative  only-sm:justify-center only-xs:justify-center justify-end  xs:px-8 sm:p-20">
       <h1 class="text-header  text-white flex xs:flex-row sm:flex-col"><span class="mr-3">Tijo</span> <span>Jewellery</span></h1>
      </div>
      <div class="w-1/2   xs:w-full flex justify-center items-center">
        <img src="@/assets/images/tijo/cover.png"  alt />
      </div>
    </div>
    <!-- text -->
    <div class="project-section ">
      <p class="project-p">
       {{$t('projects.tijo.p1')}}
      </p>
    </div>
    <!-- img -->
    <div class="w-full">
      <img src="@/assets/images/tijo/girl.png" class="object-fill w-full" alt />
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p "
      > {{$t('projects.tijo.p2')}}</p>
    </div>
    <!-- img -->
    <div>
      <img src="@/assets/images/tijo/box-packages.jpg" alt />
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.tijo.p3')}}
</p>
    </div>
    <!-- img -->
    <div>
      <video playsinline autoplay muted loop src="@/assets/images/tijo/logo_scale.mp4"></video>
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.tijo.p4')}}</p>
    </div>
    <!-- image -->
    <div class="flex w-full flex-wrap">
      <div class="w-1/2 only-xs:w-full">
        <img src="@/assets/images/tijo/1.png" alt />
      </div>
      <div class="w-1/2 only-xs:w-full">
        <img src="@/assets/images/tijo/2.png" alt />
      </div>
      <div class="w-1/2 only-xs:w-full">
        <img src="@/assets/images/tijo/3.png" alt />
      </div>
      <div class="w-1/2 only-xs:w-full">
        <img src="@/assets/images/tijo/4.png" alt />
      </div>
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.tijo.p5')}}</p>
    </div>
    <!-- img -->
    <div class="w-full">
      <img src="@/assets/images/tijo/web-mockup.jpg" alt />
    </div>
   
    <!-- image -->
    <div class="flex w-full  flex-wrap">
      <div class="w-1/2 only-xs:w-full">
        <img src="@/assets/images/tijo/b1.png" alt />
      </div>
      <div class="w-1/2 only-xs:w-full">
        <img src="@/assets/images/tijo/b2.png" alt />
      </div>
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.tijo.p6')}}</p>
    </div>
    <!-- img -->
    <div class="w-full">
      <img src="@/assets/images/tijo/bmoc.jpg" alt />
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