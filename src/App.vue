<template>
  <div id="app">
    <impress-demo v-if="showImpress" />
    <nav-bar v-if="!showImpress" />
    <router-view />
  </div>
</template>

<script>
import ImpressDemo from './views/welcome/index.vue'
import { store } from '@/store.js'
import NavBar from '@/components/NavBar.vue'
export default {
  components: { ImpressDemo, NavBar },
  data() {
    return {
    }
  },
  computed: {
    showImpress() {
      return store.showImpress
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
