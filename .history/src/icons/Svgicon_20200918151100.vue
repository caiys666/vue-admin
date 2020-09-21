<template>
    <div>
        <svg :class="svgClass" aria-hidden="true">
            <use :xlink:href='name'></use>
        </svg>
    </div>
</template>
<script>
import { computed, onMounted, reactive, ref } from '@vue/composition-api'
export default {
    name: 'svgIcon',
    // props:['iconClass', 'className'],
    props:{
        iconClass:{
            type: String, //定义接收的类型
            default:'qqqqq',
        },
        className:{
            type: String, //定义接收的类型
            default:'qqqqq',
        }
    },
    setup(props,{root,refs}){
        console.log(props.iconClass)
        const msg = ref('cabbage');
        const iconName = componend(() => `#icon-${props.iconClass}`)
        /**
         * computed  监听属性变化
         */
        

        return{
            msg,
        }
    }    
}
</script>
<style lang='scss' scoped>

</style>