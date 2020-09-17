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
            <el-submenu v-for="(item,index) in routers" :key="item.id" :index="index">
                <!--一级菜单-->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{item.meta.name}}</span>
                </template>
                <el-menu-item-group>
                    <!--二级菜单-->
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
        const isCollapse = ref(false);
        const routers = reactive(root.$router.options.routers)
        
        let handleOpen = (key, keyPath) => {
            console.log(key, keyPath);
        };
        let handleClose = (key, keyPath) => {
            console.log(key, keyPath);
        };
        return{
          isCollapse,
          handleOpen,
          handleClose,
          routers
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