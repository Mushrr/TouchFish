<script setup>
import { defineProps, defineEmits } from 'vue';


defineProps({
    gId: String
})


defineEmits(["goalPageShow"])
// const data = fetch(props);

// 定义点击事件，触发后在父组件执行回调函数，生成一个goalPage，并上浮显示，
// unmount的时候退出

</script>


<template>
    <div class="goal-container" @click="$emit('goalPageShow', gId)">
        <span class="goal-icon">
            🍎{{gId}}
        </span>
        <div>名称</div>
        <div>打卡情况</div>
        <!-- 可以在此定义立即打卡 -->
        <!-- 可以用progress bar来记录 -->
    </div>
</template>


<style>

.goal-container {
    border: 1px dashed grey;
}

</style>
