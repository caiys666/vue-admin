<template>
    <div>
        <!-- <svg :class="svgClass" aria-hidden="true">
            <use :xlink:href='name'></use>
        </svg> -->
        {{count}}
        <button :@click="aaa">111</button>
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
            required: true,
            validator: (value) => {
                return value >= 0
            }
        },
        className:{
            type: String, //定义接收的类型
            default:'qqqqq',
        }
    },
    setup(props,{root,refs}){
        console.log(props.iconClass)
        const msg = ref('cabbage');
        const count = ref(10)
        /**
         * computed  监听属性变化
         */
        const plusOne = computed(() => {
            return count.value+1
        })

        const aaa = () => {
            count.value = 20
        }

        return{
            msg,
            count,
            aaa
        }
    }    
}
</script>
<style lang='scss' scoped>

</style>