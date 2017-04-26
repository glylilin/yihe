<template>
  <ul :class="{'child-show': assistanceShow}" ref="assItem" class="assis">
    <li v-if="assistanceShow" v-for="(item, index) in assistance.lists" :class="'item'+index" @click="toDetail(item, 'assistance')" class="classify-item">
      <div class="images">
        <img v-if="index === 0" width="70px" height="60px" :src="images[index].icon" alt="">
        <img v-if="index === 1" width="36px" height="60px" :src="images[index].icon" alt="">
        <img v-if="index === 2" width="60px" height="50px" :src="images[index].icon" alt="">
        <div class="circle"></div>
      </div>
      <p class="item-title">{{item.title}}</p>
      <p class="index">0{{index + 1}}</p>
      <p class="desc">{{item.desc}}</p>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      assistance: {
        type: Object
      }
    },
    data() {
      return {
        images: [
          {icon: require('./icon1.png')},
          {icon: require('./icon2.png')},
          {icon: require('./icon3.png')}
        ],
        assistanceShow: false,
        showTitle: false
      };
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.assItem);
        if (this.$refs.assItem.getBoundingClientRect().top <= window.innerHeight - 100) {
          this.assistanceShow = true;
        }
      });
    },
    methods: {
      toDetail(detail, name) {
        this.$emit('detail', detail, name);
      },
      assItem() {
        if (!this.$refs.assItem) {
          return;
        }
        if (this.showTitle === false && this.$refs.assItem.getBoundingClientRect().top <= window.innerHeight + 100) {
          this.showTitle = true;
          this.$emit('titleShow', 'assistanceTitle');
        }
        if (this.$refs.assItem.getBoundingClientRect().top <= window.innerHeight - 100) {
          this.assistanceShow = true;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @keyframes item-fade-in
    0%
      margin-top 30px
      opacity 0
    100%
      margin-top 0
      opacity 1

  .assis
    display flex
    margin-top 60px
    min-height 250px
    text-align center
    &.child-show
      .item0
        animation item-fade-in 1s forwards
      .item1
        animation item-fade-in 1s 0.33s forwards
      .item2
        animation item-fade-in 1s 0.66s forwards
    .classify-item
      margin-right 40px
      cursor pointer
      opacity 0
      &.child-show
      .item0
        animation item-fade-in 1s forwards
      .item1
        animation item-fade-in 1s 0.33s forwards
      .item2
        animation item-fade-in 1s 0.66s forwards
      &:last-child
        margin 0
      .images
        position relative
        margin 0 auto
        width 100px
        height 100px
        padding-top 10px
        border-radius 50%
        .circle
          position absolute
          left 0
          top 0
          width 100px
          height 100px
          border 1px solid silver
          border-radius 50%
          transform rotate(30deg)
          transition all 0.5s
          &:after
            content ''
            position absolute
            top -5px
            left 45px
            width 10px
            height 10px
            border-radius 50%
            background #fc8fc3
        img
          margin-top 10px
      .item-title
        margin-top 25px
        padding-bottom 20px
        position relative
        &:after
          content ''
          position absolute
          left 50%
          margin-left -20px
          bottom 0
          border 1px solid silver
          width 40px
          transition all 0.5s
      .index
        display inline-block
        margin-top 20px
        width 30px
        height 30px
        line-height 30px
        border-radius 50%
        box-shadow 0 1px 8px rgba(192, 192, 192, 0.65)
      .desc
        margin-top 6px
        line-height 28px
      &:hover .images .circle
        border-color red
        animation circle 2s infinite
      &:hover .item-title:after
        width 70px
        margin-left -35px
        border-color #fc8fc3
      &:hover .index
        box-shadow 0 1px 8px rgba(252, 143, 195, 0.64)
</style>
