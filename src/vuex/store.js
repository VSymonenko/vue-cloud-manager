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
    tree: {},
    treeState: {
      back: [],
      parentElement: [],
      counter: 0,
      treeChoosen: false,
      buffer: {
        element: {},
        item: {}
      }
    },
    treeContent: {},
    defaultTree: {
      id: 0,
      name: 'VUE-CLOUD-MANAGER',
      createTime: '',
      createDate: '',
      modifiedTime: '',
      modifiedDate: '',
      owner: '',
      format: 'root',
      share: '',
      children: [
        {
          id: 1,
          name: 'Fork Template',
          createTime: '19:00:00',
          createDate: '23.12.2017',
          modifiedTime: '19:00:00',
          modifiedDate: '23.12.2017',
          owner: 'me',
          format: 'folder',
          share: 'none',
          children: [{
            id: 2,
            name: 'Fork Template 2 level',
            createTime: '19:03:00',
            createDate: '24.12.2017',
            modifiedTime: '19:03:00',
            modifiedDate: '24.12.2017',
            owner: 'me',
            format: 'folder',
            share: 'none',
            children: [{
              id: 3,
              name: 'Fork Template 3 level',
              createTime: '19:03:05',
              createDate: '24.12.2016',
              modifiedTime: '19:03:05',
              modifiedDate: '24.12.2016',
              owner: 'me',
              format: 'folder',
              share: 'none',
              children: [{
                id: 4,
                name: 'Fork Template 4 level',
                createTime: '11:03:05',
                createDate: '24.10.2016',
                modifiedTime: '11:03:05',
                modifiedDate: '24.10.2016',
                owner: 'me',
                format: 'folder',
                share: 'none',
                children: [{
                  id: 5,
                  name: 'Fork Template 5 level',
                  createTime: '11:31:05',
                  createDate: '24.11.2016',
                  modifiedTime: '11:31:05',
                  modifiedDate: '24.11.2016',
                  owner: 'me',
                  format: 'folder',
                  share: 'none',
                  children: [{
                    id: 6,
                    name: 'Fork Template 6 level',
                    createTime: '11:31:05',
                    createDate: '02.10.2016',
                    modifiedTime: '11:31:05',
                    modifiedDate: '02.10.2016',
                    owner: 'me',
                    format: 'folder',
                    share: 'none',
                    children: []
                  }]
                }]
              }]
            }]
          },
          {
            id: 7,
            name: 'Collection 2 level',
            createTime: '11:31:05',
            createDate: '02.10.2016',
            modifiedTime: '11:31:05',
            modifiedDate: '02.11.2016',
            owner: 'me',
            format: 'folder',
            share: 'none',
            children: []
          },
          {
            id: 8,
            name: 'Fork item',
            createTime: '11:31:05',
            createDate: '03.11.2016',
            modifiedTime: '11:31:05',
            modifiedDate: '03.11.2016',
            owner: 'me',
            format: 'file',
            share: 'none'
          }
          ]
        },
        {
          id: 9,
          name: 'Draft',
          createTime: '07:07:05',
          createDate: '03.11.2010',
          modifiedTime: '07:07:05',
          modifiedDate: '03.11.2010',
          owner: 'me',
          format: 'folder',
          share: 'none',
          children: [
            {
              id: 10,
              name: 'Draft file',
              createTime: '07:08:59',
              createDate: '03.11.2010',
              modifiedTime: '07:08:59',
              modifiedDate: '03.11.2010',
              owner: 'me',
              format: 'file',
              share: 'none'
            }
          ]
        },
        {
          id: 11,
          name: 'root file',
          createTime: '07:18:59',
          createDate: '03.11.2010',
          modifiedTime: '07:18:59',
          modifiedDate: '03.11.2010',
          owner: 'me',
          format: 'file',
          share: 'none'
        }
      ]
    },
    icon: {
      folder18: '<svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      folder48: '<svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      openFolder18: '<svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>',
      openFolder48: '<svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>',
      cloud18: '<svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" ><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>',
      cloud48: '<svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>',
      chevron18: '<svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      expand18: '<svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      rename18: '<svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      copy18: '<svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>',
      delete18: '<svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
      back18: '<svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'
    }
  }
})
