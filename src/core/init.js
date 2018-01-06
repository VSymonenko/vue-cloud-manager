import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    STORAGE_KEY: 'vue-cloud-manager',
    instance: {
      name: 'PLEASE!',
      format: 'root',
      children: [
        {
          name: 'add',
          children: []
        },
        {
          name: 'your',
          children: []
        },
        {
          name: 'data',
          children: []
        }
      ]
    },
    treeData: {}
  }),
  computed: {
    ...mapGetters([
      'tree',
      'donor'
    ])
  },
  watch: {
    treeData: {
      handler() {
        this.saveTreeStorage()
      },
      deep: true
    }
  },
  created() {
    (this.fetchTreeStorage())
      ? setTimeout(() => {
        this.treeData = this.fetchTreeStorage()
        this.updateTreeState(this.treeData)
      }, 100)
      : this.updateTreeState(this.treeData = Object.assign({}, this.donor, this.instance))
  },
  methods: {
    ...mapActions([
      'updateTreeState'
    ]),
    fetchTreeStorage() {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY))
    },
    saveTreeStorage() {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.treeData))
    }
  }
}
