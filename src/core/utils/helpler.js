const generateComponentTrace = (vm) => {
  let tree = []
  let currentRecursiveSequence = 0
  if (vm._isVue && vm.$parent) {
    while (vm) {
      if (tree.length > 0) {
        let last = tree[tree.length - 1]
        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++
          vm = vm.$parent
          continue
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence]
          currentRecursiveSequence = 0
        }
      }
      tree.push(vm)
      vm = vm.$parent
    }
    return tree
      .map(vm => vm[1])
      .join('\n')
      .trim()
  }
}

export default generateComponentTrace
