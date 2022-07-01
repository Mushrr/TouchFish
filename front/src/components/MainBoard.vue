<script setup>
// 在这里fetch data
// import { getCurrentInstance } from 'vue';

// 登录需求
// const app = getCurrentInstance();

import { ref, onMounted } from "vue";
import wishToggle from "./wishToggle.vue";
import wishPage from "./wishPage.vue";
import gsap from "gsap";

const data = ref([
  { wId: "QWERTY", wTitle: "吃东西", wDescribe: "吃遍天下所有东西" },
  { wId: "QWERTZ", wTitle: "阅读", wDescribe: "读书是一辈子的事情" },
]);

let currentSelect = ref(data.value[0].wId);

function changeWishList(e, val) {
  // console.log(e, val);

  currentSelect.value = val;
  console.log(currentSelect);
}


onMounted(() => {
  let tween = gsap.timeline();

  tween
    .from(".router-container", {
      x: -100,
      ease: "power2",
      opacity: 0,
    })
    .from(".content-container", {
      display: "absolute",
      x: window.innerWidth,
      ease: "power2",
      opacity: 0,
      overflow: "hidden",
    });
});

// 使用一个计算属性，依照wId获取所有的gId



</script>

<template>
  <div class="container">
    <div class="router-container b-red">
      <!--   这里是同级别路由展示，会以类似于文件树的效果展示出来   -->
      <!--   获取对应信息之后，可以通过当前路由得到的参数信息转到对应的详情展示页面   -->
      <!--   此处是心愿，可以理解为文件夹 -->
      <template v-for="wish in data" :key="wish.wId">
        <wishToggle
          :wId="wish.wId"
          :wTitle="wish.wTitle"
          :wDescribe="wish.wDescribe"
          @update="changeWishList"
        ></wishToggle>
      </template>
    </div>
    <div class="content-container b-grey">
      <!--   这里是router视窗   -->
      <!--   依据不同的心愿会有不同的展示 -->
      <wishPage :wId="currentSelect" ></wishPage>
    </div>
  </div>
</template>



<style>
@import url(../css/cssConfig.css);
@import url(../css/config.css);

.container {
  /* 布局 */
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: minmax(15px, 200px) minmax(400px, auto);
  grid-column-gap: 10px;
  /* 间距 */
  height: inherit;
}

.container > div {
  padding: 10px;
}
</style>
