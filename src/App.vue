<script setup>
import { onMounted, ref } from 'vue'

// import SVGDefs from './assets/_defs.svg?component'
import Intro from './cards/Intro.vue'
import Childhood from './cards/Childhood.vue'
import Youth from './cards/Youth.vue'
import Teen from './cards/Teen.vue'
import Adult from './cards/Adult.vue'
import Adept from './cards/Adept.vue'
import Wiz from './cards/Wiz.vue'
import Nerd from './cards/Nerd.vue'
import Jobs from './cards/Jobs.vue'
import Calendar from './cards/Calendar.vue'
import Orb from './cards/Orb.vue'
import Apps from './cards/Apps.vue'
import Concepts from './cards/Concepts.vue'
import FRP from './cards/FRP.vue'
import Goals from './cards/Goals.vue'
import Hermit from './cards/Hermit.vue'
import Plan from './cards/Plan.vue'
import Hope from './cards/Hope.vue'
import Overview from './cards/Overview.vue'

const slideData = {
  intro: { x: -4000, y: 0, scale: 4 },
  child: { x: 1000, y: -1000, scale: 2, rotate: 30 },
  youth: { x: 2500, y: -2000, rotateX: 30, rotate: 30, scale: 2 },
  teen: { x: 5000, y: -1000, rotateY: 30, scale: 2 },
  adult: { x: 1000, y: 2000, rotateY: 30, rotateZ: -60, scale: 3 },
  adept: { x: 4000, y: 1500, scale: 2 },
  wiz: { x: 6000, y: 500, scale: 2.5, rotateX: -30, rotateY: -15 },
  hermit: { x: 7000, y: 3000, scale: 3, rotateX: 20, rotateY: 30 },
  nerd: { x: 10000, y: 0, scale: 2, rotateX: 0, rotateY: 30 },
  jobs: { x: 11500, y: -1000, rotateX: 20, rotateY: -30, scale: 1.5 },
  time: { x: 14000, y: -200, z: 600, scale: 3 },
  orb: { x: 11500, y: -3500, rotate: 35, scale: 3 },
  apps: { x: 11500, y: 2500, rotate: -30, scale: 2 },
  ddds: { x: 14500, y: 2000, rotate: 60, scale: 1.5 },
  frp: { x: 16000, y: 1500, rotate: -30, scale: 1.4 },
  stack: { x: 14500, y: -2700, rotate: 15, scale: 2 },
  plan: { x: 13500, y: 3700, rotate: 95, rotateX: -20,scale: 1.5 },
  hope: { x: 16500, y: 4000, rotate: -15, scale: 3 },
  overview: { x: 8000, y: 1500, scale: 20 }
}

onMounted(() => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '/css/impress.css'
  document.head.appendChild(link)

  const link2 = document.createElement('link')
  link2.rel = 'stylesheet'
  link2.href = '/css/storyline.css'
  document.head.appendChild(link2)

  const script = document.createElement('script')
  script.src = '/js/impress.js'
  script.onload = () => {
    if (window.impress) {
      window.impress().init()
    }
  }
  document.head.appendChild(script)
})

const isFullscreen = ref(false)

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.()
    isFullscreen.value = true
  } else {
    document.exitFullscreen?.()
    isFullscreen.value = false
  }
}
</script>

<template>
  <div class="impress-not-supported">
    <button class="fullscreen-btn" @click="toggleFullscreen" aria-label="Toggle fullscreen">
      {{ isFullscreen ? '⛶' : '⛶' }}
    </button>
    <div class="fallback-message">
      <p>Your browser <b>doesn't support the features required</b> by impress.js, so you are presented with a simplified version of this presentation.</p>
      <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p>
    </div>

    <!-- <SVGDefs /> -->
    
    <div id="impress">
      <Intro :data="slideData.intro" />
      <Childhood :data="slideData.child" />
      <Youth :data="slideData.youth" />
      <Teen :data="slideData.teen" />
      <Adult :data="slideData.adult" />
      <Adept :data="slideData.adept" />
      <Wiz :data="slideData.wiz" />
      <Hermit :data="slideData.hermit" />
      <Nerd :data="slideData.nerd" />
      <Jobs :data="slideData.jobs" />
      <Calendar :data="slideData.time" />
      <Orb :data="slideData.orb" />
      <Apps :data="slideData.apps" />
      <Concepts :data="slideData.ddds" />
      <FRP :data="slideData.frp" />
      <Goals :data="slideData.stack" />
      <Plan :data="slideData.plan" />
      <Hope :data="slideData.hope" />
      <Overview :data="slideData.overview" />
    </div>
  </div>
</template>

<style scoped>
.fullscreen-btn {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 0.3;
  transition: opacity 0.3s;
  display: none;
}
.fullscreen-btn:hover {
  opacity: 1;
}
@media (min-width: 768px) {
  .fullscreen-btn {
    display: none;
  }
}
</style>