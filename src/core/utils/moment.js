const time = new Date()
const twoDigits = val => val < 10 ? '0' + val : val
const moment = (what) => {
  let x
  switch (what) {
    case 'theTime':
      x = time.toTimeString().split(' ')[0]
      break
    case 'theDate':
      x = twoDigits(time.getDate()) + '.' + twoDigits(time.getMonth() + 1) + '.' + time.getFullYear()
      break
    default:
      break
  }
  return x
}
export default moment
