<template>
  <span>{{ difference }}</span>
</template>

<script>
import TimeOffsetCalculator from '../../lib/TimeOffsetCalculator.js'

export default {
  name: 'BossCountdown',
  props: ['utc'],
  data: function () {
    return {
      offsetCalculator: '',
      difference: '',
      interval: ''
    }
  },
  created: function () {
    this.offsetCalculator = new TimeOffsetCalculator(this.utc)
    this.recalculateDifference()
    this.interval = setInterval(this.recalculateDifference.bind(this), 1000)
  },
  methods: {
    recalculateDifference: function () {
      this.difference = this.offsetCalculator.inWords()
    }
  }
}
</script>
