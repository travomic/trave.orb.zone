<template>
  <Card id="ddds" class="step">
    <div class="blurb">
      <strong>Data Driven Documents</strong><br>
      Use data to drive the creation and control of dynamic and interactive visualizations.
    </div>
    <div class="blurb">
      <strong>Domain Driven Design</strong><br>
      Set of principles for model integrity.<br>
      <em>Shared Vocabulary</em>
    </div>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#ddds {
  text-shadow: 5px 5px 2px #FFF, -2px -2px 1px #FFF, 3px -2px 2px #FFF;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  background-image: url(/img/chief.jpg);
}

.blurb {
  font-size: 0.75em;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.5em;
  padding: 0.5em;
  margin: 1em 0;
}
</style>
