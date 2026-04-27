<template>
  <Card id="time" class="step">
    <div class="year-pie">
      <ul class="quarters">
        <li class="q1">
          <label>Q1</label>
          <ul class="months">
            <li class="m m1">JAN</li>
            <li class="m m2">FEB</li>
            <li class="m m3">MAR</li>
          </ul>
        </li>
        <li class="q2">
          <label>Q2</label>
          <ul class="months">
            <li class="m m4">APR</li>
            <li class="m m5">MAY</li>
            <li class="m m6">JUN</li>
          </ul>
        </li>
        <li class="q3">
          <label>Q3</label>
          <ul class="months">
            <li class="m m7">JUL</li>
            <li class="m m8">AUG</li>
            <li class="m m9">SEP</li>
          </ul>
        </li>
        <li class="q4">
          <label>Q4</label>
          <ul class="months">
            <li class="m m10">OCT</li>
            <li class="m m11">NOV</li>
            <li class="m m12">DEC</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="elements" style="background-image: url(/img/elements.jpg); background-size: contain; background-repeat: no-repeat; width: 35%; height: 26%; position: absolute; top: 0; right: 0;"></div>
    <div class="compact" style="background-image: url(/img/compact.jpg); background-size: contain; background-repeat: no-repeat; width: 40%; height: 36%; position: absolute; right: 0; bottom: 0;"></div>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#time {
  background-image: url(/img/pyramid.jpg);
  background-position: top 36% right;
  background-size: 38%;
  background-repeat: no-repeat;
  background-color: #FFF;
}

.year-pie {
  font-family: sans-serif;
  font-size: 0.5em;
  width: 20em;
  height: 20em;
  position: relative;
}

.year-pie::before {
  content: "";
  position: absolute;
  width: 13.5em;
  height: 13.5em;
  left: 3.25em;
  top: 3.25em;
  box-shadow: 0 0 0 40px #FFF, 0 0 60px 40px #000, inset 0 0 30px #000;
  border-radius: 50%;
}

.year-pie:hover .quarters li { opacity: 0.5; }
.year-pie .quarters li { margin-bottom: 0; width: 10em; height: 10em; position: absolute; }
.year-pie .quarters li:hover { opacity: 1; }
.quarters label { position: absolute; text-shadow: 2px 2px rgba(255, 255, 255, 0.5); color: rgba(0, 0, 0, 0.35); font-weight: bold; font-size: 2.5em; }
.quarters .q1 { top: 0; right: 0; }
.quarters .q2 { bottom: 0; right: 0; }
.quarters .q3 { bottom: 0; left: 0; }
.quarters .q4 { top: 0; left: 0; }
.quarters .q1:hover { border-left: #000 3px dashed; border-bottom: #000 3px dashed; }
.quarters .q2:hover { border-left: #000 3px dashed; border-top: #000 3px dashed; }
.quarters .q3:hover { border-right: #000 3px dashed; border-top: #000 3px dashed; }
.quarters .q4:hover { border-right: #000 3px dashed; border-bottom: #000 3px dashed; }
.quarters > li:hover label { color: #000; }
.quarters .q1 label { right: 0; top: 0; }
.quarters .q2 label { right: 0; bottom: 0; }
.quarters .q3 label { left: 0; bottom: 0; }
.quarters .q4 label { left: 0; top: 0; }
.quarters .months { position: relative; width: 10em; height: 10em; }
.quarters .months .m { position: absolute; font-weight: bold; text-shadow: 2px 2px rgba(255, 255, 255, 0.75); }
.year-pie .quarters .months li { width: 3.3em; height: 2em; text-align: center; position: relative; }
.year-pie .quarters .months li::after { content: ""; width: 0; height: 0; position: absolute; left: 0; top: 2em; border-style: solid; border-width: 6em 1.65em 0 1.65em; }
.quarters .months .m:nth-child(1) { left: 0.25em; top: 2em; transform: rotate(15deg); }
.quarters .months .m:nth-child(2) { left: 3.52em; top: 1.9em; transform: rotate(45deg); }
.quarters .months .m:nth-child(3) { left: 5.4em; top: 3.18em; transform: rotate(75deg); }
.quarters .q1 .months { transform: rotate(0deg); }
.quarters .q2 .months { transform: rotate(90deg); }
.quarters .q3 .months { transform: rotate(180deg); }
.quarters .q4 .months { transform: rotate(270deg); }
.quarters .months .m1::after { border-color: rgba(0, 100, 180, 0.85) transparent; }
.quarters .months .m2::after { border-color: rgba(0, 162, 200, 0.85) transparent; }
.quarters .months .m3::after { border-color: rgba(15, 173, 0, 0.85) transparent; }
.quarters .months .m4::after { border-color: rgba(141, 199, 1, 0.85) transparent; }
.quarters .months .m5::after { border-color: rgba(255, 255, 1, 0.85) transparent; }
.quarters .months .m6::after { border-color: rgba(255, 197, 1, 0.85) transparent; }
.quarters .months .m7::after { border-color: rgba(255, 148, 1, 0.85) transparent; }
.quarters .months .m8::after { border-color: rgba(255, 102, 1, 0.85) transparent; }
.quarters .months .m9::after { border-color: rgba(254, 0, 0, 0.85) transparent; }
.quarters .months .m10::after { border-color: rgba(196, 0, 124, 0.85) transparent; }
.quarters .months .m11::after { border-color: rgba(98, 0, 165, 0.85) transparent; }
.quarters .months .m12::after { border-color: rgba(0, 16, 164, 0.85) transparent; }
</style>
