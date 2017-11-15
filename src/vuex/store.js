import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  mutations,
  getters,
  actions,
  state: {
    defaultTree: {
      id: 0,
      name: 'VUE-CLOUD-MANAGER',
      createTime: 0,
      createDate: 0,
      modifiedTime: 0,
      modifiedDate: 0,
      children: [
        {
          id: 1,
          name: 'Fork Template',
          createTime: 0,
          createDate: 0,
          modifiedTime: 0,
          modifiedDate: 0,
          children: [{
            id: 1,
            name: 'Fork Template 2',
            createTime: 0,
            createDate: 0,
            modifiedTime: 0,
            modifiedDate: 0,
            children: []
          },
          {
            id: 1,
            name: 'Fork item',
            createTime: 0,
            createDate: 0,
            modifiedTime: 0,
            modifiedDate: 0
          }
          ]
        },
        {
          id: 2,
          name: 'Draft',
          createTime: 0,
          createDate: 0,
          modifiedTime: 0,
          modifiedDate: 0,
          children: [
            {
              id: 2,
              name: 'Draft file',
              createTime: 0,
              createDate: 0,
              modifiedTime: 0,
              modifiedDate: 0
            }
          ]
        },
        {
          id: 2,
          name: 'root file',
          createTime: 0,
          createDate: 0,
          modifiedTime: 0,
          modifiedDate: 0
        }
      ]
    }
  }
})
