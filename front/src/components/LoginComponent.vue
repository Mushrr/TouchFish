<template>
  <div class="loginContainer cantSelect">
    <div class="touchFish">
      {{ appname }}
    </div>
    <div class="loginBox">
      <div class="username cantSelect">
        <label for="username" :class="[{ red: !isChecked }]">用户名:</label>
        <input
          class="input-blue"
          type="text"
          name="username"
          id="username"
          v-model="uuid"
        /><br />
      </div>
      <div class="password cantSelect">
        <label for="password" :class="[{ red: !isChecked }]">密码:</label>
        <input
          class="input-blue"
          type="password"
          name="password"
          id="password"
          v-model="pwd"
        />
      </div>
      <button class="submitbtn cantSelect" @click="login">submit</button>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import axios from "axios";
import md5 from "md5";

export default {
  name: "login-element",
  props: {
    canIShowUp: {
      default: false,
    },
  },
  data() {
    return {
      appname: "✨TouchFish",
      uuid: "",
      pwd: "",
      isChecked: true,
    };
  },
  methods: {
    clear() {
      this.pwd = "";
    },

    wrong() {
      // shake

      this.isChecked = false;
      this.clear();
      console.log(this.isChecked);
      let tween = gsap.timeline();
      tween.to(".username, .password", {
        x: 6,
        duration: 0.1,
        yoyo: true,
        repeat: 5,
      });
    },
    login() {
      let obj = {
        uuid: this.uuid,
        pwd: md5(this.pwd),
      };
      //
      if (this.loginValidate()) {
        axios
          .post("http://localhost:3000/user/login", obj)
          .then((value) => {
            console.log(value);
            this.$router.push("/dashboard");
          })
          .catch((err) => {
            this.wrong();
            console.log(err); // 在此处对错误处理
          });
      } else {
        this.wrong();
      }
    },
    loginValidate() {
      // 检查规范
      // 检查是否有空格

      if (this.uuid.indexOf(" ") > -1 || this.uuid.indexOf(" ") > -1) {
        return false;
      }

      // 检查是否有存在不合规字符
      let pattern = /[^A-Za-z0-9]/;

      if (pattern.test(this.uuid) || pattern.test(this.pwd)) {
        return false;
      }

      if (
        this.uuid.length >= 8 &&
        this.uuid.length <= 14 &&
        this.pwd.length >= 6
      ) {
        return true; // 允许的格式
      } else {
        return false;
      }
    },
    showUp() {
      gsap.from(".loginContainer", {
        duration: 3,
        opacity: 0,
      });
    },
  },
  watch: {
    uuid() {
      this.isChecked = true;
    },
    pwd(n) {
      if (n != "") {
        this.isChecked = true;
      }
    },
  },
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
  box-shadow: -1.1px -1.1px 23.4px rgba(0, 0, 0, 0.054),
    1.5px 1.5px 44.3px rgba(0, 0, 0, 0.062);
  transition: all 0.5s;
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
  font-family: "PingFang";
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
