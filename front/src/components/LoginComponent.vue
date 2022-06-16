<template>
  <div class="loginContainer cantSelect">
    <div class="touchFish">
      {{ appname }}
    </div>
    <div class="loginBox">
      <div class="username cantSelect">
        <label for="username">用户名:</label>
        <input class="input-blue" type="text" name="username" id="username" v-model="user"/><br />
      </div>
      <div class="password cantSelect">
        <label for="password">密码:</label>
        <input class="input-blue" type="password" name="password" id="password" />
      </div>
      <button class="submitbtn cantSelect" @click="login">
        submit
      </button>
    </div>
  </div>
</template>

<script>
// import gsap from 'gsap';

export default {
  name: "login-element",
  data() {
    return {
      appname: "✨TouchFish",
    };
  },
  methods: {
    login() {
        // ... 登录
    }
  }
};
</script>

<style>
@import url(../css/cssConfig.css);
@import url(../css/font.css);
@import url(../css/input.css);
@import url(../css/config.css);

.touchFish {
  font: normal 700 30px "PingFang", "Microsoft YaHei";
}

.loginContainer {
  display: grid;
  height: 100vh;
  width: 100vw;
  background-color: #f3f3f3;
  align-content: center;
  justify-items: center;

  grid-gap: 100px;
}

.loginBox {
  display: grid;

  justify-items: center;


  width: 30vw;
  height: 200px;
  background-image: linear-gradient(to bottom right, #18c5ff, #19fffb, #18c5ff);
  border-radius: 10px;
  padding: var(--padding-box);
  font-family: var(--font-pingfang);
}

.username,
.password {
    display: column;
    height: 30px;
    margin-top: 15px;
    flex-direction: row;
    align-content: center;
}


.submitbtn {
    font-family: 'PingFang';
    font-weight: 500;
    width: 50%;
    height: 60%;
    border-radius: 5px;
    outline: none;
    border: none;
}

input {
    outline: none;
    padding: var(--padding-box);
} 

@media screen and (max-width: 900px) {
  .loginBox {
    width: 270px;
  }
}

@media screen and (min-width: 1125px) {
  .loginBox {
    width: 338px;
  }
}
</style>
