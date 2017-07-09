<template>
    <div class="header">
        <div>{{msg}}</div>
    </div>
</template>
<style>
    .header{
        height: 56px;
        background-color: #157bf8;
        border-bottom: 1px solid #ccc;
    }
</style>
<script>
export default{
    data: function () {
        return {msg: 'Lenovo'}
    },
    components: {}
}
</script>