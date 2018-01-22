import moment from './utils/moment'
import id from './utils/uniqueId'
/* eslint-disable no-extend-native */
if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1]
  }
}

export default {
  moment,
  id
}
