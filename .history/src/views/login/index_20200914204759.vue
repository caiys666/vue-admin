<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li v-for="item in menuTab" :key="item.id" class="current">{{item.txt}}</li>
            </ul>
        </div>
        
    </div>
</template>
<script>

export default {
    name: 'login',
    data() {
        return {
            menuTab:[
                {txt: '登陆'},
                {txt: "注册"}
            ]
        }
    },
};
</script>

<style lang= 'scss' scoped>
#login{
    height: 100vh;
    background-color: rgb(234, 240, 238);
}
.login-wrap{
    width: 330px;
    margin: auto;
}
.menu-tab{
    text-align: center;
    li{
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #000;
        border-radius: 2px;
    }
}
.current{
    background-color: slategray;
}

</style>
