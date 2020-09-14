<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li class="current">登陆</li>
                <li>登陆</li>
            </ul>
        </div>
        
    </div>
</template>
<script>

export default {};
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
