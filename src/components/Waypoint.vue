<template>
  <p class="waypoint">
    <img v-bind:src="require('../assets/waypoint.png')"></img>
    {{ waypoint }}
  </p>
</template>

<script>
import bosses from '../data/bosses'

export default {
  name: 'Waypoint',
  props: ['name'],
  data: function () {
    return {
      waypoint: ''
    }
  },
  created: function () {
    this.waypoint = bosses[this.name].waypoint
  }
}
</script>

<style>
  .waypoint {
    float: right;
    margin-top: 90px;
    font-weight: bold;
  }
</style>
