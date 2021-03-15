<template>
  <li class="navtab-item" :class="{active: isActive}" @click="changeRouter">
    <slot name="img" />
    <slot name="content" />
  </li>
</template>

<script>
export default {
  name: 'NavBarItem',
  components: {

  },
  props: {
    path: {
      type: String,
      default() {
        return ''
      }
    },
    activeIndex: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  mounted() {
    const navtab = document.querySelector('nav.navtab')
    this.$route.path.indexOf(this.path) !== -1 && navtab.style.setProperty(
      '--active-index',
      `${this.activeIndex}`
    )
  },
  methods: {
    changeRouter() {
      this.$router.replace({ path: `${this.path}` })
    }
  }
}
</script>

<style lang='scss' scoped>
   .navtab-item {
      @include center;
      z-index: 2;
      flex-direction: column;
      width: $navtab-item-width;
      height: 100%;
      color: #000000;
      cursor: pointer;
      transition: 0.5s ease;

      svg {
        transition: 0.5s ease;
      }

      span {
        font-size: 20px;
        user-select: none;
        opacity: 0;
        transition: 0.5s ease;
      }

      &.active {
        width: $navtab-overlay-width;

        svg {
          transform: translateY(-10px);
        }

        span {
          opacity: 1;
        }
      }
    }

</style>
