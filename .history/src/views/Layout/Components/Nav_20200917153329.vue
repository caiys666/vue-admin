<template>
    <div id="nav-wrap">
        <el-menu 
            default-active="1-4-1"
            class="el-menu-vertical-demo" 
            @open="handleOpen" @close="handleClose" 
            :collapse="isCollapse"
            background-color="transparent"
            text-color="#fff"
            active-text-color="#fff">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import { onMounted, reactive, ref } from '@vue/composition-api'
export default {
    name:'navMenu',
    setup(props,{root, refs}){
        //data数据
        const isCollapse = ref(true);
        const routers = reactive(root.$router.options.routers)
        console.log(root.$router);
        let handleOpen = (key, keyPath) => {
        console.log(key, keyPath);
      };
        let handleClose = (key, keyPath) => {
        console.log(key, keyPath);
      };
      return{
          isCollapse,
          handleOpen,
          handleClose
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/config.scss';
#nav-wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: $navMenu;
    height: 100vh;
    background-color:#2E2E2C;
}

</style>