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
  },
  [types.HISTORY_COUNTER_SET](state, position) {
    state.treeState.counter = position
  },
  [types.SAVE_TO_BUFFER_ELEMENT](state, element) {
    state.treeState.buffer.element = element
  },
  [types.SAVE_TO_BUFFER_ITEM](state, item) {
    state.treeState.buffer.item = item
  },
  [types.CLEAR_BUFFER_ITEM](state) {
    state.treeState.buffer.item = {}
  },
  [types.SVAE_HISTORY](state, item) {
    state.treeState.history.push(item)
  },
  [types.RECORD_BRANCH](state, item) {
    state.treeState.recordBranch.push(item)
  },
  [types.CLEAR_BRANCH](state) {
    state.treeState.recordBranch = []
  }
}
