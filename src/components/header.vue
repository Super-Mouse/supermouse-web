<template>
    <div class="header">
        <div>{{msg}}</div>
        <search></search>
    </div>
</template>
<style>
    .header .search{
        float: right;
    }
</style>
<script>
    import Search from './search/search.vue';
    export default{
        data: function () {
            return {msg: 'Lenovo'}
        },
        components: {
            search: Search
        }
    }
</script>