<script setup>
import axios from 'axios';
import {onMounted, ref} from 'vue';

// axios

let fileObj = ref(null);
let fileData;

function upload() {
    let formData = new FormData();
    formData.append('file', fileData[0]);
    axios({
        url: "http://localhost:3000/upload",
        data: formData,
        method: "POST",
        headers: {
            "xxx": "XXX"
        }
    })
}

onMounted(() => {
    fileObj.value.addEventListener('input', () => {
        console.log(fileObj.value);
        fileData = fileObj.value.files;
    })
    // 获取
})


</script>


<template>
    <div>
        这是一个上传测试页面
        <input type="file" id="file" ref="fileObj"/>
        <button @click.prevent="upload">上传</button>
    </div>
    
</template>

<style>
</style>
