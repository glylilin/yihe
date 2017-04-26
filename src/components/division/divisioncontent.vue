<template>
  <ul :class="{'child-show': saveShow}" ref="saveItem" class="divisioncontent">
    <li v-if="saveShow" v-for="(item, index) in divisionOthers.lists" :class="'item'+index" @click="toDetail(item, 'division')" class="classify-item">
      <div class="images">
        <img :src="images[index].icon" alt="">
        <div class="image-hover ivu-icon ivu-icon-ios-heart-outline"></div>
      </div>
      <p class="item-title">{{item.title}}</p>
      <p class="desc">{{item.desc}}</p>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      divisionOthers: {
        type: Object
      }
    },
    data() {
      return {
        images: [
          {icon: require('./division1.jpg')},
          {icon: require('./division2.jpg')},
          {icon: require('./division3.jpg')}
        ],
        saveShow: false,
        showTitle: false
      };
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('scroll', this.saveItem);
        if (this.$refs.saveItem.getBoundingClientRect().top <= window.innerHeight - 100) {
          this.saveShow = true;
        }
      });
    },
    methods: {
      toDetail(detail, name) {
          this.$emit('detail', detail, name);
      },
      saveItem() {
        if (!this.$refs.saveItem) {
          return;
        }
        if (this.showTitle === false && this.$refs.saveItem.getBoundingClientRect().top <= window.innerHeight + 100) {
          this.showTitle = true;
          this.$emit('titleShow', 'division');
        }
        if (this.$refs.saveItem.getBoundingClientRect().top <= window.innerHeight - 100) {
          this.saveShow = true;
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

  .divisioncontent
    display flex
    margin-top 60px
    min-height 180px
    &.child-show
      .item0
        animation item-fade-in 1s forwards
      .item1
        animation item-fade-in 1s 0.33s forwards
      .item2
        animation item-fade-in 1s 0.66s forwards
    .classify-item
      position relative
      flex 1
      margin-right 40px
      margin-top 30px
      overflow hidden
      opacity 0
      transition all 0.6s
      cursor pointer
      &:last-child
        margin 0
      .images
        position relative
        overflow hidden
        font-size 0
        text-align center
        .image-hover
          position absolute
          top 6%
          left 8%
          width 84%
          height 88%
          margin 0 auto
          border 1px solid #fff
          opacity 0
          transition all 0.8s
          &:before
            position absolute
            left -12.5px
            top 10%
            width 25px
            height 25px
            line-height 25px
            font-size 18px
            color #fff
            opacity 0
            background rgba(255, 135, 136, 0.54)
            transition all 0.5s ease-out
        img
          width 100%
          transition all 0.5s
      .item-title
        margin-top 10px
        text-align left
        font-size 15px
        color rgba(65, 65, 65, 0.95)
      .desc
        margin-top 10px
        width 90%
        padding-bottom 15px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      &:before
        content ''
        position absolute
        left 0
        bottom  5px
        width 20px
        height 2px
        background silver
        transition all 0.5s
      &:after
        content ''
        position absolute
        right 0
        bottom  8px
        width 2px
        height 10px
        background silver
        transition all 0.5s
      &:hover
        &:before
          width 30px
          background #ff8788
        &:after
          height 20px
          background #ff8788
      &:hover .images .image-hover:before
        top 22%
        opacity 1
      &:hover .images .image-hover
        opacity 1
      &:hover .images img
        transform scale(1.2)
</style>
