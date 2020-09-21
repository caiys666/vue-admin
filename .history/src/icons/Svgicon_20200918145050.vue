<template>
    <div>
        <!-- <svg :class="svgClass" aria-hidden="true">
            <use :xlink:href='name'></use>
        </svg> -->
        <div>{{ count }}</div>
        <el-button v-on="touch">111</el-button>
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
        const count = ref(10);
        /**
         * computed  监听属性变化
         */
        const plusOne = computed(() => {
            return count.value + 1
        })

        const touch = () => {
            count.value = 20
        }

        return{
            msg,
            plusOne,
            touch
        }
    }    
}
</script>
<style lang='scss' scoped>

</style>