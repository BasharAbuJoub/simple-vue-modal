<template>
    <div>
        <button @click.prevent="show" class="btn">Show</button>
        <div :id="name" class="modal-overlay" :class="{'modal-active' : active}">
            <a @click.prevent="hide" class="modal-cancel"></a>

            <div class="modal-box">
                <slot></slot>
                <button @click.prevent="hide" class="modal-close">&times;</button>

                <footer class="tw-mt-6">
                    <slot name="footer"></slot>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name'],
    data: ()=>{
        return {
            active: false,
        }
    },
    methods: {
        show(){
            this.active = true;
            if(this.$activeModal != null)
                this.$activeModal.hide();
            this.$activeModal = this;
            document.querySelector('body').classList.add('stop-scroll');

        },
        hide(){
            this.active = false;
            this.$activeModal = null;
            document.querySelector('body').classList.remove('stop-scroll');

        }

    }
}
</script>

<style type="text/css">
    footer:empty{
        display: none;
    }
    .modal-btn{

    }
    .modal-overlay{
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 0;
        padding: 1.5rem;
        display: flex;
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
        visibility: hidden;
        transition: visibility 0.2s ease, opacity 0.2s ease-in;
    }

    .stop-scroll{
        height: 100vh;
        overflow: hidden;
    }

    @media screen and (min-width: 1024px){
        .stop-scroll{
            padding-right:17px;
        }
    }

    .modal-overlay.modal-active{
        @apply tw-visible tw-opacity-100;
    }

    .modal-overlay .modal-cancel{

        @apply tw-absolute tw-w-full tw-h-full;

    }

    .modal-box{
        transform: scale(0);
        opacity: 0;
        transition: transform ease-out 0.2s, opacity ease-out 0.2s;
        @apply tw-bg-white tw-max-w-2xl tw-relative tw-shadow-lg tw-rounded-lg
            tw-p-10 tw-overflow-auto tw-max-h-full;
    }


    .modal-active > .modal-box{
        transform: scale(1);
        opacity: 1;
    }

    .modal-box .modal-close{
        @apply tw-absolute tw-mt-2 tw-mr-4 tw-top-0 tw-right-0 tw-text-2xl;
    }
</style>
