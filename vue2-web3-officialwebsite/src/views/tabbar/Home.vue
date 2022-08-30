<template>
    <div class="home">
        <Nav />
        <div class="item top" id="a" @click="goAnchor('#d')">aaa</div>
        <div class="item" id="b" @click="OpenLink('#e')">bbb</div>
        <div class="item" id="c">ccc</div>
        <div class="item" id="d">ddd</div>
        <div class="item" id="e">eee</div>
        <div class="item" id="f">fff</div>
    </div>
</template>

<script>
import Nav from "./../../components/Nav/index.vue"
export default {
    name: 'FrontendHome',

    components: { Nav },

    directives: {  },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        OpenLink(url) {
            if (url) {
                window.open(url, "_blank");
            } else {
                window.$toast("Coming Soon");
            }
        },
    // 页面定位导航
        goAnchor(selector) {
            document.querySelector(selector).scrollIntoView({
                behavior: "smooth"
            });
        },
    },
};
</script>

<style lang="less" scoped>
.home{
    .top{
        padding-top: 100px;
    }
    .item{
        width: 100%;
        height: 600px;
        &:nth-of-type(2n){
            background-color: rgb(89, 168, 142);
        }
        &:nth-of-type(2n-1){
            background-color: rgb(71, 61, 116);
        }
    }
    
}
</style>