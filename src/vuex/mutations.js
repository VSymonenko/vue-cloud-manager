import * as types from './mutation_types'

export default {
  [types.INIT_TREE_STATE](state, tree) {
    state.tree = tree
    state.treeContent = state.tree
  },
  [types.SET_TREE_CONTENT](state, tree) {
    state.treeContent = tree
  },
  [types.SAVE_BACK](state, back) {
    state.treeState.back.push(back)
  },
  [types.SAVE_PARENT_ELEMENT](state, parentElement) {
    state.treeState.parentElement.push(parentElement)
  },
  [types.HISTORY_COUNTER_INCREASE](state) {
    state.treeState.counter++
  },
  [types.HISTORY_COUNTER_DECREASE](state) {
    state.treeState.counter--
  }
}
