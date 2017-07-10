<template>
    <div class="search">
        <input type="text"/><label v-on:click="toDo">高级搜索</label>
        <advanced></advanced>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data: function () {
            return {
                advanced: null
            }
        },
        methods: {
            toDo: function () {
                import('./advanced_search.vue').then(module => {
                    Advanced = module.default;
                });

//                require.ensure([], function(require) {
//                    var foo = require('./advanced_search.vue');
//                }, 'custom-chunk-name');
            }
        }
    }
</script>