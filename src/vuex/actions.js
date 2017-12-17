export default {
  updateTreeState: (store, tree) => {
    store.commit('INIT_TREE_STATE', tree)
  },
  setTreeContent: (store, tree) => {
    store.commit('SET_TREE_CONTENT', tree)
  },
  saveBack: (store, back) => {
    store.commit('SAVE_BACK', back)
  }
}
