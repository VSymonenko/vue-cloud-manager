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
    vcmData: {},
    treeData: {},
    sorage: ''
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
    switch (this.storage) {
      case 'local':
        this.loadLocal()
        break
      default:
        this.loadLocal()
        break
    }
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
    },
    loadLocal() {
      setTimeout(() => {
        if (!this.vcmData.name) {
          this.treeData = this.fetchTreeStorage() || Object.assign({}, this.donor, this.instance)
        }
        if (this.vcmData.name && !this.fetchTreeStorage()) {
          this.treeData = Object.assign({}, this.vcmData)
        }
        if (this.fetchTreeStorage()) {
          this.treeData = this.fetchTreeStorage()
        }
        this.updateTreeState(this.treeData)
      }, 50)
    }
  }
}
