<template>
  <div class="container">
    <div id="impress" data-transition-duration="2000">

      <div id="overview" class="step overview" data-x="1350" data-y="100" data-z="100" data-scale="3" data-rotate-y="90">
        <!-- <h1>欢迎来到我的博客</h1> -->
        <h1 class="title slide-bar">欢迎来到我的博客</h1>
        <p class="subtitle slide-bar">我是xiaoyao,一位前端爱好者(按空格继续)</p>
      </div>
      <div id="overview2" class="step overview" data-x="2018" data-y="106" data-z="3018" data-scale="2">
        <div class="landIn">这是我的第一篇个人博客，里面涵盖了很多关于我的信息</div>
      </div>

      <div
        id="step-1"
        class="step"
        data-x="0"
        data-y="0"
        data-z="0"
        data-goto-prev="step-8"
      >
        <div class="about">关于我:
          <div class="abount-content">网名: xiaoyao <br> 职业: 学生 <br> 就读大学: 重庆交通大学 <br> 擅长技术: js, html, css ,vue, html5, css3 <br> 个人简介: 一位无名小生， 凭借着热情和兴趣一直在前端领域学习
          </div>
        </div>
      </div>

      <div id="step-2" class="step" data-x="420" data-y="-70" data-z="-250" data-rotate-z="45" data-rotate-y="-45" data-rotate-order="zyx">
        <p class="phare-content">博客用了大量CSS3的动画，也借鉴了很多网上的美丽又强大的动画</p>
        <p class="phare-content">把鼠标放在下面这张图片上试试: </p>
        <div class="scene"><div class="card">
          <div class="card__face card__face--front">
            <img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg">
          </div>
          <div class="card__face card__face--back">
            <img src="https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg">
          </div>
        </div>
        </div>

      </div>

      <div id="step-3" class="step" data-x="700" data-y="350" data-z="-350" data-rotate-z="90" data-rotate-y="-90" data-rotate-order="zyx">
        <p class="phare-content">我写博客主要是为了能记录生活中的一些趣事，也是为了舒缓下压力，一件事，只要愿意去做并且认真去做，总会发现其中的趣味和意义。我写博客，发现了其中的好处，并且将这美好的感受分享给各位。希望我的博客能带给你一些欢乐!</p>
      </div>

      <div id="step-4" class="step" data-x="422" data-y="780" data-z="-250" data-rotate-z="135" data-rotate-y="-135" data-rotate-order="zyx">
        <button class="btn btn-primary btn-ghost btn-shine btn-position" @click="gohome">
          进去探索关于我的世界
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import '@/assets/css/3D-rotations.css'
import { mutations } from '@/store.js'

export default {
  name: 'Welcome',
  mounted() {
    // eslint-disable-next-line no-undef
    impress().init()
    document.body.style.overflow = 'scroll'
  },
  methods: {
    gohome() {
      mutations.changeValue(false)
      this.$nextTick(() => {
        this.$router.push({ path: '/home' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Lato");
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");
@import url(https://fonts.googleapis.com/css?family=Lato);
 .container {
    font-family: 'PT Sans', sans-serif;
    height: 100vh;

    background: #00000f;
    // color: rgb(102, 102, 102);
    color: white;
 }
 // palette: https://www.materialpalette.com/light-blue/pink

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222;
}

.slide-bar {
  position: relative;
  color: transparent;
  animation: fill-text-white 2s 1.6s forwards;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #35b9f1;
    transform: scaleX(0);
    transform-origin: left;
    animation: slide-in-out 2s cubic-bezier(0.75, 0, 0, 1) forwards;
  }
}

@keyframes slide-in-out {
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  50.1% {
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}

@keyframes fill-text-white {
  to {
    color: white;
  }
}
.title {
   &::before {
      background: #FF4081;
    }
}
.subtitle {
    text-transform: uppercase;
    animation-delay: 3.2s;
    text-align: center;
    &::before {
      background: #03A9F4;
      animation-delay: 2s;
    }
}

.landIn {
  display: flex;
  flex-wrap: wrap;
  line-height: 1.8;
  color: white;
  font-family: Lora, serif;
  white-space: pre;

  span {
    animation: landIn 0.8s ease-out both;
  }
}

@keyframes landIn {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.about {
  color: #000000;
}
.abount-content {
  font-size: 1.5rem;
  line-height: 1.5;
}

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #1A1E23;
}

.btn {
  --hue: 190;
  position: relative;
  padding: 1rem 3rem;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  background-color: hsl(var(--hue), 100%, 41%);
  border: 1px solid hsl(var(--hue), 100%, 41%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &:hover {
    background: hsl(var(--hue), 100%, 31%);
  }

  &-primary {
    --hue: 187;
  }

  &-ghost {
    color: hsl(var(--hue), 100%, 41%);
    background-color: transparent;
    border-color: hsl(var(--hue), 100%, 41%);

    &:hover {
      color: #000000;
    }
  }

  &-shine {
    color: #000000;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        hsla(var(--hue), 100%, 41%, 0.5),
        transparent
      );
      transform: translateX(-100%);
      transition: 0.6s;
    }

    &:hover {
      background: transparent;
      box-shadow: 0 0 20px 10px hsla(var(--hue), 100%, 41%, 0.5);
    }

    &:hover::before {
      transform: translateX(100%);
    }
  }
}
.phare-content {
  color: #000000;
  font-size: 1rem;
  line-height: 1.5;
}
.btn-position {
  position: absolute;
  left: calc(50% - 8rem);
  top: calc(50% - 2rem);
}
.scene {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  perspective: 800px;

  .card {
    position: relative;
    width: 240px;
    height: 300px;
    color: white;
    cursor: pointer;
    transition: 1s ease-in-out;
    transform-style: preserve-3d;

    &:hover {
      transform: rotateY(0.5turn);
    }

    .card__face {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transition: 1s ease-in-out;
      -webkit-box-reflect: below 0
        linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));

      img {
        width: 240px;
        height: 300px;
        object-fit: cover;
      }

      &--back {
        transform: rotateY(0.5turn);
      }
    }
  }
}

</style>
