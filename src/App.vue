<template>
  <div id="app">
    <template v-for="bosses, time in bossList">
      <template v-for="name in bosses">
        <boss :time="time" :name="name"></boss>
      </template>
    </template>
  </div>
</template>

<script>
import Boss from './components/Boss.vue'
import times from './data/times'
import moment from 'moment'

export default {
  name: 'app',
  components: {
    Boss
  },
  data: function () {
    return {
      bossList: {},
      interval: ''
    }
  },
  created: function () {
    this.setBossList()
    this.interval = setInterval(this.setBossList.bind(this), 60000)
  },
  methods: {
    offset: function () {
      let offset = moment.utc().hour() * 60 + moment.utc().minute()
      while (offset % 15 !== 0) {
        offset -= 1
      }
      return offset
    },
    setBossList: function () {
      let bosses = {}
      for (let i = 0; i <= 10; i++) {
        let offset = this.offset() + i * 15
        bosses[offset] = times[offset]
      }
      this.bossList = bosses
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'gw2';
  src: url('./assets/gw.ttf');
}
body {
  font-family: 'Lato', Arial, sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('./assets/pattern1.jpg');
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
}
</style>
