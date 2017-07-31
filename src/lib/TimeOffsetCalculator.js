import moment from 'moment'
import pluralize from './pluralize'
import numberOrNull from './numberOrNull'

export default class {
  constructor (utc) {
    this.utc = utc
  }

  inWords () {
    return [this._hours(), this._minutes(), this._seconds()].filter(element => element !== null).join(', ')
  }

  _hours () {
    let hours = numberOrNull(Math.floor(this._hoursDifference()))
    return pluralize('hour', hours)
  }

  _minutes () {
    let minutes = numberOrNull(Math.floor(this._minutesDifference()))
    return pluralize('minute', minutes)
  }

  _seconds () {
    let seconds = numberOrNull(Math.floor(this._secondsDifference()))
    return pluralize('second', seconds)
  }

  _hoursDifference () {
    return this.utc.diff(moment(), 'hours', true)
  }

  _minutesDifference () {
    return (this._hoursDifference() % 1) * 60
  }

  _secondsDifference () {
    return (this._minutesDifference() % 1) * 60
  }
}
