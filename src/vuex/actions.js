export default {
  updateTreeState: (store, tree) => {
    store.commit('INIT_TREE_STATE', tree)
  },
  setTreeContent: (store, tree) => {
    store.commit('SET_TREE_CONTENT', tree)
  },
  saveBack: (store, back) => {
    store.commit('SAVE_BACK', back)
  },
  saveParentElement: (store, parentElement) => {
    store.commit('SAVE_PARENT_ELEMENT', parentElement)
  },
  historyCounterIncrease: (store) => {
    store.commit('HISTORY_COUNTER_INCREASE')
  },
  historyCounterDecrease: (store) => {
    store.commit('HISTORY_COUNTER_DECREASE')
  }
}
