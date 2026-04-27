<template>
  <Card id="nerd" class="step slide">
    <strong>Nerd @ ❤</strong>
    <br><br>

    Started programming at about 11 years old. &nbsp; <b>'90</b><br>
    <em>IBM 286, GW Basic</em><br>
    <br>

    "Troika", "Mammoth" game making all-nighters. &nbsp; <b>'93</b><br>
    <em>QBasic, mouse, audio, images</em><br>
    <br>

    HTML in High-School &nbsp; <b>'95</b><br>
    <em>mIRC, Geocities</em><br>
    <br>

    Tech Support &nbsp; <b>'98</b><br>
    <em>Win95 MCP</em><br>
    <br>

    Authorize.Net "Web Master" &nbsp; <b>'00</b><br>
    <em>Forms, MD5, GET/POST, JS</em><br>

    <i class="pic meetups"></i>
    <i class="pic kraftwerk"></i>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#nerd {
  background-image: url(/img/mouse.gif);
  background-position: bottom right;
  background-size: inherit !important;
}

:deep(.pic) {
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  transition: all 0.5s;
  z-index: 8;

  &:hover {
    z-index: 9;
  }
}

.meetups {
  background-image: url(/img/wfh/remix-meetup.jpg);
  width: 10%;
  height: 6%;
  right: -5%;
  bottom: 60%;

  &:hover {
    width: 110%;
    height: 70%;
    bottom: 20%;
  }
}

.kraftwerk {
  background-image: url(/img/fun/kraftwerk.jpg);
  width: 10%;
  height: 6%;
  right: -5%;
  bottom: 50%;

  &:hover {
    width: 110%;
    height: 70%;
    bottom: 20%;
  }
}
</style>
