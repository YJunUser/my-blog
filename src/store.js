import Vue from 'vue'
export const store = Vue.observable({ showImpress: true })

export const mutations = {
  changeValue(bool) {
    store.showImpress = bool
  }
}
