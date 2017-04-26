<template>
  <div class="assitance">
    <div class="header">
      <img class="img" src="./keep-love.png" alt="">
      <p class="info">{{assistance.info}}</p>
      <p class="en">Efficient, professional let God become boyfriend!</p>
    </div>
    <div class="positioncolor"></div>
    <Spin fix v-if="!getDatas"></Spin>
    <Row class="content" type="flex" justify="center">
      <i-col :lg="15" :md="18" :sm="20" :xs="24">
        <div class="about-top"></div>
        <Breadcrumb separator=">" class="position">
          <span>您的位置： </span>
          <Breadcrumb-item href="/">首页</Breadcrumb-item>
          <Breadcrumb-item>助力脱单</Breadcrumb-item>
        </Breadcrumb>

        <transition name="fade-title" mode="out-in">
          <div v-if="!showDetail" :key="showDetail" class="chose">全部</div>

          <div v-else :key="showDetail" class="back">
            <span @click="showDetail = false"><Icon type="ios-arrow-left"></Icon>返回</span>
          </div>
        </transition>

        <transition name="fade" mode="out-in">
          <assistancecontent v-show="!showDetail" @detail="detail" :assistance="assistance"></assistancecontent>
        </transition>
        <transition name="fade" mode="out-in">
          <detail v-show="showDetail" :detailFade="showDetail" :details="details"></detail>
        </transition>

        <foot></foot>
      </i-col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
  import foot from 'components/foot/foot';
  import assistancecontent from 'components/assistance/assistancecontent';
  import detail from 'components/detail/detail';

  const ERR_OK = 0;

    export default {
      data() {
        return {
          getDatas: false,
          assistance: {},
          details: {},
          showDetail: false
        };
      },
      created() {
        this.$ajax.get('/api/assistance').then(response => {
          response = response.data;
          if (response.errno === ERR_OK) {
            this.assistance = response.data;
            this.getDatas = true;
          }
        }).catch(err => {
          alert('出错了' + err);
        });
        if (this.$store.state.detailName.title) {
          this.details = this.$store.state.detailName;
          this.showDetail = true;
          this.$store.commit('changeDetail', {});
        }
      },
      methods: {
        detail(detail, name) {
          this.details = detail;
          this.showDetail = true;
        }
      },
      components: {
        assistancecontent,
        foot,
        detail
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .assitance
    .header
      position absolute
      height 430px
      width 100%
      background url("assistance-love-mask.png") no-repeat
      background-size cover
      text-align center
      color #fff
      .img
        margin-top 150px
        padding-bottom 20px
        border-bottom 1px solid #fff
      .info
        font-size 18px
        line-height 30px
      .en
        margin-top 18px
        font-size 12px
        text-transform uppercase
    .positioncolor
      position absolute
      left 0
      top 430px
      width 100%
      height 38px
      background rgba(192, 192, 192, 0.1)
    .content
      .about-top
        padding-top 200px
        height 420px
        width 100%
      .position
        margin-top 20px
        position relative
        float right
      .chose
        overflow hidden
        margin-top 70px
        width 80px
        height 30px
        color: #fff;
        text-align center
        font-size 14px
        line-height 30px
        background: #fc8fc3;
      .back
        overflow hidden
        margin-top 70px
        width 80px
        height 30px
        color #fff
        span
          display inline-block
          line-height 30px
          font-size 14px
          padding 0 10px
          background #fc8fc3
          transition all 0.3s
          cursor pointer
          i
            margin-right 5px
          &:hover
            color rgba(0, 0, 0, 0.5)
      .fade-enter-active,.fade-leave-active
        transition: all 0.5s ease-out
      .fade-enter,.fade-leave-active
        opacity: 0
      .fade-enter
        transform: translateX(31px)
      .fade-leave-active
        transform: translateX(-31px)
      .fade-title-enter-active,.fade-title-leave-active
        transition: all 0.7s ease
      .fade-title-enter,.fade-title-leave-active
        width 0
</style>
