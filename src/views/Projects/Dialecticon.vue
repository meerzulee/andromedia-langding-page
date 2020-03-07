<template>
  <div >
    <!-- img -->
    <div class="w-full dia-header h-auto  overflow-hidden bg-black flex relative">
      <div class=" w-full opacity-50 ">
        <img src="@/assets/images/dialecticon/billboard-min.jpg" class="w-full  " alt />
      </div>
      <div
        class=" absolute flex bottom-2 left-2 flex-col w-1/2 justify-end "
      >
        <h1 class="text-header  relative  text-white">Dialecticon</h1>
      </div>
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.dialecticon.p1')}}</p>
    </div>
    <!-- img -->
    <div class="w-full">
      <img src="@/assets/images/dialecticon/p1.png" class="object-fill w-full" alt />
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.dialecticon.p2')}}</p>
    </div>
    <!-- img -->
    <div>
      <img src="@/assets/images/dialecticon/p2.png" alt />
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.dialecticon.p3')}}</p>
    </div>
    <!-- img -->
    <div>
      <img src="@/assets/images/dialecticon/p3.png" alt />
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.dialecticon.p4')}}</p>
    </div>
    <!-- image -->
    <div>
      <img src="@/assets/images/dialecticon/p4.jpg" class="w-full" alt />
    </div>
    <!-- text -->
    <div>
      <img src="@/assets/images/dialecticon/mockdialect.png" class="w-full" alt />
    </div>
    <!-- img -->
    <div class="w-full">
      <img src="@/assets/images/dialecticon/p5.jpg" class="w-full" alt />
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
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {}
};
</script>
<style >
.dia-bg {
  background: rgba(0, 0, 0, 0.5);
}
</style>