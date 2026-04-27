<template>
  <Card id="adept" class="step slide">
    <strong>2007-2013</strong> &nbsp; <small>28-34 years old.</small><br>
    • HTML / CSS / JS<br>
    • Data Modeling / Processing<br>
    • Needle.com

    <i class="pic needle"></i>
    <i class="pic storyboard"></i>
    <i class="pic knot"></i>
    <i class="pic verbs"></i>
    <i class="pic bandits"></i>
    <i class="pic attack"></i>
    <i class="pic beach"></i>
    <i class="pic sand"></i>
    <i class="pic school"></i>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#adept {
  background-image: url(/img/hand.jpg);
  background-position: right;
}

:deep(.pic) { background-size: contain; background-repeat: no-repeat; position: absolute; }
.needle { background-image: url(/img/needle.jpg); width: 60%; height: 50%; bottom: 0; left: 12%; }
.storyboard { background-image: url(/img/storyboard.png); width: 30%; height: 34%; bottom: 37%; left: 0; }
.knot { background-image: url(/img/knot.png); width: 32%; height: 37%; bottom: 42%; left: 29%; }
.verbs { background-image: url(/img/verbs.jpg); width: 32%; height: 22%; top: 0; left: 51%; }
.bandits { background-image: url(/img/bandits.jpg); width: 10%; height: 10%; bottom: -5%; left: 10%; transition: all 0.5s; z-index: 8; }
.bandits:hover { height: 110%; width: 100%; left: 5%; z-index: 9; }
.attack { background-image: url(/img/bass-attack.jpg); width: 10%; height: 10%; bottom: -5%; left: 20%; transition: all 0.5s; z-index: 8; }
.attack:hover { height: 110%; width: 100%; left: 15%; z-index: 9; }
.beach { background-image: url(/img/bass-beach.jpg); width: 10%; height: 10%; bottom: -5%; left: 29%; transition: all 0.5s; z-index: 8; }
.beach:hover { height: 103%; width: 110%; left: -5%; z-index: 9; }
.sand { background-image: url(/img/bass-sand.jpg); width: 10%; height: 10%; bottom: -5%; left: 42%; transition: all 0.5s; z-index: 8; }
.sand:hover { height: 90%; width: 110%; left: -5%; z-index: 9; }
.school { background-image: url(/img/bass-peteetneet.jpg); width: 10%; height: 10%; bottom: -5%; left: 55%; transition: all 0.5s; z-index: 8; }
.school:hover { height: 110%; width: 110%; left: -5%; z-index: 9; }
</style>
