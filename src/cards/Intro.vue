<template>
  <Card id="intro" class="step slide">
    <strong class="full-name" tabindex="-1">Travis Barney</strong>
    <br><br><br><br>
    <small>Design<br>Technologist</small>

    <i class="pic trave"></i>
    <var class="date june-2017" data-date="2017-06-22">June 2017</var>
    <var class="date april-2026" data-date="2026-04-27">April 2026</var>

    <i class="pic cycle"></i>
    <i class="pic timeline" tabindex="-1"></i>
    <span class="arc-title stage-7">
      <var class="year">2021</var>
      <strong class="label">HERMIT</strong>
    </span>
    <svg class="arc span-7" viewBox="-10 -10 220 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <!-- <rect x="0" y="0" width="200" height="100" fill="none" /> -->
      <path d="M 50,0 Q 100,0 100,50 Q 100,100 150,100 Q 200,100 200,50" />
      <circle cx="50"  cy="0" r="5" />
      <circle cx="100" cy="50" r="5" />
      <circle cx="150" cy="100" r="5" />
      <circle cx="200" cy="50" r="10" />
    </svg>
    <small class="disclaimer">
    * The opinions expressed in this slideshow may not reflect the views of Vivint or its employees…<br><br>Viewer discretion is advised.
    </small>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#intro {
  background-image: url(/img/digest.jpg);
  background-position: right;
}

.full-name {
  display: block;
  background: #fef9e2;
  position: absolute;
  width: 83%;
  font-size: 125px;
  font-family: times;
  top: 0.09em;
  color: black;
  line-height: 1.03;
  opacity: 0;
  transition: opacity 1s;
  z-index: 2;

  &:hover {
    opacity: 1;
    cursor: default;
  }
}

.disclaimer {
  font-size: 15px;
  display: block;
  line-height: 16px;
  color: #AAA;
  position: absolute;
  width: 225px;
  bottom: 160px;
  left: 160px;
}

.trave {
  background-image: url(/img/trave-happy.png);
  width: 24%;
  height: 24%;
  top: 0;
  left: 5%;
  z-index: 1;
  transition: opacity 0.3s;
  opacity: 1;
}

.june-2017,
.april-2026 {
  position: absolute;
  color: blue;
  font-size: 16px;
  top: 149px;
  left: 320px;
  text-transform: uppercase;
  font-family: courier;
  opacity: 0;
  transition: opacity 2s;

  &::before {
    content: '';
    background: rgba(255,0,0, 0.7);
    width: 112px;
    height: 2px;
    position: absolute;
    top: -5px;
    left: -18px;
  }
}

.april-2026 {
  color: black;
  top: 172px;
  left: 320px;
}

.cycle {
  background-image: url(/img/cycle.jpg);
  height: 59%;
  width: 16%;
  left: 0;
  bottom: 0;
}

.timeline {
  background-image: url(/img/timeline.jpg);
  height: 15%;
  width: 80%;
  left: 0;
  bottom: 0;
}

:deep(.pic) {
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
}

.arc.span-7 {
  position: absolute;
  left: 350px;
  top: 605px;
  width: 155px;
  height: 85px;
  /* background: rgba(255,0,0, 0.25); */

  & path {
    fill: none;
    stroke: rgba(127, 127, 127, 0.75);
    stroke-width: 3;
    stroke-dasharray: 240;
    stroke-dashoffset: 240;
  }

  & circle {
    fill: rgba(0,0,0, 0.5);
    stroke: rgba(255, 0, 0, 0.5);
    stroke-width: 3;
    opacity: 0;
  }
}

.arc-title.stage-7 {
  position: absolute;
  left: 435px;
  top: 610px;

  & .year {
    color: red;
    font-size: 12px;
    font-family: courier;
    font-weight: lighter;
    opacity: 0;
    transition: opacity 0s;
  }
  & .label {
    color: black;
    display: block;
    font-size: 12px;
    font-family: sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 1;
    padding-left: 4px;
    opacity: 0;
    transition: opacity 0s;
  }
}

.full-name {
  &:hover {
    & ~ .trave { opacity: 0; }
    & ~ .june-2017 { opacity: 1; }

    &:focus {
      & ~ .april-2026 { opacity: 1; }
    }
  }
}

.pic.timeline {
  &:hover ~ .span-7 {
    & circle {
      animation: fade-in 0.3s ease-out forwards;

      &:nth-of-type(1) { animation-delay: 0s; }
      &:nth-of-type(2) { animation-delay: 0.25s; }
      &:nth-of-type(3) { animation-delay: 0.50s; }
      &:nth-of-type(4) { animation-delay: 0.75s; }
      &:nth-of-type(5) { animation-delay: 1s; }
    }

    & path {
      animation: trace-wave 1s ease-in-out forwards;
    }
  }
  &:hover {
    & ~ .stage-7 .year { transition: opacity 2s; opacity: 1;}
    & ~ .stage-7 .label { transition: opacity 3s; opacity: 1; }
  }
}

@keyframes trace-wave {
  to { stroke-dashoffset: 0; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
</style>
