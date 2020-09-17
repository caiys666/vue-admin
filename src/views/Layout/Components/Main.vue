<template>
    <div id="main-wrap">
        <router-view/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "../../../styles/config.scss";
#main-wrap{
    position: fixed; 
    left: $navMenu;
    height: 100vh;
    top: 75px;
    bottom: 0;
    right: 0;
    border: solid #DADBD4 30px;
    border-bottom: none;
    -webkit-box-sizing: border-box;
}

</style>