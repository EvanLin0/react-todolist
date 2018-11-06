<template>
    <div class="singer">
      <list-view :data="singers"></list-view>
    </div>
</template>

<script>
  import {getSingerList} from "api/singer";
  import {ERR_OK} from "api/config";
  import Singer from 'common/js/singer'; // 封装类来继续avatar
  import ListView from 'base/listview/listview'; // 引入滚动组件

  //定义常量
  const HOT_NAME = '热门';
  const HOT_SINGER_LEN = 10;
  export default {
  name: 'singer',
  data () {
    return {
      singers: []
    }
  },
  created () {
    this._getSingerList()
  },
  components: {
    ListView
  },
  methods: {
    _getSingerList () {
      getSingerList().then((res) => {
        // console.log(res)
        if (res.code === ERR_OK) {
          // console.log(res);
          this.singers = this._normallizeSinger(res.data.list)
          // this._normallizeSinger(this.singer)
          // console.log(this._normallizeSinger(this.singer))
        }
      })
    },
    // 对接口获取的数据进行处理，按照字母排序相同的聚合在一起。
    _normallizeSinger (list) {
      // 热门歌手数据(截取返回的数据前十条为热门数据)
      // 按字母聚合的数据的歌手数据

      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      list.forEach((item,index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name,
            }))
          }
          const key = item.Findex;
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
      });
      // 为了得到有序列表，我们需要处理 map
      let hot = [];
      let ret = [];
      for(let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a,b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      });
      return hot.concat(ret)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.singer
  position: fixed
  top: 88px
  bottom: 0
  width: 100%
</style>
