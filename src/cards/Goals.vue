<template>
  <Card id="stack" class="step">
    A Few Life Goals →
    <br><br>
    <div class="col-half">
      <strong>Orb</strong><br><em>Strategy game / Rolodex</em><br><br>
      <strong>Visit Wonders</strong><br><em>Pyramids, Temples, Caves…</em><br><br>
      <strong>Architect &amp; Automate</strong><br><em>Home, Rules, Finances</em>
    </div>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#stack {
  background-image: url(/img/old.jpg);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  background-color: #FFF;
}

.col-half {
  width: 50%;
  float: left;
  font-size: 0.8em;
}
</style>
