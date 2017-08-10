<template>
    <div class="left">
        <router-link to="/ent">企业空间</router-link>
        <router-link to="/self">个人文件</router-link>
        <router-link to="/favorite">我的收藏</router-link>
    </div>
</template>

<style>
    .left a{
        float: left;
        clear: both;
    }
</style>
<script>
    module.exports = {
        data: function () {
            return {
                member: true
            }
        }
    }
</script>