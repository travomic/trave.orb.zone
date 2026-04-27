<template>
  <Card id="youth" class="step slide">
    <strong>1986-1992</strong> &nbsp; <small>7-13 years old.</small><br>
    • Nintendo<br>
    • Playing outdoors<br>
    • First computer <b>IBM 286</b>

    <i class="pic game"></i>
    <i class="pic android"></i>
    <i class="pic flower"></i>
    <i class="pic tree"></i>
    <i class="pic barneys"></i>
    <i class="pic family"></i>
    <i class="pic cousins"></i>
    <i class="pic kevin"></i>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#youth {
  background-image: url(/img/ninja.jpg);
  background-position: right;
}

:deep(.pic) {
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
}

.alone {
  background-image: url(/img/alone.jpg);
  width: 25%;
  height: 25%;
}

.android {
  background-image: url(/img/android.jpg);
  width: 13%;
  height: 38%;
  bottom: 35%;
  left: 0;
}

.game {
  background-image: url(/img/game.jpg);
  width: 53%;
  height: 41%;
  bottom: 0;
  left: 0;
}

.flower {
  background-image: url(/img/flower.jpg);
  width: 47%;
  height: 28%;
  bottom: 40%;
  left: 13%;
}

.tree {
  background-image: url(/img/tree.jpg);
  width: 17%;
  height: 16%;
  bottom: 33%;
  left: 45%;
}

.barneys {
  background-image: url(/img/2026/barneys.jpg);
  width: 10%;
  height: 18%;
  right: -5%;
  bottom: 22%;
  transition: all 0.5s;
  z-index: 8;
}

.barneys:hover {
  width: 90%;
  height: 80%;
  bottom: 10%;
  z-index: 9;
}

.family {
  background-image: url(/img/barney-fam-80s.jpg);
  width: 10%;
  height: 18%;
  right: -5%;
  bottom: 42%;
  transition: all 0.5s;
  z-index: 8;
}

.family:hover {
  width: 64%;
  height: 110%;
  bottom: -5%;
  z-index: 9;
}

.cousins {
  background-image: url(/img/cousins.jpg);
  width: 10%;
  height: 10%;
  right: -5%;
  bottom: 17%;
  transition: all 0.5s;
  z-index: 8;
}

.cousins:hover {
  width: 110%;
  height: 111%;
  bottom: -15%;
  z-index: 9;
}

.kevin {
  background-image: url(/img/trave-kevin.jpg);
  width: 10%;
  height: 10%;
  right: -5%;
  bottom: 5%;
  transition: all 0.5s;
  z-index: 8;
}

.kevin:hover {
  width: 110%;
  height: 110%;
  bottom: -11%;
  z-index: 9;
}
</style>
