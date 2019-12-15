<template>
    <div :id="name" class="overlay">
        <a @click.prevent="closeModal" class="cancel"></a>

        <div class="modal">
            <slot></slot>
            <a href="#" class="close">&times;</a>

            <footer class="tw-mt-6">
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name'],
    methods: {
        closeModal(){
            window.location.hash = '';
        },

    }
}
</script>

<style type="text/css">
    footer:empty{
        display: none;
    }
    .overlay{
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 0;
        @apply tw-p-6 tw-flex tw-fixed tw-overflow-hidden tw-top-0 tw-right-0 tw-left-0 tw-bottom-0 tw-items-center tw-justify-center tw-invisible;
        transition: visibility 0.2s ease, opacity 0.2s ease-in;
    }

    .overlay:target{
        @apply tw-visible tw-opacity-100;
    }

    .overlay .cancel{

        @apply tw-absolute tw-w-full tw-h-full;

    }

    .modal{
        transform: scale(0);
        opacity: 0;
        transition: transform ease-out 0.2s, opacity ease-out 0.2s;
        @apply tw-bg-white tw-max-w-2xl tw-relative tw-shadow-lg tw-rounded-lg
            tw-p-10 tw-overflow-auto tw-max-h-full;
    }

    body + .overlay:target{
        height: 100vh;
        overflow: hidden;
    }

    .overlay:target > .modal{
        transform: scale(1);
        opacity: 1;
    }

    .modal .close{
        @apply tw-absolute tw-mt-2 tw-mr-4 tw-top-0 tw-right-0 tw-text-2xl;
    }
</style>
