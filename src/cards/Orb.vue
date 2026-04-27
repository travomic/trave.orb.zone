<template>
  <Card id="orb" class="step">
    <div class="eco">
      <div class="orb">
        <ul class="face f1">
          <li class="dot a">A</li>
          <li class="dot b">B</li>
          <li class="dot c">C</li>
          <li class="dot d">D</li>
          <li class="dot e">E</li>
        </ul>
        <ul class="face f2">
          <li class="dot a">A</li>
          <li class="dot b">B</li>
          <li class="dot c">C</li>
          <li class="dot d">D</li>
          <li class="dot e">E</li>
        </ul>
        <ul class="face f3">
          <li class="dot a">A</li>
          <li class="dot b">B</li>
          <li class="dot c">C</li>
          <li class="dot d">D</li>
          <li class="dot e">E</li>
        </ul>
        <ul class="face f4">
          <li class="dot a">A</li>
          <li class="dot b">B</li>
          <li class="dot c">C</li>
          <li class="dot d">D</li>
          <li class="dot e">E</li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#orb {
  background-image: url(/img/sextant.png);
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
}

.eco {
  font-family: sans-serif;
  line-height: 16px;
  width: 12em;
  height: 12em;
  border: #000 2px solid;
  position: relative;
}

.eco:hover .orb {
  transform-origin: center;
  transform: translateY(-1em) translateX(-1em) rotateY(60deg) rotateX(90deg);
}

.eco:hover .dot::before,
.eco:hover .dot::after { opacity: 1; }

.orb {
  transform-style: preserve-3d;
  transform: translateY(-1em) translateX(-1em);
  border-color: rgba(0, 0, 255, 0.25) transparent;
  border-width: 1em;
  border-style: solid;
  width: 0;
  position: absolute;
  left: 6em;
  top: 6em;
  transition: all 1s;
}

.face {
  list-style: none;
  margin: 0;
  transform-style: preserve-3d;
}

.face.f2 { opacity: 0.5; transform: rotateX(180deg); }
.face.f3 { opacity: 0.5; transform: rotateY(180deg); }
.face.f4 { transform: rotateX(180deg) rotateY(180deg); }

.eco:hover .face.f2 .dot.a::after,
.eco:hover .face.f4 .dot.a::after {
  opacity: 0;
  background: transparent !important;
}
.eco:active .orb {
  transform: rotateY(-60deg) rotateZ(120deg);
}

.dot {
  margin: 0;
  left: -1em;
  top: -1em;
  position: absolute;
  line-height: 2em;
  text-align: center;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background: rgba(255, 0, 0, 0.5);
  transition: all 1s;
  transform-style: preserve-3d;
}

.dot.a { transform: rotateX(90deg) translateZ(6em); }
.dot.b { transform: rotateX(70deg) translateZ(6em); }
.dot.c { transform: rotateX(50deg) translateZ(6em); }
.dot.d { transform: rotateX(30deg) translateZ(6em); }
.dot.e { transform: rotateX(10deg) translateZ(6em); }

.dot::before,
.dot::after {
  opacity: 0.6;
  left: 0;
  top: 0;
  position: absolute;
  display: block;
  content: "X";
  color: rgba(0, 0, 0, 0.25);
  width: 2em;
  height: 2em;
  border-radius: 50%;
}

.dot::before { transform: rotateY(90deg); background: rgba(0, 255, 0, 0.25); }
.dot::after { transform: rotateX(90deg); background: rgba(0, 0, 255, 0.25); }
</style>
