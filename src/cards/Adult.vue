<template>
  <Card id="adult" class="step slide">
    <strong>2000-2006</strong> &nbsp; <small>21-27 years old.</small><br>
    • Married &nbsp; <b><i>Laura</i></b><br>
    • Son &nbsp; <b><i>Sebastian</i></b>
    • Onai.Net

    <i class="pic bass"></i>
    <i class="pic tralaura"></i>
    <i class="pic form"></i>
    <i class="pic laura"></i>
    <i class="pic wheel"></i>
    <i class="pic wedding"></i>
    <i class="pic family"></i>
    <i class="pic toddler"></i>
    <i class="pic baby"></i>
    <i class="pic bassito"></i>
    <i class="pic bass-trav"></i>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#adult {
  background-image: url(/img/enlightened.jpg);
  background-position: right;
}

:deep(.pic) { background-size: contain; background-repeat: no-repeat; position: absolute; }
.tralaura { background-image: url(/img/tralaura.jpg); width: 21%; height: 22%; left: 48%; top: 2%; }
.bass { background-image: url(/img/bass.jpg); width: 30%; height: 38%; left: 0; bottom: 0; }
.laura { background-image: url(/img/laura.jpg); width: 42%; height: 49%; left: 16%; top: 27%; }
.form { background-image: url(/img/form.jpg); width: 16%; height: 49%; left: 0; top: 27%; }
.wheel { background-image: url(/img/wheel.jpg); width: 39%; height: 35%; left: 20%; bottom: 0; }
.wedding { background-image: url(/img/wedding.jpg); width: 10%; height: 10%; top: 10%; right: -5%; transition: all 0.5s; z-index: 8; }
.wedding:hover { height: 110%; width: 100%; top: -5%; z-index: 9; }
.family { background-image: url(/img/wed-family.jpg); width: 10%; height: 10%; top: 25%; right: -5%; transition: all 0.5s; z-index: 8; }
.family:hover { height: 110%; width: 110%; top: -5%; z-index: 9; }
.baby { background-image: url(/img/baby.jpg); width: 10%; height: 10%; top: 40%; right: -5%; transition: all 0.5s; z-index: 8; }
.baby:hover { height: 110%; width: 100%; top: -5%; z-index: 9; }
.toddler { background-image: url(/img/toddler.jpg); width: 10%; height: 10%; top: 55%; right: -5%; transition: all 0.5s; z-index: 8; }
.toddler:hover { height: 110%; width: 100%; top: -5%; z-index: 9; }
.bass-trav { background-image: url(/img/bass-travis.jpg); width: 10%; height: 10%; top: 70%; right: -5%; transition: all 0.5s; z-index: 8; }
.bass-trav:hover { height: 110%; width: 90%; top: -5%; z-index: 9; }
.bassito { background-image: url(/img/bassito.jpg); width: 10%; height: 10%; top: 85%; right: -5%; transition: all 0.5s; z-index: 8; }
.bassito:hover { height: 110%; width: 100%; top: -5%; z-index: 9; }
</style>
