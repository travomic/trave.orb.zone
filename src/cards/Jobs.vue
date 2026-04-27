<template>
  <Card id="jobs" class="step slide">
    <strong>Climb the ladder of Success<i>!</i></strong>
    <br><br>
    <div class="history">
      Onai.Net &nbsp; <b>'03</b><br>
      <em>Flash, PHP, MySQL, AJAX</em>
      <hr>

      Vehix &nbsp; <b>'06</b><br>
      <em>.NET, MVC, MS-SQL</em>
      <hr>

      Progrexion &nbsp; <b>'07</b><br>
      <em>QCodo, jQuery, Asterix</em>
      <hr>

      Galileo &nbsp; <b>'09</b><br>
      <em>PHP, Zend, Oracle</em>
      <hr>

      Needle &nbsp; <b>'10</b><br>
      <em>Angular, Python, Node, C</em>
      <hr>

      SaltStack &nbsp; <b>'15</b><br>
      <em>RxJS, React, Salt</em>
      <hr>

      Vivint SmartHome &nbsp; <b>'16</b><br>
      <em>CSS4, PWA, Vue2, MongoDB</em>
      <hr>

      Lifeomic &nbsp; <b>'18</b><br>
      <em>AWS, Graph DBs, Typescript</em>
      <hr>

      Vivint / NRG &nbsp; <b>'21</b><br>
      <em>Vue3, Rive, Agentic LLM &amp; SLM</em>
    </div>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#jobs {
  background-image: url(/img/allbiz.jpg);
  background-position: bottom right;
  background-size: contain;
}

.history {
  font-size: 0.8em;
  line-height: 1.2em;
  width: 50%;
}
hr { color: #AAA; }
</style>
