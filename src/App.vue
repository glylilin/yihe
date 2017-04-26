<template>
  <div id="app">

    <header>
      <Row type="flex" justify="center">
        <i-col :class="{'scrolls':scroll > 0, 'no-scrolls':scroll === 0}" class="nav" :lg="15" :md="18" :sm="20"
               :xs="24">
          <Row>
            <i-col class="logo" span="4">
              <img class="logo-img" src="../src/components/home/logo.png" alt="意合情感" title="意合情感">
            </i-col>

            <i-col span="18">
              <ul class="links">
                <li class="nav-list">
                  <router-link class="link" to="/home">首页</router-link>
                </li>
                <li class="nav-list">
                  <router-link class="link" to="/assistance">助力脱单</router-link>
                </li>
                <li class="nav-list">
                  <router-link class="link" to="/keeplove">爱情保鲜</router-link>
                </li>
                <li class="nav-list">
                  <router-link class="link" to="/division">分离外来者</router-link>
                </li>
                <li class="nav-list">
                  <router-link class="link" to="/savelove">挽留爱情</router-link>
                </li>
                <li class="nav-list">
                  <!--<router-link @click="toTutor" class="link" to="/home">导师团队</router-link>-->
                  <span @click="toTutor" class="link">导师团队</span>
                </li>
                <li class="nav-list">
                  <router-link class="link" to="/about">关于我们</router-link>
                </li>
              </ul>
            </i-col>

            <i-col class="log-in" span="2">
              <transition name="loginout" mode="out-in">
                <div v-if="!thisUser.user" :key="thisUser.user" class="has-log-in">
                  <span @click="clickLog = true"><Icon type="log-in"></Icon></span>
                  <span @click="clickLog = true">登录</span>
                  <transition name="log">
                    <log v-if="clickLog" @closeLog="closeLog" @getUser="getUser" class="logs"></log>
                  </transition>
                </div>
                <div v-else :key="thisUser.user" class="no-log-in">
                  <p class="user-name">{{thisUser.user}}</p>
                  <Button @click="logOut" type="primary">注销</Button>
                </div>
              </transition>
            </i-col>
          </Row>
        </i-col>
      </Row>
    </header>

    <div class="concats">
      <ul class="tools">
        <li class="tool icon-qq"></li>
        <li class="tool icon-wechat"></li>
        <li class="tool icon-weibo"></li>
      </ul>
    </div>
    <Back-top class="to-top"></Back-top>

    <router-view :tutro="totutor"></router-view>

  </div>
</template>


<script type="text/ecmascript-6">
  import log from 'components/log/log';

  export default {
    name: 'app',
    data() {
      return {
        scroll: 0,
        clickLog: false,
        thisUser: {},
        totutor: false
      };
    },
    created() {
      const users = JSON.parse(window.localStorage.getItem('emotionuser'));
      if (users) {
        this.thisUser = users;
      }
    },
    methods: {
      scrolls() {
        this.scroll = document.body.scrollTop;
      },
      getUser(thisUser) {
        this.thisUser = thisUser;
      },
      closeLog() {
        this.clickLog = false;
      },
      logOut() {
        this.thisUser = {};
        window.localStorage.removeItem('emotionuser');
      },
      toTutor() {
        this.$router.push({path: '/home'});
        this.$nextTick(() => {
            setTimeout(() => {
              if (document.querySelector('.tutor-team-anchor').getBoundingClientRect().top >= 0) {
                let toptotutor = setInterval(() => {
                  console.log('top to' + document.querySelector('.tutor-team-anchor').getBoundingClientRect().top);
                  if (!document.querySelector('.tutor-team-anchor')) {
                    clearInterval(toptotutor);
                    return;
                  }
                  if (document.querySelector('.tutor-team-anchor').getBoundingClientRect().top <= 130) {
                    clearInterval(toptotutor);
                    return;
                  }
                  document.body.scrollTop += 75;
                }, 25);
              }
              if (document.querySelector('.tutor-team-anchor').getBoundingClientRect().top < 0) {
                let bottomtotutor = setInterval(() => {
                  console.log('bottom to' + document.querySelector('.tutor-team-anchor').getBoundingClientRect().top);
                  if (!document.querySelector('.tutor-team-anchor')) {
                    clearInterval(bottomtotutor);
                    return;
                  }
                  if (document.querySelector('.tutor-team-anchor').getBoundingClientRect().top >= 130) {
                    clearInterval(bottomtotutor);
                    return;
                  }
                  document.body.scrollTop -= 75;
                }, 25);
              }
            }, 50);
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.scrolls);
      });
    },
    components: {
      log
    }
  };
</script>

<style lang="stylus" rel="stylesheet">
  header
    position fixed
    top 0
    width 100%
    z-index 100
    .scrolls
      margin-top 10px !important
    .no-scrolls
      margin-top 0
      width 100%
    .nav
      height 60px
      min-width 750px
      background #fff
      font-size 16px
      text-align center
      transition all 0.8s ease
      .logo
        display inline-block
        .logo-img
          margin-top 13px
      .links
        display flex
        .nav-list
          display inline-block
          flex 1
          .link
            display inline-block
            line-height 60px
            transition all 0.2s ease
            color #999999
            cursor pointer
            &:hover
              color #fc8fc3
            &.active
              border-top 4px solid #fc8fc3
              color #fc8fc3
      .log-in
        margin 0
        line-height 60px
        font-size 18px
        color #999999
        transition all 0.5s
        white-space nowrap
        .loginout-enter, .loginout-leave-active
          opacity 0
        .has-log-in
          transition all 0.5s;
          .logs
            position absolute
            right 400px
            top 70px
            transition all 0.5s
          & > span
            cursor pointer
            color rgba(252, 143, 195, 0.53)
            transition all 0.3s
          .ivu-icon-log-in
            width 22px
            height 22px
            line-height 22px
            font-size 16px
            background rgba(252, 143, 195, 0.53)
            color #fff
            cursor pointer
            border-radius 50%
            transition all 0.3s
          &:hover > span, &:hover .ivu-icon-log-in
            color #fc8fc3
          &:hover .ivu-icon-log-in
            background #fc8fc3
            color #fff
          .log-enter, .log-leave-active
            opacity 0
            margin-top -30px
        .no-log-in
          height 60px
          font-size 0
          line-height 0
          .user-name
            font-size 12px
            line-height 32px
          .ivu-btn
            font-size 12px
            height 20px
            padding 0 5px
            border-radius 2px
            background #fc8fc3
            border none

  .to-top
    .ivu-back-top-inner
      background rgba(252, 143, 195, 0.6)
      &:hover
        background rgba(252, 143, 195, 0.7)
  .concats
    position fixed
    right 34px
    width 35px
    bottom 75px
    z-index 99
    text-align center
    background rgba(252, 143, 195, 0.56)
    cursor pointer
    transition all 0.5s
    .tools
      position absolute
      top -105px
      height 105px
      overflow hidden
      width 35px
      .tool
        width 35px
        height 35px
        font-size 28px
        line-height 35px
        transition all 0.5s
        color #fff
        background rgba(192, 192, 192, 0.42)
        &:hover
          background #fc8fc3
</style>
