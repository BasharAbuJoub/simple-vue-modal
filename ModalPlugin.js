let Plugin = {
    install: function(Vue, options = {}){
        Vue.component('modal', require('./ModalComponent.vue').default);
    }
};

export default Plugin;
