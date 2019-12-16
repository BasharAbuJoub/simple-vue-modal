<template>
    <div>
        <a v-if="!alert" @click.prevent="show" class="modal-button" :class="btnClass">{{btnText}}</a>
        <div class="modal-overlay" :class="{'modal-active' : active}">
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
    props: {
        'btnText': String,
        'btnClass': String,
        'alert': {
            type: Boolean,
            default: false
        },
        'time': {
            default: 0
        }
    },
    data: ()=>{
        return {
            active: false,
        }
    },
    mounted(){
        if(this.alert){
            setTimeout(()=>{
                this.show();
            },0);
        }

    },
    methods: {
        show(){
            this.active = true;
            document.querySelector('body').classList.add('stop-scroll');
            if(this.time > 0){
                setTimeout(() => {
                    this.hide();
                }, 1000*this.time);
            }
        },
        hide(){
            this.active = false;
            document.querySelector('body').classList.remove('stop-scroll');
        }

    }
}
</script>

<style type="text/css">
    footer:empty{
        display: none;
    }
    .modal-button{
        color: #04B9FF;
        cursor: pointer;
    }
    .modal-overlay{
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 0;
        padding: 2rem;
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
        visibility: visible;
        opacity: 1;
    }

    .modal-overlay .modal-cancel{
        position: absolute;
        width: 100%;
        height: 100%;

    }

    .modal-box{
        transform: scale(0);
        visibility: hidden;
        opacity: 0;
        transition: transform ease-out 0.2s, opacity ease-out 0.2s, visibility ease-out 0.2s;
        background: white;
        max-width: 56rem;
        position: relative;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-radius: 0.5rem;
        padding: 2.5rem;
        overflow: auto;
        max-height: 100%;
    }


    .modal-active > .modal-box{
        transform: scale(1);
        opacity: 1;
        visibility: visible;
    }

    .modal-box .modal-close{
        position: absolute;
        margin-top: 0.7rem;
        margin-right: 1.25rem;
        top: 0;
        right: 0;
        font-size: 1.5rem;
    }
    .modal-close:focus{
        outline: none;
    }
</style>
