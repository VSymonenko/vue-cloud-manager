export default {
  defaultTree: state => state.defaultTree,
  icon: state => state.icon,
  tree: state => state.tree,
  treeContent: state => state.treeContent,
  treeState: state => state.treeState,
  historyCounter: state => state.treeState.counter,
  contentBuffer: state => state.treeState.buffer
}
