<template>
  <div class="home">
    <Spin fix v-if="!getDatas"></Spin>
    <div class="header">
      <div class="scroll">
        <Carousel arrow="always">
          <Carousel-item>
            <div class="demo-carousel">
              <img src="./scroll/scroll1.png" alt="">
            </div>
          </Carousel-item>
          <Carousel-item>
            <div class="demo-carousel">
              <img src="./scroll/scroll1.png" alt="">
            </div>
          </Carousel-item>
          <Carousel-item>
            <div class="demo-carousel">
              <img src="./scroll/scroll1.png" alt="">
            </div>
          </Carousel-item>
        </Carousel>
      </div>
      <div class="desc">
        <h1 class="save-count">成功挽回<span class="count">{{saveCount}}</span>对危情客户</h1>
        <p class="info">意合情感 还你爱情本来模样</p>
        <div class="consult">
          <Icon type="ios-arrow-down"></Icon>
          <br>
          <span>点击咨询</span>
        </div>
      </div>
    </div>
    <Row type="flex" justify="center" class="assistance">
      <i-col :lg="15" :md="18" :sm="20" :xs="24">
        <div :class="{'show-title': showTitles.assistanceTitle}">
          <h1 class="title">{{assistance.title}}</h1>
          <p class="info">{{assistance.info}}</p>
        </div>

        <assistancecontent @titleShow="titleShow" @detail="detail" :assistance="assistance"></assistancecontent>
        <router-link to="/assistance">
          <button class="more">MORE</button>
        </router-link>
      </i-col>
    </Row>
    <Row type="flex" justify="center" class="save-love">
      <i-col :lg="15" :md="18" :sm="20" :xs="24">
        <div :class="{'show-title': showTitles.saveTitle}">
          <h1 class="title">{{saveLove.title}}</h1>
          <p class="info">{{saveLove.info}}</p>
          <ul class="direct">
            <li class="direct-item">私人订制</li>
            <li class="direct-item">团队指导</li>
            <li class="direct-item">关系修复</li>
          </ul>
        </div>
        <savecontent @titleShow="titleShow" @detail="detail" :saveLove="saveLove"></savecontent>
        <router-link to="/savelove">
          <button class="more">MORE</button>
        </router-link>
      </i-col>
    </Row>
    <Row type="flex" justify="center" class="keep-love">
      <i-col :lg="15" :md="18" :sm="20" :xs="24">
        <div :class="{'keep-title': showTitles.keepTitle}">
          <h1 class="title">{{keepLove.title}}</h1>
          <p class="info">{{keepLove.info}}</p>
        </div>

        <keepcontent @titleShow="titleShow" @detail="detail" :keepLove="keepLove"></keepcontent>
        <router-link to="/keeplove">
          <button class="more">MORE</button>
        </router-link>
      </i-col>
    </Row>
    <Row type="flex" justify="center" class="division-others">
      <i-col :lg="15" :md="18" :sm="20" :xs="24">
        <div :class="{'show-title': showTitles.division}">
          <h1 class="title">{{divisionOthers.title}}</h1>
          <p class="info">{{divisionOthers.info}}</p>
          <ul class="direct">
            <li class="direct-item">安全高效</li>
            <li class="direct-item">分析指导</li>
            <li class="direct-item">贴心服务</li>
          </ul>
        </div>

        <divisioncontent @titleShow="titleShow" @detail="detail" :divisionOthers="divisionOthers"></divisioncontent>
        <router-link to="/division">
          <button class="more">MORE</button>
        </router-link>
      </i-col>
    </Row>
    <Row type="flex" justify="center" class="tutor-team">
          <i-col :lg="15" :md="18" :sm="20" :xs="24">
            <div class="tutor-team-anchor" ref="tutorTeam">
              <transition name="lazy-show">
                <div v-if="lazyShows.tutorTeamShow">
                  <h1 class="title">导师团队</h1>
                  <p class="info">行业翘楚团队  专注更专业</p>
                </div>
              </transition>
              <transition name="lazy-show">
                <div v-if="lazyShows.tutorTeamShow" class="scroll">
                  <Carousel v-model="scrollValue" arrow="always">
                    <Carousel-item v-if="index === 0 || index === 1 || index === 2" v-for="(item, index) in tutorTeam" :key="item.name">
                      <div class="demo-carousel">
                        <div class="avatar">
                          <img :src="images.tutorTeam[index].icon" alt="">
                        </div>
                        <div class="info">
                          <h1 class="tutor-name">{{item.name}}</h1>
                          <p class="tutor-title">{{item.type}}</p>
                          <div class="tutor-intro">
                            <p v-for="(list, index) in item.intro" class="intros">{{list}}<span v-if="index === 1">...</span>
                            </p>
                          </div>
                          <button @click="showModal(item, index)" class="more">MORE</button>
                        </div>
                        <div class="index">0{{index + 1}}</div>
                      </div>
                    </Carousel-item>
                  </Carousel>
                </div>
              </transition>
                  <div v-if="lazyShows.tutorTeamShow" ref="scrollItem" class="scroll-item">
                  <ul ref="scrollWidth" class="scroll-item-contain">
                    <li v-for="(item, index) in tutorTeam" :class="{'active':scrollValue === index}" @click="checkScroll(index)"
                        class="list">
                      <div class="item">
                        <img class="item-avatar" :src="images.tutorTeam[index].icon" alt="">
                        <p class="item-name">{{item.name}}</p>
                      </div>
                      <div class="item-info">
                        <p class="item-title">{{item.type}}</p>
                        <p v-for="(list, index) in item.intro" class="item-intro">{{list}}<span v-if="index === 1">...</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
            </div>
          </i-col>
    </Row>
    <Row type="flex" justify="center" class="about-us">
          <i-col :lg="15" :md="18" :sm="20" :xs="24">
            <div ref="aboutUs">
            <transition name="lazy-show">
              <div v-if="lazyShows.aboutUsShow">
                <h1 class="title">关于意合</h1>
                <p class="info">专注国内外两性情感教育</p>
                <p class="intro">
                  成都浪巢文化意合（www.yihe1314.com）于2013年于2016年正式上线，成都浪巢文化有限公司旗下两性情感门户网站，注册资金500万，专注于挽回爱情，修复婚姻，婚恋培训等服务。创立之初便迅速崛起于中国两性情感咨询培训市场。</p>
                <div class="more">
                  <router-link class="link" to="/about">MORE</router-link>
                </div>
                <div class="pic">
                  <img class="pic-img" src="../about/about-bg.png" alt="">
                  <div class="pic-title">
                    <div class="line"></div>
                    <div class="param">国内外知名情感服务领导名牌</div>
                    <div class="line"></div>
                  </div>
                  <p class="pic-intro">DOMESTIC WELL-KNOWN LEADING BRAND EMOTIONAL SERVICE</p>
                </div>
              </div>
           </transition>
            </div>
          </i-col>
    </Row>
    <Row type="flex" justify="center" class="concat-us">
          <i-col :lg="15" :md="18" :sm="20" :xs="24">
            <div ref="ConcatUs">
            <transition name="lazy-show">
              <div v-if="lazyShows.ConcatUsShow">
                <h1 class="title">联系我们</h1>
                <div class="concat">
                  <h2 class="concat-title">成都浪巢文化意合情感有限公司</h2>
                  <address class="address">
                    <p class="address">地址：成都高新区益州中段1858号天府软件园G8楼三楼</p>
                    <p class="post-code">邮编：61000</p>
                    <p class="tel">电话：181-1659-2433</p>
                    <p class="phone">手机：181-1659-2433</p>
                    <p class="tax">传真：028-61384078</p>
                  </address>
                  <div class="social">
                    <i class="icon-qq"></i>
                    <i class="icon-wechat"></i>
                    <i class="icon-weibo"></i>
                  </div>
                </div>
                <div class="information">
                  <form v-model="messageValue" v-on:submit.prevent>
                    <input v-model="messageValue.name" required type="text" placeholder="姓名" name="name">
                    <input v-model="messageValue.email" required type="email" placeholder="邮箱" name="email">
                    <input v-model="messageValue.tel" required type="number" placeholder="电话" name="tel">
                    <textarea v-model="messageValue.message" class="textarea" placeholder="内容"></textarea>
                    <input type="submit" value="提交">
                  </form>
                </div>
                <footer>
                  <p class="notice">
                    <span>客服须知</span>
                    <span>免责声明</span>
                    <span>友情链接</span>
                  </p>
                  <div class="logo">
                    <img src="./logo.png" alt="">
                  </div>
                  <p class="copy-right">COPYRIGHT 2017 意合情感 ALL RIGHTS RESERVED</p>
                </footer>
              </div>
              </transition>
            </div>
      </i-col>
    </Row>
    <transition name="modal-show">
      <div class="modal" v-if="showModals">
        <Row type="flex" justify="center">
          <i-col :lg="15" :md="18" :sm="20" :xs="24">
            <div class="modal-content">
              <Row>
                <i-col span="14">
                  <img class="showpic" :src="images.modalPic[modalContent.index].icon" alt="">
                </i-col>
                <i-col span="8" offset="1">
                  <div @click="closeModal" class="close"></div>
                  <div class="head">
                    <p class="type">{{modalContent.type}}</p>
                    <h1 class="name">{{modalContent.name}}</h1>
                  </div>
                  <div class="intro">
                    <p class="title">简介：</p>
                    <p v-for="list in modalContent.intro" class="para">{{list}}</p>
                  </div>
                  <div class="style">
                    <p class="title">风格：</p>
                    <p class="para">{{modalContent.style}}</p>
                  </div>
                  <div class="goodat">
                    <p class="title">擅长：</p>
                    <p class="para">{{modalContent.goodAt}}</p>
                  </div>
                </i-col>
              </Row>
            </div>

          </i-col>
        </Row>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import savecontent from 'components/savelove/savecontent';
  import keepcontent from 'components/keeplove/keepcontent';
  import divisioncontent from 'components/division/divisioncontent';
  import assistancecontent from 'components/assistance/assistancecontent';

  const ERR_OK = 0;

  export default {
    data () {
      return {
        saveCount: 1399,
        assistance: {},
        saveLove: {},
        keepLove: {},
        divisionOthers: {},
        tutorTeam: [],
        getDatas: false,
        scrollValue: 0,
        showModals: false,
        modalContent: {},
        images: {
          tutorTeam: [
            {icon: require('./tutor/tutor1.gif')},
            {icon: require('./tutor/tutor2.gif')},
            {icon: require('./tutor/tutor3.gif')},
            {icon: require('./tutor/tutor4.gif')},
            {icon: require('./tutor/tutor5.gif')},
            {icon: require('./tutor/tutor6.gif')},
            {icon: require('./tutor/tutor7.gif')}
          ],
          modalPic: [
            {icon: require('./tutor/modal0.gif')},
            {icon: require('./tutor/modal1.gif')},
            {icon: require('./tutor/modal2.gif')}
          ]
        },
        showTitles: {
          saveTitle: false,
          keepTitle: false,
          division: false,
          assistanceTitle: false
        },
        messageValue: {
          name: '',
          email: '',
          tel: '',
          message: ''
        },
        lazyShows: {
          tutorTeamShow: false,
          aboutUsShow: false,
          ConcatUsShow: false
        }
      };
    },
    created() {
      this.$ajax.get('/api/home').then(response => {
        response = response.data;
        if (response.errno === ERR_OK) {
          this.assistance = response.data.assistance;
          this.saveLove = response.data.saveLove;
          this.keepLove = response.data.keepLove;
          this.divisionOthers = response.data.divisionOthers;
          this.tutorTeam = response.data.tutorTeam;
          this.getDatas = true;
        }
      }).catch(err => {
        alert('出错啦！' + err);
      });
    },
    methods: {
      checkScroll(index) {
          if (index > 2) {
              return;
          }
        this.scrollValue = index;
      },
      detail(detail, name) {
        this.$store.commit('changeDetail', detail);
        this.$router.push({path: name});
      },
      titleShow(show) {
        this.showTitles[show] = true;
      },
      lazyShow() {
        if (this.$refs.tutorTeam) {
          if (this.$refs.tutorTeam.getBoundingClientRect().top <= window.innerHeight - 200) {
            this.lazyShows.tutorTeamShow = true;
          }
        }
        if (this.$refs.aboutUs) {
          if (this.$refs.aboutUs.getBoundingClientRect().top <= window.innerHeight - 200) {
            this.lazyShows.aboutUsShow = true;
          }
        }
        if (this.$refs.ConcatUs) {
          if (this.$refs.ConcatUs.getBoundingClientRect().top <= window.innerHeight + 30) {
            this.lazyShows.ConcatUsShow = true;
          }
        }
      },
      showModal(item, index) {
          this.showModals = true;
          this.modalContent = item;
          this.modalContent.index = index;
      },
      closeModal() {
        this.showModals = false;
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.showTitles.assistance = true;
        this.showTitles.assistanceTitle = true;
        window.addEventListener('scroll', this.lazyShow);
      });
    },
    components: {
      savecontent,
      keepcontent,
      divisioncontent,
      assistancecontent
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/icon.css"

  @keyframes item-fade-in
    0%
      margin-top 30px
      opacity 0
    100%
      margin-top 0
      opacity 1

  @keyframes circle
    0%
      transform rotate(30deg)
    100%
      transform rotate(390deg)

  .home
    position relative
    .lazy-show-enter-active, .lazy-show-leave-active
      transition all 2s ease-in
    .lazy-show-enter, .lazy-show-leave-active
      opacity 0
      margin-top 100px
    .modal
      position fixed
      top 0
      left 0
      width 100%
      height 100%
      background rgba(192, 192, 192, 0.44)
      z-index 99
      overflow scroll
      transition all 0.4s
      &.modal-show-enter, &.modal-show-leave-active
        transform scale(2)
        opacity 0
      .modal-content
        position relative
        margin 80px auto 0 auto
        background #fff
        border-radius 30px
        overflow hidden
        font-size 14px
        line-height 24px
        .title
          color rgba(15, 15, 15, 0.9)
        .showpic
          width 100%
        .close
          position absolute
          right 0
          top 20px
          width 60px
          height 60px
          background url('./back.png')
          background-size contain
          line-height 60px
          text-align center
          transition all 0.3s
          cursor pointer
          opacity .8
          &:hover
            opacity 1
        .head
          margin-top 70px
          .type
            font-size 18px
            line-height 24px
          .name
            font-size 26px
            line-height 30px
            font-weight 500
            margin-top 10px
        .intro
          margin-top 20px
        .style
          margin-top 10px
        .goodat
          margin-top 10px
    .header
      position relative
      width 100%
      .scroll
        .ivu-carousel-active
          button
            background #ff3c8c
        width 100%
        font-size 0
        button.ivu-carousel-arrow
          font-size 12px
        button
          &:hover
            background rgba(252, 143, 195, 0.49)
        .demo-carousel
          img
            width 100%
      .desc
        position absolute
        top 30%
        width 100%
        text-align center
        letter-spacing 0.1em
        .save-count
          font-size 36px
          font-weight lighter
          color #fff
          .count
            color #ff3c8c
        .info
          margin-top 3%
          font-size 18px
          font-weight lighter
          color #fff
        .consult
          margin-top 3%
          color #fff
          cursor pointer
          transition all 0.5s
          .ivu-icon-ios-arrow-down
            margin-bottom 20px
            width 50px
            height 50px
            font-size 30px
            line-height 50px
            background #fc8fc3
            border-radius 50%
            transition all 0.5s
          &:hover
            color #fc8fc3
          &:hover .ivu-icon-ios-arrow-down
            background #fff
    .assistance
      text-align center
      padding-bottom 70px
      border-bottom 2px solid rgba(192, 192, 192, 0.2)
      .show-title
        .title
          opacity 1
          margin-right 0
        .info
          opacity 1
          margin-left 0
      .title
        margin-top 70px
        margin-right 40px
        opacity 0
        transition all 1s ease
      .info
        color silver
        margin-left 40px
        opacity 0
        transition all 1s ease
      .more
        margin-top 50px
        width 250px
        height 40px
        background transparent
        color #ff8788
        border 1px solid #ff8788
        outline none
        transition all 0.5s
        cursor pointer
        &:hover
          background #ff8788
          color #fff
    .save-love
      text-align center
      padding-bottom 70px
      border-bottom 2px solid rgba(192, 192, 192, 0.2)
      .show-title
        .title
          opacity 1
          margin-right 0
        .info
          opacity 1
          margin-left 0
        .direct
          opacity 1
          margin-top 15px
      .title
        margin-top 70px
        opacity 0
        margin-right 40px
        transition all 1s ease
      .info
        color silver
        opacity 0
        margin-left 40px
        transition all 1s ease
      .direct
        opacity 0
        margin-top 55px
        transition all 1s ease
        .direct-item
          display inline-block
          padding 0 10px
          border-right 1px solid silver
          &:last-child
            border none
      .more
        margin-top 50px
        width 250px
        height 40px
        background transparent
        color #ff8788
        border 1px solid #ff8788
        outline none
        transition all 0.5s
        cursor pointer
        &:hover
          background #ff8788
          color #fff
    .keep-love
      text-align center
      padding-bottom 70px
      border-bottom 2px solid rgba(192, 192, 192, 0.2)
      .keep-title
        .title
          opacity 1
          margin-right 0
        .info
          opacity 1
          margin-left 0
      .title
        margin-top 70px
        margin-right 40px
        opacity 0
        transition all 1s ease
      .info
        margin-left 40px
        color silver
        opacity 0
        transition all 1s ease
      .more
        margin-top 50px
        width 250px
        height 40px
        background transparent
        color #ff8788
        border 1px solid #ff8788
        outline none
        transition all 0.5s
        cursor pointer
        &:hover
          background #ff8788
          color #fff
    .division-others
      text-align center
      padding-bottom 70px
      border-bottom 2px solid rgba(192, 192, 192, 0.2)
      .show-title
        .title
          opacity 1
          margin-right 0
        .info
          opacity 1
          margin-left 0
        .direct
          opacity 1
          margin-top 15px
      .title
        margin-top 70px
        opacity 0
        margin-right 40px
        transition all 1s ease
      .info
        color silver
        opacity 0
        margin-left 40px
        transition all 1s ease
      .direct
        opacity 0
        margin-top 55px
        transition all 1s ease
        .direct-item
          display inline-block
          padding 0 10px
          border-right 1px solid silver
          &:last-child
            border none
      .more
        margin-top 50px
        width 250px
        height 40px
        background transparent
        color #ff8788
        border 1px solid #ff8788
        outline none
        transition all 0.5s
        cursor pointer
        &:hover
          background #ff8788
          color #fff
    .tutor-team
      text-align center
      padding-bottom 20px
      .title
        margin-top 70px
      .info
        color silver
      .scroll
        margin-top 70px
        height 300px
        width 100%
        button.right.ivu-carousel-arrow
          width 25px
          height 65px
          border-radius 3px
          font-size 20px
          right -55px
          &:hover
            background #ff8788
        button.left.ivu-carousel-arrow
          width 25px
          height 65px
          border-radius 3px
          font-size 20px
          left -55px
          &:hover
            background #ff8788
        .demo-carousel
          position relative
          display flex
          height 300px
          .avatar
            flex 1
            display inline-block
            img
              margin-top 10px
              width 280px
              height 280px
              border-radius 50%
          .info
            flex 2
            display inline-block
            text-align left
            padding-left 70px
            .tutor-name
              margin-top 30px
              color rgba(0, 0, 0, 0.8)
            .tutor-title
              margin-top 15px
              color rgba(0, 0, 0, 0.6)
            .tutor-intro
              margin-top 20px
              height 50px
              overflow hidden
              color rgba(0, 0, 0, 0.4)
              font-size 18px
            .more
              margin-top 50px
              width 120px
              height 40px
              border 1px solid #ff8788
              color #ff8788
              background none
              transition all 0.5s
              cursor pointer
              &:hover
                background #ff8788
                color #fff
          .index
            position absolute
            right 0
            line-height 300px
            font-size 200px
            z-index -1
            color rgba(192, 192, 192, 0.15)
      .scroll-item
        position relative
        width 100%
        margin-top 100px
        padding 30px 0 50px 0
        overflow-x scroll
        &::-webkit-scrollbar-track-piece
          background rgba(252, 143, 195, 0.51)
          height 4px
        &::-webkit-scrollbar-thumb
          background #fc8fc3
          height 2px
        .scroll-item-contain
          position relative
          left 0
          width 2350px
          .list
            position relative
            display inline-block
            width 250px
            height 80px
            border 1px solid rgba(192, 192, 192, 0.3)
            margin-right 100px
            transition all 0.5s
            cursor pointer
            &:last-child
              margin 0
            .item
              position absolute
              left 0
              top 0
              display inline-block
              width 80px
              &:after, &before
                content ''
                position absolute
                right -10px
                top 20px
                width 10px
                height 40px
                border 1px dashed #ff8788
                border-top none
                border-bottom none
              .item-avatar
                position absolute
                width 60px
                height 60px
                border-radius 50%
                left 10px
                top -30px
                transition all 0.5s
              .item-name
                text-align center
                margin-top 40px
                font-size 18px
            .item-info
              position absolute
              left 110px
              top 8px
              display inline-block
              width 140px
              height 60px
              overflow hidden
              text-align left
              line-height 26px
              .item-title
                color #000
              .item-intro
                font-size 12px
                line-height 18px
                color grey
            &:hover, &.active
              box-shadow 0 1px 8px rgba(255, 135, 136, 0.6)
              border-color rgba(255, 135, 136, 0.61)
            &:hover .item-avatar, &.active .item-avatar
              box-shadow 0 1px 8px rgba(255, 135, 136, 0.6)
    .about-us
      background url("../about/famouse-bg.png") no-repeat
      background-size cover
      text-align center
      padding-bottom 70px
      .title
        margin-top 70px
      .info
        color silver
      .intro
        margin 40px auto 0 auto
        width 60%
      .more
        margin-top 40px
        .link
          display inline-block
          border 1px solid silver
          width 190px
          height 40px
          line-height 40px
          background #fff
          transition all 0.5s
          color silver
          &:hover
            background silver
            color #fff
      .pic
        margin-top 60px
        position relative
        height 300px
        overflow hidden
        .pic-img
          position absolute
          width 100%
          left 0
          top 0
        .pic-title
          display flex
          margin-top 12%
          color #fff
          .line
            flex 1
            margin-top 20px
            border-top 2px solid #fff
            z-index 1
          .param
            line-height 40px
            font-size 40px
            padding 0 30px
            z-index 1
        .pic-intro
          position relative
          z-index 1
          color #fff
          line-height 50px
          font-size 14px
    .concat-us
      text-align center
      padding-bottom 70px
      .title
        margin-top 70px
      .concat
        margin-top 40px
        display inline-block
        width 48%
        height 320px
        text-align left
        line-height 35px
        overflow hidden
        .concat-title
          margin-bottom 10px
          font-size 20px
        .address
          font-style normal
        .social
          margin-top 60px
          font-size 30px
          i
            display inline-block
            text-align center
            margin-right 18px
            width 35px
            height 35px
            border-radius 50%
            background rgba(192, 192, 192, 0.36)
            color #fff
            transition all 0.5s
            cursor pointer
            &:before
              line-height 35px
            &:hover
              background #fc8fc3
      .information
        margin-top 40px
        display inline-block
        width 50%
        height 320px
        input, textarea
          outline none
          display block
          height 40px
          line-height 40px
          font-size 15px
          border none
          border-bottom 2px solid silver
          width 100%
          margin-bottom 30px
          transition all 0.5s
          &:focus
            border-color #ff8788
            text-indent 1em
        textarea
          height 70px
          border none
          border-bottom 2px solid silver
        input[type=submit]
          border 1px solid #ff8788
          background none
          color #ff8788
          transition all 0.5s
          cursor pointer
          &:hover
            background #ff8788
            color white
          &:active
            background #ff86c0
        input[type="number"]
          -moz-appearance: textfield;
          &::-webkit-outer-spin-button, &::-webkit-inner-spin-button
            -webkit-appearance: none;
      footer
        margin-top 120px
        display flex
        .notice
          flex 1
          text-align left
          span
            padding-right 20px
        .logo
          flex 1
        .copy-right
          flex 1
          text-align right
          white-space nowrap


</style>
