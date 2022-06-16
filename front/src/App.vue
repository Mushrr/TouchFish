<template>
  <div>
    <div id="mask" :class="['init', 'phone']">
      ✨ Just Begin: {{ msg }}
    </div>
    <div id="login">
      <loginElement :can-i-show-up="loadFinished"></loginElement>
    </div>
  </div>
</template>

<script>
import loginElement from "./components/LoginComponent.vue";
import gsap from 'gsap';


export default {
  components: {
    loginElement
  },
  data() {
    return {
      msg: "Welcome To TouchFish",
      loadFinished: false
    }
  },
  mounted() {
    const loadHander = new Promise((resolve) => {
      setTimeout(() => {
        console.log('这里')
        resolve();
      }, 1000);
    });
    loadHander.then(() => {
      gsap.to('#mask', {
        duration: 1,
        y: -window.innerHeight,
        ease: 'power2',
      });
      this.loadFinished = true;
      // gsap.from('.touchFish', {
      //   delay: 3,
      //   y: window.innerHeight,
      //   ease: 'power2',
      //   duration: 1,
      //   opacity: 0,
      // })
      // gsap.from('.loginBox', {
      //   y: window.innerHeight,
      //   delay: 3,
      //   ease: 'power2',
      //   duration: 1.5,
      //   opacity: 0
      // })

      let tween = gsap.timeline();

      tween.from('#login', {
        display: 'none',
        y: window.innerHeight,
        opacity: 0,
      }).from('.touchFish', {
        y: window.innerHeight,
        duration: 1,
        fontSize: 0,
        opacity: 0,
      }).from('.loginBox', {
        y: window.innerHeight,
        duration: 0.1,
        height: 0,
        width: 0,
        opacity: 0,
      })
    });
  }
};
</script>

<style>
@import url(./css/font.css);


* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f3f3f3;;
}

#mask {
  position: absolute;
  background-color: #f3f3f3;
}

.init {
  display: grid;
  font: normal 400 4vw "PingFang", "MicroSoftYaHei";

  height: 100vh;
  width: 100vw;
  text-align: center;

  align-content: center;
  justify-content: center;
  transition: all 0.5s;
}

@media screen and (max-width: 500px) {
  .phone {
    font-size: 5vw;
    transition: all 0.5s;
  }
}

.disappear {
  display: none;
}
</style>
