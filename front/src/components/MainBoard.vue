<script setup>

</script>

<template>
  <div class="container">
    <div class="router-container b-red">
    <!--   这里是同级别路由展示，会以类似于文件树的效果展示出来   -->
    <!--   获取对应信息之后，可以通过当前路由得到的参数信息转到对应的详情展示页面   -->
    </div>
    <div class="content-container b-grey">
    <!--   这里是router视窗   -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
