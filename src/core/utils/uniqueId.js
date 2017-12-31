const s4 = () => {
  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}
const uniqueId = (id) => {
  let uniq
  switch (id) {
    case 'uniq':
      uniq = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
      break
    case 'share':
      uniq = s4() + s4() + '-' + s4() + '-' + s4()
      break
    default:
      break
  }
  return uniq
}
export default uniqueId
