<template>
  <div class="about">
    <div class="header"></div>
    <Spin fix v-if="!getDatas"></Spin>
    <Row class="content" type="flex" justify="center" >
      <i-col :lg="15" :md="18" :sm="20" :xs="24">
        <div class="about-top">
          <div class="pic-title">
            <div class="line"></div>
            <div class="param">国内外知名情感服务领导名牌</div>
            <div class="line"></div>
          </div>
          <p class="pic-intro">DOMESTIC WELL-KNOWN LEADING BRAND EMOTIONAL SERVICE</p>
        </div>
        <Breadcrumb separator=">" class="position">
          <span>您的位置： </span>
          <Breadcrumb-item href="/">首页</Breadcrumb-item>
          <Breadcrumb-item>关于我们</Breadcrumb-item>
        </Breadcrumb>
        <div class="information">
          <h1 class="title">{{about.title}}<br><span class="us">ABOUT US</span></h1>
          <div class="info-list" v-for="(info, index) in about.information">
            <h2 class="info-title">{{info.title}}:</h2>
            <p class="info-content" v-for="(content, index2) in info.content">
              <span class="tao" v-if="index === 1 && index2 === 0">桃小鹿</span>
              <span class="jun" v-if="index === 1 && index2 === 1">骏尧</span>
              {{content}}
            </p>
          </div>
        </div>
        <foot></foot>
      </i-col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
  import foot from 'components/foot/foot';

  const ERR_OK = 0;

  export default {
    data() {
      return {
        about: {},
        getDatas: false
      };
    },
    created() {
      this.$ajax.get('/api/about').then(response => {
        response = response.data;
        if (response.errno === ERR_OK) {
          this.about = response.data;
          this.getDatas = true;
        }
      }).catch(err => {
        alert('出错啦！' + err);
      });
    },
    components: {
        foot
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .about
    .header
      position absolute
      height 430px
      width 100%
      background url("about-bg-mask.png") no-repeat
      background-size cover
      .mask
        position absolute
        top 0
        left 0
        width 100%
        height 430px
        background rgba(244, 153, 197, 0.8)
    .content
      .about-top
        padding-top 200px
        height 420px
        width 100%
        text-align center
        color #fff
        .pic-title
          display flex
          .param
            padding 0 30px
            line-height 40px
            font-size 40px
          .line
            flex 1
            margin-top 20px
            border-top 2px solid #fff
        .pic-intro
          line-height 50px
          font-size 14px
      .position
        margin-top 20px
        position relative
        float right
      .information
        margin-top 70px
        .title
          text-align center
          .us
            font-size 16px
        .info-list
          margin-top 10px
          .info-title
            font-size 16px
            font-weight bold
            line-height 30px
          .info-content
            font-size 14px
            text-indent 1em
            line-height 22px
            .tao, .jun
              color #fc8fc3
</style>
