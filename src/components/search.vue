<template>
    <div class="search">
        <input type="text"/><label v-on:click="toDo">高级搜索</label>
    </div>
</template>
<style>

</style>
<script>
    export default{
        methods: {
            toDo: function () {
                alert("aaa");
            }
        }
    }
</script>