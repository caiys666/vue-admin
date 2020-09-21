<template>
    <div>
        <svg :class="svgClass" aria-hidden="true">
            <use :xlink:href='iconName'></use>
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
        //计算属性  得出结果
        const iconName = computed(() => `#icon-${props.iconClass}`)
        const svgClass = computed(() => {
            if(props.className){
                return `svg-icon ${props.className}`
            }else{
                return `svg-icon`
            }
        })
        /**
         * computed  监听属性变化
         */
        

        return{
            msg,
            iconName,
            svgClass
        }
    }    
}
</script>
<style lang='scss' scoped>
.svg-icon{
    width: 20px;
    height: 1em;
    left: 0;
    margin-top: 20px;
    font-size: 20px;
    position: fixed;
}
</style>