<template>
    <div class="center">
        <div>{{msg}}</div>
    </div>
</template>
<style>
    .center{
        height: 100%;
        margin-left: 180px;
        background-color: yellow;
    }
</style>
<script>
    export default{
        data: function () {
            return {msg: '这是企业空间'}
        },
        components: {}
    }
</script>