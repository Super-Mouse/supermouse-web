<template>
    <div class="header">
        <div>{{msg}}</div>
        <search></search>
    </div>
</template>
<style>
    .header{
        height: 56px;
        background-color: #157bf8;
        border-bottom: 1px solid #ccc;
    }
    .header .search{
        float: right;
    }
</style>
<script>
    import Search from './search.vue';
    export default{
        data: function () {
            return {msg: 'Lenovo'}
        },
        components: {
            search: Search
        }
    }
</script>