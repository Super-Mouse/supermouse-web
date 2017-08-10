<template>
    <div class="center">
        <div class="center-ent">{{msg}}</div>
    </div>
</template>
<style>
    .center .center-ent{
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