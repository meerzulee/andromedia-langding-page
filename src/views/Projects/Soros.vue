<template>
  <div class="tijo">
    <!-- img -->
    <div class="w-full h-75vh overflow-hidden soros-bg flex relative">
      <div class="absolute flex relative flex-col w-1/2 justify-end p-20">
        <h1 class="text-header lg:text-5xl text-white">Soros Foundation Kyrgyzstan</h1>
      </div>
    </div>
    <!-- text -->
    <div class="project-section">
      <p class="project-p">
        {{$t('projects.soros.p1')}}
      </p>
    </div>
    <!-- video -->
    <div class="flex justify-center  lg:py-16 lg:px-32 xs:py-4">
      <video playsinline autoplay muted loop src="@/assets/images/soros/animation.mp4" class="w-full"></video>
    </div>
    <!-- text -->
    <div class="project-section">
      <p class="project-p">
        <br />{{$t('projects.soros.p2')}}
      </p>
    </div>
    <!-- img -->
    <!-- video -->
    <div class="flex justify-center lg:py-16 lg:px-32 xs:py-4">
      <video playsinline autoplay muted loop src="@/assets/images/soros/anim2.mp4" class="w-full"></video>
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.soros.p3')}}</p>
    </div>
    <!-- img -->
    <div class="flex justify-center lg:py-16  xs:py-4 ">
      <div class="video-wrapper">
          <video playsinline controls loop src="@/assets/images/soros/soros.mp4" class="w-full"></video>
      </div>
    </div>
    <!-- text -->
    <div class="project-section">
      <p
        class="project-p"
      >{{$t('projects.soros.p4')}}</p>
    </div>
    <!-- image -->
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
.soros-bg {
  background: linear-gradient(#aa076b, #61045f);
}
.video-wrapper {
    position: relative;
}

.video-wrapper > video {
    width: 100%;
    vertical-align: middle;
}

.video-wrapper > video.has-media-controls-hidden::-webkit-media-controls {
    display: none;
}

.video-overlay-play-button {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px calc(50% - 50px);
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    opacity: 0.95;
    cursor: pointer;
    background-image: linear-gradient(transparent, #000);
    transition: opacity 150ms;
}

.video-overlay-play-button:hover {
    opacity: 1;
}

.video-overlay-play-button.is-hidden {
    display: none;
}
</style>