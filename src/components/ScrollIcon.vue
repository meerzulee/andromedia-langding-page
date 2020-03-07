<template >
  <div class="icon-scroll cursor-pointer" >
    <div class="mouse flex justify-center">
      <div class="wheel"></div>
    </div>
    <div class="icon-arrows">
      <span></span>
    </div>
  </div>
</template>
<style scoped >
.icon-scroll {
  position: absolute;
  bottom: 10%;
  left: 50%;
  width: 1em;
  height: 3.125em;
  transform: translateX(-50%) scale(2);
  z-index: 99999;
}
.icon-arrows::after,
.icon-arrows::before {
  content: "";
}
.icon-arrows span,
.icon-arrows::after,
.icon-arrows::before {
  display: block;
  width: 0.315em;
  height: 0.315em;
  border-right: 1px solid #ffff3c;
  border-bottom: 1px solid #ffff3c;
  margin: 0 0 0.125em 0.315em;
  transform: rotate(45deg);
  animation: mouse-scroll 1s infinite;
  animation-direction: alternate;
}
.icon-arrows::before {
  margin-top: 0.315em;
  animation-delay: 0.1s;
}

.icon-scroll span {
  animation-delay: 0.2s;
}

.icon-arrows::after {
  animation-delay: 0.3s;
}

.icon-scroll .mouse {
  height: 1.375em;
  width: 0.875em;
  border: 1px solid #ffff3c;
  border-radius: 2em;
}

.icon-scroll .wheel {
  position: relative;
  display: block;
  height: 0.19em;
  width: 0.187em;
  margin: 0.19em auto 0.1875em;
  background: #ffff3c;
  animation: mouse-wheel 1.2s ease infinite;
  border-radius: 25px;
}

@keyframes mouse-wheel {
  0% {
    opacity: 1;
    transform: translateY(0.1em);
  }

  100% {
    opacity: 0;
    transform: translateY(0.575em);
  }
}

@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>