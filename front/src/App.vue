<script setup>

</script>


<template>
  <div class="main">
    <Transition name="fade" mode="out-in">
      <router-view></router-view>
    </Transition>
  </div>
</template>


<style>

* {
  margin: 0;
  padding: 0;
}

.main {
  height: 100vh;
}

</style>

