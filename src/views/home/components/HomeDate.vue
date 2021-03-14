<template>
  <div class="home-date">
    <div class="blog-slider">
      <div class="blog-slider__wrp swiper-wrapper">
        <div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt="">
          </div>
          <div class="blog-slider__content">
            <span class="blog-slider__code">2021年3月14日 二月初二 星期日</span>
            <div class="blog-slider__title">15~26℃</div>
            <div class="blog-slider__text">世界上本无沙漠, 当我想你一次, 便落下一滴沙, 越来越多后，就有了撒哈拉大沙漠.  </div>
            <span class="blog-slider__button">右滑获取更多内容</span>
          </div>
        </div>
        <div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg" alt="">
          </div>
          <div class="blog-slider__content">
            <span class="blog-slider__code">2021年3月14日 二月初二 星期日</span>
            <div class="blog-slider__title">15~26℃</div>
            <div class="blog-slider__text">车站有两个地方最感人, 一个入口, 一个出口, 一个是不想让你走, 一个是等你回来. </div>
            <span class="blog-slider__button">右滑获取更多内容</span>
          </div>
        </div>

        <div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt="">
          </div>
          <div class="blog-slider__content">
            <span class="blog-slider__code">2021年3月14日 二月初二 星期日</span>
            <div class="blog-slider__title">15~26℃</div>
            <div class="blog-slider__text">乱山残雪夜, 孤烛异乡人. </div>
            <span class="blog-slider__button">右滑获取更多内容</span>
          </div>
        </div>

      </div>
      <div class="blog-slider__pagination" />
    </div>
  </div>
</template>

<script>
// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/swiper-bundle.css'
export default {
  name: 'HomeDate',
  components: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {
    // eslint-disable-next-line
    const swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true
      }
    })
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {},
  methods: {

  } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
* {
  box-sizing: border-box;
}

.blog-slider {
    font-family: 'Fira Sans', sans-serif;
    width: 100%;
    position: relative;
    max-width: 90%;
    margin: auto;
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 25px;
    border-radius: 25px;
    height: 400px;
  transition: all .3s;
  .blog-slider__item {
      margin-right: 220px;
  }

  @media screen and (max-width: 992px) {
    max-width: 680px;
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }

  @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 350px;
  }

  &__item {
    display: flex;
    align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

    &.swiper-slide-active {
      .blog-slider__img {
        img {
          opacity: 1;
        transition-delay: .3s;
        }
      }
      .blog-slider__content {

        > * {

        opacity: 1;
        transform: none;

      @for $i from 0 to 15 {
        &:nth-child(#{$i + 1}) {
          transition-delay: $i * 0.1 + 0.3s;
        }
      }

    }
      }
    }

  }

  &__img {
     // width: 40%;
    width: 300px;
    flex-shrink: 0;
    height: 300px;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    border-radius: 20px;
    transform: translateX(-80px);

    overflow: hidden;

    &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
      border-radius: 20px;
    opacity: 0.8;
}

    img {
      width: 100%;
    height: 100%;
    object-fit: cover;
      display: block;
       opacity: 0;
      border-radius: 20px;
    transition: all .3s;
    }

    @media screen and (max-width: 992px) {
      // width: 45%;
    }
    @media screen and (max-width: 768px) {
    transform: translateY(-50%);
      width: 90%;
  }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
     @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 270px;
  }
  }

  &__content {
    // width: 60%;
    padding-right: 25px;
    @media screen and (max-width: 992px) {
      // width: 55%;
    }
    @media screen and (max-width: 768px) {
          margin-top: -80px;
    text-align: center;
    padding: 0 30px;
    }

    @media screen and (max-width: 576px) {
      padding: 0
    }
    > * {
      opacity: 0;
      transform: translateY(25px);
      transition: all .4s;

    }

  }

  &__code {
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 20px;
  }

  &__text {
    color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
  }

  &__button {
        display: inline-flex;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    padding: 15px 35px;
    border-radius: 50px;
    color: #fff;
    box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
    text-decoration: none;
    font-weight: 500;
        justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    @media screen and (max-width: 576px) {
      width: 100%;
    }

  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;

}
  &__pagination {
   position: absolute;
    z-index: 21;
    right: 20px;
    width: 11px!important;
    text-align: center;
    left: auto!important;
    top: 50%;
    bottom: auto!important;
    transform: translateY(-50%);
    @media screen and (max-width: 768px) {
     transform: translateX(-50%);
          left: 50%!important;
      top: 205px;
    width: 100%!important;
    display: flex;
    justify-content: center;
    align-items: center;
    }
     &.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 8px 0;
       @media screen and (max-width: 768px) {
         margin: 0 5px;
       }
}

    .swiper-pagination-bullet {
    width: 11px;
    height: 11px;
    display: block;
    border-radius: 10px;
    background: #062744;
    opacity: 0.2;
      transition: all .3s;
      &-active {
    opacity: 1;
    background: #fd3838;
    height: 30px;
    box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);

        @media screen and (max-width: 768px) {
          height: 11px;
          width: 30px;
        }
}
}

  }

}
</style>
