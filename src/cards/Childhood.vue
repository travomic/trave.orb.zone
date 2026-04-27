<template>
  <Card id="child" class="step slide">
    <strong>1979-1985</strong> &nbsp; <small>0-6 years old.</small><br>
    • Samoa<br>
    • Stories<br>
    • Siblings

    <i class="pic home"></i>
    <i class="pic block"></i>
    <i class="pic city"></i>
    <i class="pic county"></i>
    <i class="pic family"></i>
    <i class="pic brownie"></i>
    <i class="pic crab"></i>
    <i class="pic dream"></i>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#child {
  background-image: url(/img/lifeform.jpg);
  background-position: right;
}

:deep(.pic) {
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
}

.home {
  background-image: url(/img/payson-home.png);
  width: 10%;
  height: 6%;
  right: -5%;
  bottom: 60%;
  transition: all 0.5s;
  z-index: 8;
}

.home:hover {
  width: 110%;
  height: 70%;
  bottom: 20%;
  z-index: 9;
}

.block {
  background-image: url(/img/payson-block.png);
  width: 10%;
  height: 10%;
  right: -5%;
  bottom: 45%;
  transition: all 0.5s;
  z-index: 8;
}

.block:hover {
  width: 95%;
  height: 110%;
  bottom: -5%;
  z-index: 9;
}

.city {
  background-image: url(/img/payson-city.png);
  width: 10%;
  height: 10%;
  right: -5%;
  bottom: 30%;
  transition: all 0.5s;
  z-index: 8;
}

.city:hover {
  width: 95%;
  height: 110%;
  bottom: -5%;
  z-index: 9;
}

.county {
  background-image: url(/img/utah-county.png);
  width: 10%;
  height: 10%;
  right: -5%;
  bottom: 15%;
  transition: all 0.5s;
  z-index: 8;
}

.county:hover {
  width: 95%;
  height: 110%;
  bottom: -5%;
  z-index: 9;
}

.family {
  background-image: url(/img/family.jpg);
  height: 30%;
  width: 50%;
  left: 20%;
  top: 13%;
}

.brownie {
  background-image: url(/img/brownie.png);
  height: 39%;
  width: 20%;
  left: 2%;
  top: 30%;
  z-index: 2;
}

.crab {
  background-image: url(/img/crab.jpg);
  height: 49%;
  width: 73%;
  left: 0;
  bottom: 0;
}

.dream {
  background-image: url(/img/dream.jpg);
  height: 25%;
  width: 35%;
  left: 35%;
  bottom: 36%;
}
</style>
