<template>
    <div id="header-wrap">
        <div class="pull-left header-icon"><svg-icon iconClass="menu" className="menu"/></div>
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
    svg { 
        font-size: 25px;
        margin-bottom: 0;
        cursor: pointer;
        }
}

</style>