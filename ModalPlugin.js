let Plugin = {
    install: function(Vue, options = {}){
        Vue.component('modal', require('./Component.vue').default);
        Vue.prototype.$activeModal = null;
    }
};

export default Plugin;
