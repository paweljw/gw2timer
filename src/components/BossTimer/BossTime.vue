<template>
  <span v-if="active" class="active">
    ACTIVE
  </span>
  <span v-else>
    {{ localTime }} (<BossCountdown :utc="utc"></BossCountdown>)
  </span>
</template>

<script>
import BossCountdown from './BossCountdown.vue'
import moment from 'moment'

export default {
  name: 'BossTime',
  props: ['utc'],
  components: {
    BossCountdown
  },
  data: function () {
    return {
      localTime: '',
      active: false,
      tick: ''
    }
  },
  created: function () {
    this.localTime = this.utc.local().format('H:mm')
    this.detectActive()
    this.tick = setInterval(this.detectActive.bind(this), 1000)
  },
  methods: {
    detectActive: function () {
      if (moment().isAfter(this.utc)) this.active = true
    }
  }
}
</script>

<style>
@keyframes pulse_animation {
	0% { transform: scale(1); }
	30% { transform: scale(1); }
	40% { transform: scale(1.08); }
	50% { transform: scale(1); }
	60% { transform: scale(1); }
	70% { transform: scale(1.05); }
	80% { transform: scale(1); }
	100% { transform: scale(1); }
}

.active {
	animation-name: pulse_animation;
	animation-duration: 2000ms;
	transform-origin:0% 50%;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
  font-weight: bold;
  font-size: 150%;
  display: inline-block;
}
</style>
