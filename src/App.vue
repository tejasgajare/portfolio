<script setup lang="ts">
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSPlugin from 'gsap/CSSPlugin';
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const isMobile = ref(false)
const isSmall = ref(false)
const isMedium = ref(false)
const isLarge = ref(false)

onBeforeMount(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
})

onMounted(() => {
    gsap.to('.main', 
    { 
      scrollTrigger: { 
        trigger: ".projects", 
        start: "top center-=20px", 
        end:"top+=10px center+=20px",
        scrub: true, 
        // markers: {startColor: "white", endColor: "white"} 
      }, 
      backgroundColor: "#FFD900", 
      color: "#101010", 
      duration:1, 
      ease: "linear",
      onStart() {
          console.log('Starting Animation');
      },
      onUpdate(self) {
          console.log('Updating Animation', self);
      },
      onComplete() {
          console.log('Ending Animation');
      }
    })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  handleResize();
})

function handleResize() {
  isMobile.value = window.innerWidth < 640
  isSmall.value = window.innerWidth >= 640 && window.innerWidth < 768
  isMedium.value = window.innerWidth >= 768 && window.innerWidth < 1024
  isLarge.value = window.innerWidth >= 1024
}
</script>

<template>
  <div class="main">
    <!--     
      <p v-if="isMobile">Mobile</p>
      <p v-if="isSmall">Small</p>
      <p v-if="isMedium">Medium</p>
      <p v-if="isLarge">Large</p> 
    -->

    <div class="wrapper mx-auto px-10 max-md:px-5">
      <Header     :mobile="isMobile" :small="isSmall" :medium="isMedium" :large="isLarge" />
      <Hero       :mobile="isMobile" :small="isSmall" :medium="isMedium" :large="isLarge"  />
      <div class="projects">
        <Projects   :mobile="isMobile" :small="isSmall" :medium="isMedium" :large="isLarge"/>
      </div>
    </div>
    <div class="py-20 font-bold uppercase" :class="{'text-9xl ': isLarge||isMedium, 'text-6xl': isSmall||isMobile}">
      <div class="gradient flex py-5 overflow-clip">
        codetestrepeatcodetestrepeatcodetestrepeatcodetestrepeatcodetestrepeatcodetestrepeat
        codetestrepeatcodetestrepeatcodetestrepeatcodetestrepeatcodetestrepeatcodetestrepeat
      </div>
      
    </div>
  </div>
  <Footer/>
</template>

<style lang="scss">
@import './assets/main.scss';

.wrapper {
  max-width: 1380px;
}

.main {
  color: $white;
  background-color: $black;
}

.gradient {
    background: linear-gradient(to right, #ff5500, #084aff, #cf23cf, #ff5500);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

</style>
