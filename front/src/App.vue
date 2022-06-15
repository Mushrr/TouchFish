<script setup>
  import { ref } from 'vue'
  const msg = ref('Welcome To TouchFish')

  // let height = ref(window.innerHeight);
</script>

<template>
  <div class="init">✨ Just Begin: {{msg}}
  </div>

</template>

<style>

  * {
    margin: 0;
    padding: 0;
  }

  .init {
    display: grid;
    font: normal 400 3rem 'MicroSoftYaHei';

    height: 100vh;
    width: 100vw;
    text-align: center;

    align-content: center;
    justify-content: center;

  }
</style>
