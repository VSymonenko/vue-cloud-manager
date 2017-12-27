import getters from './getters'

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
  historyCounterDecrease: (store) => {
    store.commit('HISTORY_COUNTER_DECREASE')
  },
  setHistoryCounter: (store) => {
    const offset = getters.treeState(store.state).back.length
    store.commit('HISTORY_COUNTER_SET', offset)
  },
  saveToBufferElement: (store, element) => {
    store.commit('SAVE_TO_BUFFER_ELEMENT', element)
  },
  saveToBufferItem: (store, item) => {
    store.commit('SAVE_TO_BUFFER_ITEM', item)
  },
  clearBufferItem: (store) => {
    store.commit('CLEAR_BUFFER_ITEM')
  },
  saveHistory: (store, item) => {
    store.commit('SVAE_HISTORY', item)
  },
  saveBranch: (store, item) => {
    store.commit('RECORD_BRANCH', item)
  },
  clearBranch: (store) => {
    store.commit('CLEAR_BRANCH')
  }
}
