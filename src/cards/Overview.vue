<template>
  <Card id="overview" class="step">
    <div class="url"><small>https://</small>trave.orb.zone</div>
    <div class="contact">
      <small>email/bluesky</small> <b>trave@orb.zone</b><br>
      <small>github.com/</small><b>travomic</b><br>
    </div>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#overview {
  pointer-events: none;
}

small {
  font-size: 60%;
  opacity: 0.3;
  padding-right: 0.5em;
}

.url {
  position: fixed;
  top: -350%;
  font-size: 0.75em;
}

.contact {
  color: #555;
  position: fixed;
  bottom: -250%;
  font-size: 0.5em;

  & small {
    font-size: 0.8em;
    opacity: 0.5;
  }
}

.contact b {
  color: #369;
}
</style>
