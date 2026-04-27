<template>
  <Card id="wiz" class="step slide">
    <strong>2014–2020</strong> &nbsp; <small>35-41 years old.</small><br>
    • 3 dogs, 3 cats, 1 hamster<br>
    • <b>Bass</b> : Cello, Karate, Lagoon<br>
    • <b>Laura</b> : Overstock

    <i class="pic dude"></i>
    <i class="pic molecule"></i>

    <q class="truths">
      <b>2 Truths &amp; 1 Lie</b><br>
      • Blessed by Iron Mike Tyson<br>
      • Clubbed with Shaquille O'Neal<br>
      • Super good cross-country skier<br>
    </q>

    <i class="pic family"></i>
    <i class="pic baseball"></i>
    <i class="pic bass-pups"></i>
    <i class="pic casa-bonita"></i>
    <i class="pic cello"></i>
    <i class="pic karate"></i>
    <i class="pic laura-travis"></i>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#wiz {
  background-image: url(/img/grump.jpg);
  background-position: right;
}

:deep(.pic) { background-size: contain; background-repeat: no-repeat; position: absolute; }
.truths { position: absolute; bottom: 2em; font-size: 0.95em; line-height: 1.5em; }
.dude { background-image: url(/img/dude.jpg); width: 20%; height: 46%; left: 40%; top: 27%; }
.molecule { background-image: url(/img/molecule.jpg); width: 40%; height: 40%; left: 8%; top: 30%; }
.family { background-image: url(/img/barney-2016.jpg); width: 10%; height: 10%; right: -5%; top: 5%; transition: all 0.5s; z-index: 8; }
.family:hover { height: 110%; width: 110%; z-index: 9; }
.baseball { background-image: url(/img/baseball-2016.jpg); width: 10%; height: 10%; right: -5%; top: 15%; transition: all 0.5s; z-index: 8; }
.baseball:hover { height: 110%; width: 90%; top: -5%; z-index: 9; }
.bass-pups { background-image: url(/img/bass-pups.jpg); width: 10%; height: 10%; right: -5%; top: 28%; transition: all 0.5s; z-index: 8; }
.bass-pups:hover { height: 110%; width: 98%; top: -5%; z-index: 9; }
.casa-bonita { background-image: url(/img/casa-bonita.jpg); width: 10%; height: 10%; right: -5%; top: 42%; transition: all 0.5s; z-index: 8; }
.casa-bonita:hover { height: 110%; width: 98%; top: -5%; z-index: 9; }
.cello { background-image: url(/img/cello.jpg); width: 10%; height: 10%; right: -5%; top: 55%; transition: all 0.5s; z-index: 8; }
.cello:hover { height: 110%; width: 98%; top: -5%; z-index: 9; }
.karate { background-image: url(/img/karate.jpg); width: 10%; height: 10%; right: -5%; top: 68%; transition: all 0.5s; z-index: 8; }
.karate:hover { height: 110%; width: 98%; top: -5%; z-index: 9; }
.laura-travis { background-image: url(/img/laura-travis.jpg); width: 10%; height: 10%; right: -5%; top: 80%; transition: all 0.5s; z-index: 8; }
.laura-travis:hover { height: 110%; width: 72%; top: -5%; z-index: 9; }
</style>
