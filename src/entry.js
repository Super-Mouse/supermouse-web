/**
 * Created by haozo on 2017/7/9.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Header from './components/header.vue';
import Left from './components/left.vue';
import CenterEnterprise from './components/center-ent.vue';
import CenterSelf from './components/center-self.vue';
import CenterFavorite from './components/center-favorite.vue';

Vue.use(VueRouter);

new Vue({
    el: '#app',
    //router : router,
    template: '<div class="main"><myheader></myheader><myleft></myleft><router-view></router-view></div>',
    components: {
        myheader : Header,
        myleft : Left,
        // mycenter : CenterEnt,
    },
    router : new VueRouter({
        routes : [
            { path: '/', redirect: '/ent'},
            { path: '/ent', component: CenterEnterprise},
            { path: '/self', component: CenterSelf},
            { path: '/favorite', component: CenterFavorite},
        ]
    })
});

