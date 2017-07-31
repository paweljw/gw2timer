<template>
  <div v-bind:class="classes" v-bind:style="background">
    <h1>{{ name }}</h1>

    <Waypoint :name="name"></Waypoint>
    <BossTimer :offset="time"></BossTimer>
  </div>
</template>

<script>
import BossTimer from './BossTimer.vue'
import Waypoint from './Waypoint.vue'

import bosses from '../data/bosses'

export default {
  name: 'boss',
  props: ['time', 'name'],
  components: {
    BossTimer,
    Waypoint
  },
  data: function () {
    return {
      classes: 'boss col-md-6 col-md-offset-3 col-xs-12',
      background: ''
    }
  },
  created: function () {
    this.background = `background: url('${require(`../assets/${this.name.replace(/ /g, '_', true)}.jpg`)}')`
    if (bosses[this.name].epic) this.classes = this.classes + ' hardcore'
  }
}
</script>

<style>
  .boss {
    background-size: cover !important;
    background-position: center !important;
    height: 210px;
    color: #fff;
    text-shadow: 2px 2px 10px black;
  }

  h1 {
    font-size: 370%;
    font-family: 'gw2', Helvetica, Arial, sans-serif;

  }

  .boss.hardcore h1 {
    color: gold;
  }
</style>
