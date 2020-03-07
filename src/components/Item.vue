<template>
    <div class="px-5 xs:pt-4 pt-8 flex flex-col flex justify-center items-start" :class="custom">
          <!-- <img src="@/assets/icons/icon.png" class="w-32" alt /> -->
          <slot></slot>
         
          <h1 v-if="item" class="mt-10 text-black  text-4xl my-3 font-medium">{{title}}</h1>
          <h1 v-else-if="team" class="mt-10  text-4xl my-3 font-medium">{{title}}</h1>
          <p class="text-grey-200 font-normal text-lg">{{desc}}</p>
          <ul class=" pt-3">
            <li class="ul-gray font-normal leading-loose text-lg border-dotted" v-for="(x, index) in lis" :key="index">{{x}}</li>
          </ul>
    </div>
</template>
<style >
  .ul-gray{
    color: #7f7f7f;
  } 
</style>
<script>
export default {
    props: ['title','desc','custom','item','team','lis'],
    
}
</script>