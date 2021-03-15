<template>
  <div class="collection">
    <video id="bgvid" playsinline autoplay muted loop>
      <source src="http://thenewcode.com/assets/videos/after.webm" type="video/webm">
      <source src="http://thenewcode.com/assets/videos/after.mp4" type="video/mp4">

    </video>
    <div id="polina">
      <h1>来这里看个电影吧</h1>
      <p>电影来自http://thenewcode.com/assets/videos/after.mp4
      </p><p><a href="http://thenewcode.com/777/Create-Fullscreen-HTML5-Page-Background-Video" target="blank">我也想试试</a>
      </p>
      <p>每部电影可能会让你收货不同的情绪，一部电影往往让你惊喜的是，身在其中不自觉的笑容和眼泪同在。也许生活中不缺乏电影里的情节，我们缺的是电影渲染出来的氛围，比如恰当的音乐，演员特写的镜头，远近切换的景的等等，我们跟着开心揪心,反反复复。
      </p>
      <p>相信大多数人都会幻想过自己是电影中主人公，或者曾经在梦里自导自演一出戏，因为电影里有我们向往的特异功能，有我们期待的美好爱情，有过去不曾经历的真实事件改编，也有对未来世界的无限幻想。电影里的世界从黑白变成彩色，我们的心也由此跟着灿烂鲜活，它丰富我们的精神生活，在相对平衡的时空里找到一个让灵魂可以栖息的场所。</p>
      <p>我常常跟人说，我喜欢看电影，但我其实看片不算多，喜欢的电影类型不限，除了恐怖片，只要是我想看的，无论是电影院还是在客厅里的沙发，有幽暗的灯光和一杯热乎的（奶）茶便已足够。有些电影会看个两三遍，因为确实拍的好，也因为当时的心境适合再看一遍，我需要电影让我逃避现在的情绪，也许会陷入更为悲伤的情绪，但没关系，至少电影的寓意令人深思的。在电影的世界里，我们看到的是平凡生活，战争与灾难，爱情家庭的得与不得，引出的终将是在这个世界上个人也就是我站在此的横向与纵向的思考。那些未去过的国家和城市风景，再加一层滤镜带给你的视觉盛宴也是甚好的。</p>
      <button>暂停</button>
    </div>
  </div>
</template>

<script>
import { mutations } from '@/store.js'
export default {
  name: 'Collection',
  created() {
    mutations.changeValue(false)
    this.$nextTick(() => {
      this.$router.push({ path: '/collection' })
    })
  },
  mounted() {
    var vid = document.getElementById('bgvid')
    var pauseButton = document.querySelector('#polina button')

    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      vid.removeAttribute('autoplay')
      vid.pause()
      pauseButton.innerHTML = 'Paused'
    }

    function vidFade() {
      vid.classList.add('stopfade')
    }

    vid.addEventListener('ended', function() {
      // only functional if "loop" is removed
      vid.pause()
      // to capture IE10
      vidFade()
    })

    pauseButton.addEventListener('click', function() {
      vid.classList.toggle('stopfade')
      if (vid.paused) {
        vid.play()
        pauseButton.innerHTML = '暂停'
      } else {
        vid.pause()
        pauseButton.innerHTML = '继续'
      }
    })
  }

}
</script>

<style lang='scss' scoped>
video {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
 background: url('//demosthenes.info/assets/images/polina.jpg') no-repeat;
  background-size: cover;
  transition: 1s opacity;
}
.stopfade {
   opacity: .5;
}

#polina {
  font-family: Agenda-Light, Agenda Light, Agenda, Arial Narrow, sans-serif;
  font-weight:100;
  background: rgba(0,0,0,0.3);
  color: white;
  padding: 1rem;
  width: 33%;
  margin:1rem;
  float: right;
  font-size: 0.8rem;
}
h1 {
  font-size: 3rem;
  text-transform: uppercase;
  margin-top: 0;
  letter-spacing: .3rem;
}
#polina button {
  display: block;
  width: 80%;
  padding: .4rem;
  border: none;
  margin: 1rem auto;
  font-size: 1.3rem;
  background: rgba(255,255,255,0.23);
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: .3s background;
}
#polina button:hover {
   background: rgba(0,0,0,0.5);
}

a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  background:rgba(0,0,0,0.5);
  padding: .5rem;
  transition: .6s background;
}
a:hover{
  background:rgba(0,0,0,0.9);
}
@media screen and (max-width: 500px) {
  div{width:70%;}
}
@media screen and (max-device-width: 800px) {
  html { background: url(https://thenewcode.com/assets/images/polina.jpg) #000 no-repeat center center fixed; }
  #bgvid { display: none; }
}
</style>
