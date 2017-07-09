/**
 * Created by haozo on 2017/7/9.
 */

import Vue from 'vue';
import Header from './components/header.vue';
import Left from './components/left.vue';
import Center from './components/center.vue';

new Vue({
    el: '#app',
    //router : router,
    template: '<div class="main"><myheader></myheader><myleft></myleft><mycenter></mycenter></div>',
    components: {
        myheader : Header,
        myleft : Left,
        mycenter : Center,
    }
});