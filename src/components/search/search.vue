<template>
    <div class="search">
        <input type="text" v-model="inputVal"><label v-on:click="advancedSearchShow">高级搜索</label>
        <advanced-search v-if="show" v-bind:abc="inputVal"></advanced-search>
    </div>
</template>
<style>

</style>
<script>
    import Advanced_search from './advanced_search.vue';
    export default{
        data: function () {
            return {
                inputVal : '',
                show: false
            }
        },
        methods: {
            advancedSearchShow: function () {
                this.show = true;
            }
        },
        components: {
            "advanced-search" : Advanced_search
        }
    }
</script>