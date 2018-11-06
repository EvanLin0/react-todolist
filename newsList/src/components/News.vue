<template>
  <div id="news-page">
      <ul>
        <li v-for="(item,index) in newsList">
          <span>{{index}}</span>
          <span>{{item.title}}</span>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
    data () {
      return {
        newsList:[]
      }
    },
    mounted () {
      this.pageInit();
    },
    methods:{
        pageInit () {
          var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
          this.$http.get(api).then(res=>{
            console.log(res);
            console.log('+++++++++++++++')
            console.log(res.data.result)
            console.log("-------------")
            console.log(res.body.result)

            this.newsList = res.data.result;
          })
        }
    }
}
</script>
<style scoped>
ul{
  list-style:none;
}
</style>
