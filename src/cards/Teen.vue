<template>
  <Card id="teen" class="step slide">
    <strong>1993-1999</strong> &nbsp; <small>14-20 years old.</small><br>
    • Make games<br>
    • IRC chat &amp; Web pages<br>
    • Draw / Paint / Sculpt<br>
    • Area801.Com<br>
    • Authorize.Net

    <i class="pic process"></i>
    <i class="pic robot"></i>
    <i class="pic life"></i>
    <i class="pic cubes"></i>
    <i class="pic twelve"></i>
    <i class="pic star"></i>
    <i class="pic family"></i>
    <i class="pic mask"></i>
    <i class="pic highschool"></i>
    <i class="pic yearbook"></i>
    <i class="pic graff"></i>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#teen {
  background-image: url(/img/droid.jpg);
  background-position: right;
}

:deep(.pic) {
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
}

.process { background-image: url(/img/process.jpg); width: 22%; height: 50%; left: 48%; top: 0; }
.robot { background-image: url(/img/robot.jpg); width: 50%; height: 55%; bottom: 5%; left: 0; }
.life { background-image: url(/img/life.jpg); width: 20%; height: 55%; bottom: 0; left: 50%; }
.cubes { background-image: url(/img/cubes.jpg); width: 20%; height: 20%; bottom: 0; left: 0; }
.twelve { background-image: url(/img/twelve.jpg); width: 19%; height: 30%; bottom: 37%; left: 31%; }
.star { background-image: url(/img/star.jpg); width: 21%; height: 30%; bottom: 10%; left: 30%; }
.family { background-image: url(/img/barney-fam-90s.jpg); width: 10%; height: 10%; bottom: -5%; left: 40%; transition: all 0.5s; z-index: 8; }
.family:hover { height: 100%; width: 110%; left: -5%; z-index: 9; }
.highschool { background-image: url(/img/highschool.jpg); width: 10%; height: 10%; bottom: -5%; left: 12%; transition: all 0.5s; z-index: 8; }
.highschool:hover { height: 110%; width: 110%; left: 12%; z-index: 9; }
.mask { background-image: url(/img/trave-2000.jpg); width: 10%; height: 10%; bottom: -5%; left: 25%; transition: all 0.5s; z-index: 8; }
.mask:hover { height: 90%; width: 115%; left: -5%; z-index: 9; }
.yearbook { background-image: url(/img/yearbook.jpg); width: 10%; height: 10%; bottom: -5%; left: 60%; transition: all 0.5s; z-index: 8; }
.yearbook:hover { height: 100%; width: 80%; left: 0%; z-index: 9; }
.graff { background-image: url(/img/trave-graff.jpg); width: 10%; height: 10%; bottom: -5%; left: 75%; transition: all 0.5s; z-index: 8; }
.graff:hover { height: 90%; width: 110%; left: 0%; z-index: 9; }
</style>
