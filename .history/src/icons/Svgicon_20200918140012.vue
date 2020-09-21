<template>
    <div>{{msg}}</div>
</template>
<script>
import { onMounted, reactive, ref } from '@vue/composition-api'
export default {
    name: 'svgIcon',
    setup(props,{root,refs}){
        const msg = ref('cabbage'),
        return {
            msg,
        }
    }    
}
</script>
<style lang='scss' scoped>

</style>