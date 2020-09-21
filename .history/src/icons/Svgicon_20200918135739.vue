<template>
    <div>{{msg}}</div>
</template>
<script>
import { onMounted, reactive, ref } from '@vue/composition-api'
export default {
    name: 'svgIcon',
    setup(){
        const msg = ref('cabbage')
    }    
}
</script>
<style lang='scss' scoped>

</style>