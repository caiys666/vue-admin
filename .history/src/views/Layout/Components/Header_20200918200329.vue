<template>
    <div id="header-wrap">
        <div class="pull-left header-icon"><svg-icon iconClass="menu" className="menu"/></div>
        <div class="pull-right">
            <div class="user-info pull-left">
                <svg-icon iconClass="person" className="person"/>
                <div class="user">管理员</div> 
            </div>
            <div class=" header-icon pull-left"><svg-icon iconClass="exit" className="exit"/></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header-wrap{
    position: fixed;
    top: 0;
    right: 0;
    left: $navMenu;
    height: 75px;
    background-color: #fff;
    -webkit-box-shadow: 0 3px  16px 0  rgba(0, 0, 0, .1);
    line-height: 75px;
    
}
.header-icon{
    padding: 0 32px;
    right: 0;
    cursor: pointer;
    svg { 
        font-size: 25px;
        margin-bottom: -8px;
        cursor: pointer ;
    }
    .svg-icon .exit{
        right: 0;
    }
}
.user-info{
    height: 75px;
    margin-right: 20px;
    cursor: pointer;
    .user{
        margin-left: 30px;
        margin-top: -80px;
    }
}


</style>