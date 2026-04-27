<template>
  <Card id="apps" class="step">
    <div class="screen paco" style="background-image: url(/img/paco.png);"></div>
    <div class="screen neco" style="background-image: url(/img/neco.png);"></div>
    <div class="screen reco" style="background-image: url(/img/reco.png);"></div>
    <div class="screen reports" style="background-image: url(/img/report.png);"></div>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
.screen {
  position: absolute;
  width: 450px;
  height: 276px;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
  transition: all 0.5s;
  border: #000 3px solid;
  background-position: center;
  background-color: #FFF;
}

.screen:hover {
  width: 940px;
  height: 600px;
  z-index: 2;
  top: -300px;
}

.paco { top: -300px; left: -20px; }
.reports { top: -300px; right: -20px; }
.reco { top: 20px; left: -20px; }
.neco { top: 20px; right: -20px; }
</style>
