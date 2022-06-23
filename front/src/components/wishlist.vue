<script setup>
import {ref, defineProps} from "vue";

defineProps({
  title: {
    type: String,
    default: "Title"
  },
  author: {
    type: String,
    default: "author"
  },
  describe: {
    type: String,
    default: "A brief description of current wishlist"
  },
  goals: {
  //  目标类型，还暂时未定义
  }
})


</script>

<template>
  <div class="container">
    <div class="header-container">
      <span class="wishlist-title"></span>
      <span class="wishlist-author"></span>
      <p class="wishlist-describe"></p>
    </div>
    <div class="content-container">
      <!--   goal components that follow with current wishlist   -->
    </div>
  </div>
</template>

<style scoped>

</style>
