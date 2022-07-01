<script setup>
import {defineProps, computed, onMounted} from 'vue';
import goalWishListVue from "./goalWishList.vue";
import { floatUp } from '@/lib/animation/float';


const props = defineProps({
    wId: String
})

console.log(props);
// fetch(props) // ... 获取数据

const currentWishGoalId = computed(() => {
  // 依据
  // fetch(...)

  return [
    "XXXZASD",
    "XXXJHGF",
    "XXXWERT"
  ]
})


function goalPageShow(gId) {
  console.log(gId);
}

onMounted(() => {
    floatUp('.goal-container', {
        duration: 1
    })
})
</script>



<template>
    <div class="wish-container">
        <div class="header-info">
            <div class="w-icon">✨</div>
            <div class="title">{{wId}}</div>
        </div>
        <div class="describe">    A light and beautiful timer which can help you develop good habits. And timer also allows you to do a experiment to check whether this is helpful for your health or feature plan. what's more your can also perpare a 10000 hours deadline and record everyday feeling. Timer is a time plan application, hope it can help you learn more, and be better.</div>
        <template v-for="goal in currentWishGoalId" :key="goal">
            <!-- 一堆goal组件 -->
            <goalWishListVue :gId="goal" @goal-page-show="goalPageShow"></goalWishListVue>
        </template>
    </div>
</template>


<style>
.wish-container {
    display: grid;
    grid-template-rows: 100px auto;
}

.header-info {
    display: grid;
    grid-template-columns: 100px auto;
    height: 100px;
    align-items: flex-end;
}
</style>
