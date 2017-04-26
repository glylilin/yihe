<template>
    <ul :class="{'child-show': saveShow}" ref="saveItem" class="savecontent">
      <li v-if="saveShow" v-for="(item, index) in saveLove.lists" :class="'item'+index" @click="toDetail(item, 'savelove')"
          class="classify-item">
        <div class="images">
          <img :src="images[index].icon" alt="">
        </div>
        <p class="item-title">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
      </li>
    </ul>

</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      saveLove: {
        type: Object
      }
    },
    data() {
      return {
        images: [
          {icon: require('./save1.png')},
          {icon: require('./save2.png')},
          {icon: require('./save3.png')},
          {icon: require('./save4.png')}
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
            this.$emit('titleShow', 'saveTitle');
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


  .savecontent
    display flex
    margin-top 60px
    min-height 180px
    &.child-show
      .item0
        animation item-fade-in 1s forwards
      .item1
        animation item-fade-in 1s 0.25s forwards
      .item2
        animation item-fade-in 1s 0.5s forwards
      .item3
        animation item-fade-in 1s 0.75s forwards
    .classify-item
      flex 1
      margin-right 40px
      margin-top 30px
      border-bottom 2px solid rgba(192, 192, 192, 0.2)
      overflow hidden
      transition all 0.6s
      opacity 0
      cursor pointer
      &:last-child
        margin 0
      .images
        img
          width 100%
      .item-title
        margin-top 10px
        text-align left
        font-size 15px
        color rgba(65, 65, 65, 0.95)
      .desc
        width 100%
        padding-bottom 15px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      &:hover
        border-color #fc8fc3

</style>
