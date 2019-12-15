let Plugin = {
    install: function(Vue, options = {}){
        Vue.component('modal', require('./Component.vue').default);
    }
};

export default Plugin;
