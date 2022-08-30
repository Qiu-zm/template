<template>
  <div>
    <div ref="nav" class="header dsp_f jc_sb">
      <div class="head_l dsp_f">
        <img class="img logoimg" src="./../../assets/images/logo.png" alt="">
        <!-- <img class="img titleimg" src="./../../assets/header_title.png" alt=""> -->
        <div>project name</div>
      </div>
      <div class="head_r dsp_f">
        <div class="head-list" v-for="(item,index) in headdata" :key="index">{{item.name}}</div>
        <div class="buy-btn">
          <img class="img" src="./../../assets/images/buy-btn.png" alt="">
        </div>
      </div>
      <div class="head_r_phone dsp_f">
        <div v-if="menushow" @click="selectmenu()">
          <img class="img" src="./../../assets/images/menu_close.png" alt="">
        </div>
        <div v-else @click="selectmenu()">
          <img class="img" src="./../../assets/images/menu.png" alt="">
        </div>
        <div v-show="menushow" class="phone_menu">
          <div class="phone_menu_list" v-for="(item,index) in headdata" :key="index">{{item.name}}</div>
          <div class="buy-btn">
            <img class="img" src="./../../assets/images/buy-btn.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="gotop" ref="gotop">
      <img class="img" @click="goAnchor('#a')" src="./../../assets/images/gotop.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vue2Web3WebIndex',

  data() {
    return {
      headdata:[
        {
          name:'item',
          link:'',
          path:'',
        },
        {
          name:'item',
          link:'',
          path:'',
        },
        {
          name:'item',
          link:'',
          path:'',
        },
        {
          name:'item',
          link:'',
          path:'',
        },
        {
          name:'item',
          link:'',
          path:'',
        },
        {
          name:'item',
          link:'',
          path:'',
        },
        {
          name:'item',
          link:'',
          path:'',
        },
      ],
      menushow:false,
      navheight:0,
      scrollTop:0,
      gotopwidth:0,
    };
  },

  mounted() {
    // document.getElementById("home").addEventListener("scroll",this.handleScroll,true);
    window.addEventListener("scroll",this.handleScroll,true);
    this.navheight = this.$refs.nav.offsetHeight
    this.gotopwidth = this.$refs.gotop.offsetWidth
  },

  methods: {
    handleScroll(event){
      let clientHeight = event.target.scrollTop;
      if (clientHeight <= 150) {
         this.$nextTick(function () {
            this.$refs.gotop.style.right = `-${this.gotopwidth}px`
            this.$refs.nav.style.backgroundColor = `transparent`
          });
      }else{
        this.$refs.nav.style.backgroundColor = `#10002e`
      }
      if (clientHeight >= this.scrollTop) {
          this.scrollTop = clientHeight
          this.$nextTick(function () {
            this.$refs.nav.style.top = `-${this.navheight}px`
            this.$refs.gotop.style.right = `-${this.gotopwidth}px`
          });
      }else if (clientHeight <= this.scrollTop - 200) {
          this.scrollTop = clientHeight
          this.$nextTick(function () {
            this.$refs.nav.style.top = `-0px`
            this.$refs.gotop.style.right = `-0px`
          });
      }
    },
    // 页面定位导航
      goAnchor(selector) {
          document.querySelector(selector).scrollIntoView({
              behavior: "smooth"
          });
      },
    selectmenu(){
      this.menushow = !this.menushow;
    }
  },
};
</script>

<style lang="less" scoped>
.gotop{
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 10%;
  right: 0%;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    bottom: 11%;
  }
}

.header{
    position: fixed;
    top: 0;
    padding: 16px 126px 16px 60px;
    left: 0;
    z-index: 10;
    width: 100%;
    transition: all 0.5s;
    .head_l{
      .logoimg{
        width: 68px;
        height: 68px;
      }
      .titleimg{
        width: 171px;
        height: 41px;
      }
    }
    .head_r{
      .head-list{
        margin-right: 30px;
        font-size: 24px;
        color: #D4D4D4;
        cursor: pointer;
        &:hover{
            color: #f4bcbc;
          }
      }
      .buy-btn{
        width: 147px;
        height: 56px;
        cursor: pointer;
      }
    }
    .head_r_phone{
      width: 5.33vw;
      height:5.33vw;
      display: none;
      position: relative;
      .phone_menu{
        position: absolute;
        top: 130%;
        right: 0;
        padding: 1.733vw 2.667vw;
        background-color: #3e1eff;
        border-radius: 1vw;
        &::after{
          content: "";
          display: inline-table;
          border: 3vw solid transparent;
          border-top-color: #3e1eff;
          position: absolute;
          bottom: 93%;
          left: 80%;
          transform: rotate(-55deg);
        }
        .phone_menu_list{
          font-size: 3.2vw;
          font-family: Arial-Regular, Arial;
          font-weight: 400;
          color: #D4D4D4;
          padding: 2.133vw 0;
          border-bottom: 1px solid #C4B6D8;
          cursor: pointer;
          &:hover{
            color: #f4bcbc;
          }
        }
        .buy-btn{
          width: 14vw;
          height: 5.333vw;
          margin: 2.133vw 0;
          cursor: pointer;
          
        }
      }
    }
  }
</style>