import * as types from './mutation_types'

export default {
  [types.INIT_TREE_STATE](state, tree) {
    state.tree = tree
    state.treeContent = state.tree
  },
  [types.SET_TREE_CONTENT](state, tree) {
    state.treeContent = tree
  }
}
