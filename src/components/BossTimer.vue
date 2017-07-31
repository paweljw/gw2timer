<template>
  <p class="time">
    <BossTime :utc="utc"></BossTime>
  </p>
</template>

<script>
import BossTime from './BossTimer/BossTime.vue'

import moment from 'moment'

export default {
  name: 'BossTimer',
  props: ['offset'],
  components: {
    BossTime
  },
  data: function () {
    return {
      utc: ''
    }
  },
  created: function () {
    let hours = Math.floor(this.offset / 60)
    let minutes = this.offset - hours * 60
    this.utc = moment.utc().hour(hours).minute(minutes)
  }
}
</script>

<style>
p.time {
  font-size: 150%;
}

.hour {
  font-size: 130%;
}
</style>
