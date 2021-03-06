export default {
  icon: state => state.icon,
  tree: state => state.tree,
  treeContent: state => state.treeContent,
  treeState: state => state.treeState,
  historyCounter: state => state.treeState.counter,
  contentBuffer: state => state.treeState.buffer,
  selectionItem: state => state.treeState.buffer.item,
  history: state => state.treeState.history,
  branch: state => state.treeState.recordBranch,
  counterItems: state => state.treeState.counterItems,
  selectedItems: state => state.treeState.selectedItems,
  donor: state => state.donor
}
