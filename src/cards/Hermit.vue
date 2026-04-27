<template>
  <Card id="hermit" class="step slide">
    <strong>2021-2028</strong> &nbsp; <small>42+ years old.</small><br>
    • COVID<br>
    • Empty Nesters<br>
    • Arts/Crafts/Hobbies...<br>

    <i class="pic alone"></i>

    <i class="pic olive"></i>
    <i class="pic plum"></i>
    <i class="pic trav-baby-daisy"></i>
    <i class="pic trav-daisy"></i>
    <i class="pic bass-daisy"></i>
    <i class="pic bass-pudding"></i>
    <i class="pic pudding"></i>

    <i class="pic bass-utah"></i>
    <i class="pic dad-bowl"></i>
    <i class="pic crest"></i>
    <i class="pic yoda"></i>

    <i class="pic trav-grump"></i>
    <i class="pic trav-laura"></i>
  </Card>
</template>

<script setup>
import Card from '../Card.vue'
</script>

<style scoped>
#hermit {
  background-image: url(/img/crab.jpg);
  background-position: bottom left;
}

.alone {
  background-image: url(/img/2026/alone.jpg);
  mix-blend-mode: multiply;
  width: 25%;
  height: 95%;
  top: 0;
  right: 0;
}

.pic {
  transition: all 0.5s;
  z-index: 8;
  &:hover { z-index: 9; }
}

.olive { background-image: url(/img/2026/olive.jpg); width: 10%; height: 10%; left: -2%; top: 20%;  }
.olive:hover { height: 110%; width: 72%; top: -5%;  }
.plum { background-image: url(/img/2026/plum.jpg); width: 10%; height: 10%; left: -2%; top: 32%;  }
.plum:hover { height: 110%; width: 92%; top: -5%;  }
.trav-baby-daisy { background-image: url(/img/2026/trav-baby-daisy.jpg); width: 10%; height: 10%; left: -2%; top: 44%;  }
.trav-baby-daisy:hover { height: 110%; width: 92%; top: -5%;  }
.trav-daisy { background-image: url(/img/2026/trav-daisy.jpg); width: 10%; height: 10%; left: -2%; top: 56%;  }
.trav-daisy:hover { height: 110%; width: 92%; top: -5%;  }
.bass-daisy { background-image: url(/img/2026/bass-daisy.jpg); width: 10%; height: 10%; left: -2%; top: 68%;  }
.bass-daisy:hover { height: 110%; width: 92%; top: -5%;  }
.bass-pudding { background-image: url(/img/2026/bass-pudding.jpg); width: 10%; height: 10%; left: -2%; top: 80%;  }
.bass-pudding:hover { height: 110%; width: 92%; top: -5%;  }
.pudding { background-image: url(/img/2026/pudding.jpg); width: 10%; height: 10%; left: -2%; top: 92%;  }
.pudding:hover { height: 110%; width: 92%; top: -5%;  }

.bass-utah { background-image: url(/img/2026/bass-utah.jpg); width: 10%; height: 10%; right: -5%; top: 10%;  }
.bass-utah:hover { height: 110%; width: 72%; top: -5%;  }
.dad-bowl { background-image: url(/img/2026/dad-bowl.jpg); width: 10%; height: 10%; right: -5%; top: 22%;  }
.dad-bowl:hover { height: 110%; width: 72%; top: -5%;  }
.crest { background-image: url(/img/2026/barney-crest.jpg); width: 10%; height: 10%; right: -5%; top: 34%;  }
.crest:hover { height: 110%; width: 72%; top: -5%;  }
.yoda { background-image: url(/img/2026/yoda.jpg); width: 10%; height: 10%; right: -5%; top: 46%;  }
.yoda:hover { height: 110%; width: 92%; top: -5%;  }

.trav-grump { background-image: url(/img/2026/trav-grump.jpg); width: 10%; height: 10%; right: -5%; top: 72%;  }
.trav-grump:hover { height: 110%; width: 72%; top: -5%;  }
.trav-laura { background-image: url(/img/2026/trav-laura.jpg); width: 10%; height: 10%; right: -5%; top: 84%;  }
.trav-laura:hover { height: 110%; width: 92%; top: -5%;  }
</style>
