<template>
  <Card id="hope" class="step slide" tabindex="-1">
    <strong class="card-title">Wrap up...</strong>
    <Awesome class="art blur-art" />
    <Awesome class="art line-art" />
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
import Awesome from "../assets/awesome.svg"
</script>

<style scoped>
#hope {
  background-image: url(/img/knot.png);
  background-position: bottom left;

  &:focus:hover .art :deep(path) {
    animation: dash 2s linear forwards;
  }
}

.card-title {
  font-family: system-ui, sans-serif;
  font-size: 2.25em;
  font-weight: lighter;
  letter-spacing: -1px;
}

.art {
  position: absolute;
  left: 0;
  bottom: 10%;
  width: 111%;

  & :deep(path) {
    stroke-width: .25em;
    stroke-dasharray: 2000;
    stroke-dashoffset: -2000;
    filter: url("#neon");
    stroke: lime;

    &.path-star { animation-delay: 0s; }
    &.path-w    { animation-delay: 1s; }
    &.path-e    { animation-delay: 2s; }
    &.path-s    { animation-delay: 3s; }
    &.path-o    { animation-delay: 4s; }
    &.path-m    { animation-delay: 5s; }
    &.path-e2   { animation-delay: 6s; }
    &.path-underline { animation-delay: 8s; }
  }

  &.line-art :deep(path) {
    stroke: #000 !important;
    filter: none;
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 0; /* negative = draws forward; use 500 for reverse */
  }
}
</style>
