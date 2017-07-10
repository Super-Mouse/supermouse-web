<template>
    <div class="left">
        <a>企业空间</a>
        <a v-if="member">个人文件</a>
        <a>回收站</a>
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