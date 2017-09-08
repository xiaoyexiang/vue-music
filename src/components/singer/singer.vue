<template>
  <div>
    singer
  </div>
</template>

<script type="text/ecmascript-6">
  import {getSingerList} from 'api/singer.js'
  import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        singers: []
      }
    },
    created: function () {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = res.data.list
            console.log(this.singers)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
