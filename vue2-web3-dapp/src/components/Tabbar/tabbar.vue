<template>
    <div class="tabbar">
        <van-tabbar v-model="active" route>
            <van-tabbar-item :to="item.path" v-for="(item ,index) in tablist"  :key="index">
                <span>{{item.title}}</span>
                <template #icon="props" class="img_box">
                <img :src="props.active ? item.icon.active : item.icon.inactive" :class="props.active ? 'active' : ''" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'Swapdemo1Tabbar',

    data() {
        return {
            active: 0,
            tablist:[
                {
                    title:'tabbar01',
                    path:'/home',
                    icon: {
                        inactive: require('@/assets/tabbar/home.png') ,
                        active: require('@/assets/tabbar/home_active.png'),
                    },
                },
                {
                    title:'tabbar02',
                    path:'/about',
                    icon: {
                         inactive: require('@/assets/tabbar/home.png') ,
                        active: require('@/assets/tabbar/home_active.png'),
                    },
                },
                {
                    title:'tabbar03',
                    path:'/menu',
                    icon: {
                         inactive: require('@/assets/tabbar/home.png') ,
                        active: require('@/assets/tabbar/home_active.png'),
                    },
                },
                
                {
                    title:'tabbar04',
                    path:'/my',
                    icon: {
                         inactive: require('@/assets/tabbar/home.png') ,
                        active: require('@/assets/tabbar/home_active.png'),
                    },
                },
            ]
        };
    },

    methods: {
        openlink(url){
            window.open(url)
        }
    },
};
</script>

<style lang="less" scoped>
.tabbar{
    margin-bottom: 10px;
}
.van-hairline--top-bottom{
    padding-bottom: 15px;
    z-index: 999;
}
/deep/ .van-tabbar-item__icon{
    position: relative;
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
}
.active{
    position: absolute;
    height: 37px;
    left: 50%;
    top: -50%;
    transform: translateX(-50%) translateY(-25%);
    box-shadow: 0px 5px 18px -2px #d943ef;
    border-radius: 50px;
    z-index: 10;
}
</style>