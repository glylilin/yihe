<template>
  <ul :class="{'child-show': saveShow}" ref="saveItem" class="keepcontent">
    <li v-if="saveShow" v-for="(item, index) in keepLove.lists" :class="'item'+index" @click="toDetail(item, 'keeplove')" class="classify-item">
      <div class="images">
        <img :src="images[index].icon" alt="">
      </div>
      <p class="item-title">{{item.title}}</p>
      <p class="desc">{{item.desc}}</p>
      <Icon type="ios-arrow-thin-right"></Icon>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      keepLove: {
        type: Object
      }
    },
    data() {
      return {
        images: [
          {icon: require('./keep1.jpg')},
          {icon: require('./keep2.jpg')},
          {icon: require('./keep3.jpg')}
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
          this.$emit('titleShow', 'keepTitle');
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

  .keepcontent
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
      flex 1
      position relative
      margin-right 40px
      margin-top 30px
      overflow hidden
      transition all 0.6s
      cursor pointer
      opacity 0
      border 1px solid rgba(192, 192, 192, 0.2)
      &:last-child
        margin 0
      .images
        overflow hidden
        transition all 0.5s
        img
          width 100%
          transition all 0.5s
      .item-title
        margin-top 10px
        text-align left
        padding-left 5px
        font-size 15px
        color rgba(65, 65, 65, 0.95)
      .desc
        width 100%
        padding-bottom 15px
        padding-left 5px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      .ivu-icon-ios-arrow-thin-right
        position absolute
        right 30px
        bottom -25px
        font-size 30px
        transition all 0.5s
      &:hover
        .images
          img
            margin-top -20px
            transform scale(1.1)
        border-color transparent
        box-shadow 0 2px 8px rgba(255, 135, 136, 0.4)
      &:hover .ivu-icon-ios-arrow-thin-right
        bottom 5px
        color #ff8788
</style>
