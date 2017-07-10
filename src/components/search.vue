<template>
    <div class="search">
        <input type="text"/><label v-on:click="toDo">高级搜索</label>
        <component v-bind:is="advanced"></component>
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
                this.advanced = "first";
//                import('./advanced_search.vue').then(module => {
//                    Advanced = module.default;
//                });
//                require.ensure([], function(require) {
//                    var foo = require('./advanced_search.vue');
//                }, 'custom-chunk-name');
            }
        },
        components: {
//            first: function () {
//                //异步组件写法
//                import('./advanced_search.vue').then(module => {
//                    return module;
//                });
//            }
            first: (function () {
                return import('./advanced_search.vue');
            })
        }
    }
</script>