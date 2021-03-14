<template>
  <div class="home">
    <home-date class="date-position" />
  </div>
</template>

<script>
import { mutations } from '@/store.js'
import HomeDate from './components/HomeDate.vue'
export default {
  name: 'Home',
  components: {
    HomeDate

  },
  data() {
    return {

    }
  },
  created() {
    mutations.changeValue(false)
    this.$nextTick(() => {
      this.$router.push({ path: '/home' })
    })
  },
  mounted() {
    document.body.style.pointerEvents = 'all'
  }
}
</script>

<style lang='scss' scoped>
.home {
  height: 100%;
  width: 100%;
  position: relative;
}

.date-position {
  margin-top: 5rem;
}
</style>
