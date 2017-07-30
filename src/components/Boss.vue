<template>
  <div v-bind:class="classes()" v-bind:style="style()">
    <h1>{{ name }}</h1>
    <p class="time">
      <span class="hour">{{ localTime() }}</span> ({{ utcTime().fromNow() }})
    </p>
    <p class="waypoint">
      {{ waypoint() }}
    </p>
  </div>
</template>

<script>
import moment from 'moment'
import bosses from '../data/bosses'

export default {
  name: 'boss',
  props: ['time', 'name'],
  methods: {
    backgroundImage: function () {
      return require(`../assets/${this.name.replace(' ', '_')}.jpg`)
    },
    utcTime: function () {
      let offset = this.time
      let hours = Math.floor(offset / 60)
      let minutes = offset - hours * 60
      return moment.utc().hour(hours).minute(minutes)
    },
    localTime: function () {
      let time = this.utcTime()
      time.local()
      return time.format('H:mm')
    },
    active: function () {
      return moment().isAfter(this.utcTime())
    },
    classes: function () {
      let classes = 'boss col-md-6 col-md-offset-3 col-xs-12 '
      if (this.active()) {
        classes = classes + ' active'
      }
      if (this.hardcore()) {
        classes = classes + ' hardcore'
      }
      return classes
    },
    style: function () {
      return `background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8) ), url('${this.backgroundImage()}')`
    },
    hardcore: function () {
      return bosses[this.name].epic
    },
    waypoint: function () {
      return bosses[this.name].waypoint
    }
  }
}
</script>

<style>
  .boss {
    background-size: cover !important;
    background-position: center !important;
    height: 210px;
    color: #fff;
    margin-bottom: 15px;
  }

  h1 {
    font-size: 370%;
    font-family: 'gw2', Helvetica, Arial, sans-serif;
    text-shadow: 2px 2px 10px black;
  }

  p.time {
    font-size: 150%;
  }

  .boss.active {
    border: 5px solid darkseagreen;
  }

  .boss.hardcore {
    border: 5px solid goldenrod !important;
  }

  .hour {
    font-size: 130%;
  }

  .waypoint {
    float: right;
    margin-top: 35px;
  }
</style>
