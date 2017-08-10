<template>
    <div class="advanced-search">
        <h1 v-on:click="addMsg">这是：{{abc}}</h1>
    </div>
</template>

<style>
    .advanced-search{
        width: 173px;
        height: 300px;
        background-color: #ccc;
    }
</style>

<script>
    //console.log('The print.js module has loaded! See the network tab in dev tools...');
    export default {
        props: ['abc'],
        data: function () {
            return {
                msg: "哈哈哈"
            }
        },
        methods: {
            addMsg: function () {
                return null;
            }
        }
    }
</script>