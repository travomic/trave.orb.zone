<template>
  <Card id="plan" class="step slide">
    <div class="goals">
      <strong class="card-title">DEV Goals</strong><br>
      <br>
      • SurrealDB<br>
      • Game ECS<br>
      • WebMIDI<br>
      • Life Log<br>
    </div>

    <i class="pic light project"></i>

    <i class="pic aeon"></i>
    <i class="pic auth0"></i>
    <i class="pic battle"></i>
    <i class="pic orb"></i>

    <i class="pic dark audio"></i>
    <i class="pic dark draft"></i>
    <i class="pic dark leds"></i>
    <i class="pic dark mpc"></i>

    <div class="summon">
      <i class="potato"></i>
    </div>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#plan {
  background-image: url(/img/dream.jpg);
  background-position: right;
}

.goals {
  position: relative;
  left: -5%;
}

.pic {
  transition: all 0.5s;
  width: 15%;
  height: 15%;
  z-index: 8;

  &:hover {
    width: 100%;
    height: 100%;
    z-index: 9;
  }

  &.dark {
    background-color: #000;
    border-radius: 25%;

    &:hover {
      border-radius: 0;
      box-shadow: 0 0 2em 20em black;
    }
  }

  &.light {
    background-color: #FFF;
    &:hover {
      box-shadow: 0 0 2em 20em white;
    }
  }
}

.project {
  background-image: url(/img/wfh/aeon.jpg);
  bottom: 5%;
  left: 0;
  width: 22%;
  height: 22%;
}

.battle {
  background-image: url(/img/wfh/plan-battle.jpg);
  top: 5%;
  left: 25%;

  &:hover {
    top: -5%;
    left: 20%;
  }
}

.auth0 {
  background-image: url(/img/wfh/plan-auth0.jpg);
  top: 5%;
  right: 5%;

  &:hover {
    top: -5%;
    right: -5%;
  }
}

.aeon {
  background-image: url(/img/wfh/plan-aeon.jpg);
  bottom: 5%;
  left: 25%;

  &:hover {
    bottom: -5%;
    left: 20%;
  }
}

.orb {
  background-image: url(/img/wfh/plan-orb.jpg);
  bottom: 5%;
  right: 5%;

  &:hover {
    bottom: -5%;
    right: -5%;
  }
}

.audio {
  background-image: url(/img/wfh/office-audio.jpg);
  bottom: 47%;
  left: 14%;
  width: 7.3%;
  height: 10%;

  &:hover {
    bottom: -20%;
    right: -5%;
    width: 100%;
    height:140%;
  }
}

.mpc {
  background-image: url(/img/wfh/trave-mpc.jpg);
  bottom: 47%;
  left: 2%;
  width: 10%;
  height: 10%;

  &:hover {
    bottom: -20%;
    right: -5%;
    width: 100%;
    height:140%;
  }
}

.draft {
  background-image: url(/img/wfh/office-draft.jpg);
  bottom: 35%;
  left: 2%;
  width: 6%;
  height: 10%;

  &:hover {
    bottom: -30%;
    right: -5%;
    width: 100%;
    height:140%;
  }
}

.leds {
  background-image: url(/img/wfh/office-leds.jpg);
  bottom: 36%;
  left: 10%;
  width: 10%;
  height: 9.5%;

  &:hover {
    bottom: -30%;
    right: -5%;
    width: 100%;
    height:140%;
  }
}

.summon {
  width: 427px;
  height: 565px;
  border-radius: 0 0 215px 215px;
  overflow: hidden;
  position: absolute;
  left: 38%;
  top: 0;

  & .potato {
    position: relative;
    top: 720px;
    left: -50px;
    display: block;
    background-image: url(/img/fun/potatoe.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 525px;
    height: 720px;
    transition: top 5s ease-in;
  }

  &:hover .potato {
    top: 0;
  }
}
</style>
