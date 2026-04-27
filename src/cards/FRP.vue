<template>
  <Card id="frp" class="step">
    <strong>Functional Programming</strong><br>
    Treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.
    <br><br>
    <strong>Reactive Programming</strong><br>
    Asynchronous event data streams.<br>
    <small><em>(almost) everything can be a stream.</em></small>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#frp {
  text-shadow: 5px 5px 2px #FFF, -2px -2px 1px #FFF, 3px -2px 2px #FFF;
  background-repeat: no-repeat;
  background-size: 72%;
  background-position: right;
  background-color: #FFF;
  background-image: url(/img/fingers.jpg);
}
</style>
