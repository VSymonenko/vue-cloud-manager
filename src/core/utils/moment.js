export default {
  getTime() { return new Date().toTimeString().split(' ')[0] },
  getDate() {
    const date = new Date()
    const twoDigits = val => val < 10 ? '0' + val : val
    return twoDigits(date.getDate()) + '.' + twoDigits(date.getMonth() + 1) + '.' + date.getFullYear()
  }
}
