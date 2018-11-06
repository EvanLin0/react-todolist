<template>
  <div class="swiper-wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <slot></slot>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'VueAwesomeSwiper',
    data () {
      return {
        swiperOption: {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style scoped lang="stylus">

</style>
