<template>
  <div>
    <div :class="['init', 'phone', { disappear: loadFinished }]">
      ✨ Just Begin: {{ msg }}
    </div>
    <div :class="[{ disappear: !loadFinished }]">
      <login-element></login-element>
    </div>
  </div>
</template>

<script>
import loginElement from "./components/LoginComponent.vue";

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
      this.loadFinished = true;
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.init {
  display: grid;
  font: normal 400 4vw "MicroSoftYaHei";

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
