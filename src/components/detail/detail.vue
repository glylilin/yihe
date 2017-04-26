<template>

  <div class="details">
    <transition name="fade-in">
      <Row v-show="detailFade">
        <i-col class="images" span="16">
          <div class="img1">
            <img :src="images[details.index + '1']" alt="">
          </div>
          <div>
            <img :src="images[details.index + '2']" alt="">
          </div>
        </i-col>
        <i-col class="information" span="7" offset="1">
          <div class="intro">
            <h1 class="title">{{details.title}}</h1>
            <p class="desc">{{details.desc}}</p>
          </div>
          <button class="communication">立即沟通</button>
          <div class="guidance">
            <h2 class="title">意合团队指导流程</h2>
            <p v-for="paragraph in details.guidance" class="content">{{paragraph}}</p>
          </div>
          <div class="advantage">
            <h2 class="title">团队优势</h2>
            <p v-for="paragraph in details.advantage" class="content">{{paragraph}}</p>
          </div>

        </i-col>
      </Row>
    </transition>
  </div>


</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      details: {
        type: Object
      },
      detailFade: ''
    },
    data() {
      return {
        images: {
          assistanceOne1: require('./detailimages/assistanceOne1.jpg'),
          assistanceOne2: require('./detailimages/assistanceOne2.jpg'),
          assistanceTwo1: require('./detailimages/assistanceTwo1.jpg'),
          assistanceTwo2: require('./detailimages/assistanceTwo2.jpg'),
          assistanceThree1: require('./detailimages/assistanceThree1.jpg'),
          assistanceThree2: require('./detailimages/assistanceThree2.jpg'),
          divisionOne1: require('./detailimages/divisionOne1.jpg'),
          divisionOne2: require('./detailimages/divisionOne2.jpg'),
          divisionThree1: require('./detailimages/divisionThree1.jpg'),
          divisionThree2: require('./detailimages/divisionThree2.jpg'),
          divisionTwo1: require('./detailimages/divisionTwo1.jpg'),
          divisionTwo2: require('./detailimages/divisionTwo2.jpg'),
          keepOne1: require('./detailimages/keepOne1.jpg'),
          keepOne2: require('./detailimages/keepOne2.jpg'),
          keepThree1: require('./detailimages/keepThree1.jpg'),
          keepThree2: require('./detailimages/keepThree2.jpg'),
          keepTwo1: require('./detailimages/keepTwo1.jpg'),
          keepTwo2: require('./detailimages/keepTwo2.jpg'),
          saveFour1: require('./detailimages/saveFour1.jpg'),
          saveFour2: require('./detailimages/saveFour2.jpg'),
          saveOne1: require('./detailimages/saveOne1.jpg'),
          saveOne2: require('./detailimages/saveOne2.jpg'),
          saveThree1: require('./detailimages/saveThree1.jpg'),
          saveThree2: require('./detailimages/saveThree2.jpg'),
          saveTwo1: require('./detailimages/saveTwo1.jpg'),
          saveTwo2: require('./detailimages/saveTwo2.jpg')
        }
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .details
    .fade-in-enter-active, .fade-in-leave-active
      transition all 1.5s ease-in
    .fade-in-enter, .fade-in-leave-active
      opacity 0
    margin-top 30px
    width 100%
    .images
      .img1
        margin-bottom 20px
      img
        width 100%
    .information
      font-size 14px
      line-height 24px
      .intro
        .title
          font-size 20px
          line-height 30px
        .desc
          margin-top 10px
      .communication
        margin-top 30px
        width 100%
        height 35px
        background none
        border 1px solid #fc8fc3
        transition all 0.5s
        cursor pointer
        &:hover
          background #fc8fc3
          color white
      .guidance
        margin-top 30px
        .title
          font-size 16px
          color #4b4b4b
          margin-bottom 10px
      .advantage
        .title
          font-size 16px
          color #4b4b4b
          margin 10px 0


</style>
