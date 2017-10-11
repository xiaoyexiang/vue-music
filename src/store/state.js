import {playMode} from 'common/js/config'
import {loadSearch} from 'common/js/cache'

const state = {
  singer: {},
  playing: false,              // 播放状态
  fullScreen: false,           // 全屏播放
  playlist: [],                // 播放列表
  sequenceList: [],            // 顺序列表
  mode: playMode.sequence,     // 播放模式 0，1，2
  currentIndex: -1,            // 播放index
  disc: {},                    // 歌单
  topList: {},                 // 排行歌单列表
  searchHistory: loadSearch() // 搜索历史
}

export default state
