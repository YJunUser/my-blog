<template>
  <div id="app">
    <impress-demo v-if="showImpress" />
    <keep-alive v-else><nav-bar /></keep-alive>
    <keep-alive><router-view /></keep-alive>

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
