<template>
    <div class="center">
        <div class="center-self">{{msg}}</div>
    </div>
</template>
<style>
    .center .center-self{
        background-color: green;
    }
</style>
<script>
    export default{
        data: function () {
            return {msg: '这是个人文件'}
        },
        components: {}
    }
</script>