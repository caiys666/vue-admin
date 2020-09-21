<template>
    <div>
        <!-- <svg :class="svgClass" aria-hidden="true">
            <use :xlink:href='name'></use>
        </svg> -->
    </div>
</template>
<script>
import { onMounted, reactive, ref } from '@vue/composition-api'
export default {
    name: 'svgIcon',
    // props:['iconClass', 'className'],
    props:{
        iconClass:{
            type: String, //定义接收的类型
            default:'qqqqq',
            required: true
        }
    },
    setup(props,{root,refs}){
        console.log(props.iconClass)
        const msg = ref('cabbage');
        return{
            msg,
        }
    }    
}
</script>
<style lang='scss' scoped>

</style>