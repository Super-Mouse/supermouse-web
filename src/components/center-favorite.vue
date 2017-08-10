<template>
    <div class="center">
        <div class="center-favorite">{{msg}}</div>
    </div>
</template>
<style>
    .center .center-favorite{
        background-color: orange;
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