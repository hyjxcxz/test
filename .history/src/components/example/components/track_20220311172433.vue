<template>
  <div v-if="track" class="trackTask-continer">
      <div class="trackTask-tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="回放" name="first">
                <span slot="label"><i class="iconfont icon-a-renwubeifen2"></i>回放</span>
                <div class="trackTask-tabs-speed trackTask-table-continer">
                    <div class="block">
                        <el-row>
                         <el-button size="mini" type="primary" circle class="speed-button" :class="{'iconfont icon-zanting':startPlay===1,'iconfont icon-bofang':startPlay===0}" @click="startClick()"></el-button>
                        </el-row>
                        <el-slider class="speed-slider" v-model="value4" :format-tooltip="formatTooltip"></el-slider>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>
<script>
export default {
    props:['track'],
  data () {
    return {
      option: {},
      activeName: 'first',
      speed: 1,
      value4: 50,
      startPlay: 0,
      startOn: 0,
      intevals: 1000,
      tintevals: 1000,
      latlngs: [],
      indexPoint: 0,
      intervalId: null,
      points: [],
      currentTrackPoint: {}
    }
  },
  methods: {
    handleClick (tab) {
      this.activeName = tab.name
    },
    init (option) {
      this.option = option
      this.dealdirection()
    },
    
    formatTooltip (val) {
      const values = val / 100
      this.speed = (values / 0.25)
      if (this.startPlay === 1) {
        if (this.speed !== 0) {
          this.intevals = this.tintevals / this.speed
        }
        this.changeSpeed(this.latlngs, this.intevals)
      }
      return this.speed + '倍速'
    },
    startClick () {
      if (this.startPlay === 0) {
        this.startPlay = 1
        const latLng = (this.indexPoint === 0) ? this.option.trackData.track[this.indexPoint] : this.option.trackData.track[this.indexPoint - 1]
        if (latLng) {
          const obj = {
            id: this.option.parentData.id,
            name: this.option.parentData.name,
            lat: latLng.lat,
            direction: latLng.direction,
            lng: latLng.lng
          }
          this.polylineLayer.addPointsOne(obj, 'shipManage')
          this.startplay()
        }
      } else {
        this.startPlay = 0
        this.pauseplay()
      }
      this.startOn++
    },
    startplay () {
    //   if (this.startOn === 0) {
    //     this.polylineLayer.startClick(this.latlngs)
    //   }
      this.animatedMarker()
    },
    changeSpeed () {
      this.pauseplay()
      this.animatedMarker()
    },
    pauseplay () {
      clearInterval(this.intervalId) // 清除计时器
      this.intervalId = null // 设置为null
    },
  }
}
</script>
<style lang="scss" scoped>
.trackTask-continer{
    background: #fff;
    /deep/.el-tabs__item .iconfont{
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
    }
    .trackTask-tabs{
        padding: 0 10px 10px 10px;
        font-size: 14px;
        /deep/.el-tabs__item{
            font-size: 14px;
            padding: 0 9px;
            .iconfont{
                font-size: 14px;
            }
        }

        .trackTask-tabs-speed{
            .speed-slider{
                width: 80%;
                float: left;
                }
            .el-row{
                width: 20px;
                float: left;
                margin: 9px;
            }
            /deep/.el-button{
                height: 20px;
                width: 20px;
                padding: unset;
                background: #fff;
                color: #1788fa;
            }

        }
        .trackTask-table-continer{
            max-height: calc(100vh - 200px);
            overflow-y: auto;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #000000;
        }
          .trackTask-table-continer::-webkit-scrollbar {
    width: 2px !important; // 横向滚动条
    height: 3px; // 纵向滚动条 必写
    cursor: pointer;
  }
  .trackTask-table-continer::-webkit-scrollbar-track {
    background-color: rgba(13, 35, 83, 0.7);
    box-shadow: none;
    cursor: pointer;
  }
  // 滚动条的滑块
  .trackTask-table-continer::-webkit-scrollbar-thumb {
    background-color: rgba(87, 193, 255, 0.5);
    border-radius: 3px;
    cursor: pointer;
  }
  .trackTask-table-continer::-webkit-scrollbar-button {
    display: none;
    background-color: rgba(13, 35, 83, 0.8);
    width: 50px;
    cursor: pointer;
  }
    }
    /deep/.el-button{
       border: unset;
        background: unset;
        color: #fff;
        font-size: 20px;
        padding: 10px 10px 10px 0px;
    }
}
</style>
