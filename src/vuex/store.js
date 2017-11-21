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
    icon: {
      folder18: '../../static/svg/icons/ic_folder_black_18px.svg',
      folder48: '../../static/svg/icons/ic_folder_black_48px.svg',
      openFolder18: '../../static/svg/icons/ic_folder_open_black_18px.svg',
      openFolder48: '../../static/svg/icons/ic_folder_open_black_48px.svg',
      cloud18: '../../static/svg/icons/ic_cloud_black_18px.svg',
      cloud48: '../../static/svg/icons/ic_cloud_black_48px.svg'
    },
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
            name: 'Fork Template 2 level',
            createTime: 0,
            createDate: 0,
            modifiedTime: 0,
            modifiedDate: 0,
            children: [{
              id: 1,
              name: 'Fork Template 3 level',
              createTime: 0,
              createDate: 0,
              modifiedTime: 0,
              modifiedDate: 0,
              children: [{
                id: 1,
                name: 'Fork Template 4 level',
                createTime: 0,
                createDate: 0,
                modifiedTime: 0,
                modifiedDate: 0,
                children: [{
                  id: 1,
                  name: 'Fork Template 5 level',
                  createTime: 0,
                  createDate: 0,
                  modifiedTime: 0,
                  modifiedDate: 0,
                  children: [{
                    id: 1,
                    name: 'Fork Template 6 level',
                    createTime: 0,
                    createDate: 0,
                    modifiedTime: 0,
                    modifiedDate: 0,
                    children: [{}]
                  }]
                }]
              }]
            }]
          },
          {
            id: 2,
            name: 'Collection 2 level',
            createTime: 0,
            createDate: 0,
            modifiedTime: 0,
            modifiedDate: 0,
            children: [{}]
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
