<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    wId: String,
    wTitle: String,
    wDescribe: String 
})


defineEmits(["update"]);

</script>


<template>
    <div class="cantSelect" :alt="wDescribe" @click="$emit('update', $event, wId)">{{wTitle}}</div>
</template>


<style>
@import url(../css/config.css);




</style>
