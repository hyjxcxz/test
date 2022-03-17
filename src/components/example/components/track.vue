<template>
  <div v-if="showTrackPanel" class="trackTask-continer">
    <div>
      <div class="trackTask-continer-title">轨迹回放</div>
      <el-button
        class="trackTask-continer-Close"
        @click="closeTrack"
      ></el-button>
    </div>
    <div class="trackTask-tabs-speed trackTask-table-continer">
      <div class="block">
        <el-row>
          <el-button
            type="primary"
            circle
            :class="{
              'iconfont icon-zanting': startPlay,
              'iconfont icon-zantinganniu': !startPlay,
            }"
            @click="startClick()"
          ></el-button>
        </el-row>
        <el-slider
          class="speed-slider"
          v-model="value4"
          :format-tooltip="formatTooltip"
        ></el-slider>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "tracks",
  data() {
    return {
      option: {},
      activeName: "first",
      speed: 1,
      value4: 50,
      startPlay: false,
      startOn: 0,
      intevals: 1000,
      tintevals: 1000,
      latlngs: [],
      indexPoint: 0,
      intervalId: null,
      points: [],
      currentTrackPoint: {},
    };
  },
  computed: {
    ...mapState({
      showTrackPanel: function (state) {
        return state.showTrackPanel;
      },
    }),
  },
  methods: {
    handleClick(tab) {
      this.activeName = tab.name;
    },
    init(option) {
      this.option = option;
      this.dealdirection();
    },
    closeTrack() {
      this.$store.commit("showTrackPanel", false);
    },
    formatTooltip(val) {
      const values = val / 100;
      this.speed = values / 0.25;
      if (this.startPlay) {
        if (this.speed !== 0) {
          this.intevals = this.tintevals / this.speed;
        }
        this.changeSpeed(this.latlngs, this.intevals);
      }
      return this.speed + "倍速";
    },
    startClick() {
      if (!this.startPlay) {
        this.startPlay = true;
        const latLng =
          this.indexPoint === 0
            ? this.option.trackData.track[this.indexPoint]
            : this.option.trackData.track[this.indexPoint - 1];
        if (latLng) {
          const obj = {
            id: this.option.parentData.id,
            name: this.option.parentData.name,
            lat: latLng.lat,
            direction: latLng.direction,
            lng: latLng.lng,
          };
          this.polylineLayer.addPointsOne(obj, "shipManage");
          this.startplays();
        }
      } else {
        this.startPlay = false;
        this.pauseplay();
      }
      this.startOn++;
    },
    startplays() {
      //   if (this.startOn === 0) {
      //     this.polylineLayer.startClick(this.latlngs)
      //   }
      this.animatedMarker();
    },
    changeSpeed() {
      this.pauseplay();
      this.animatedMarker();
    },
    pauseplay() {
      clearInterval(this.intervalId); // 清除计时器
      this.intervalId = null; // 设置为null
    },
  },
};
</script>
<style lang="scss" scoped>
.trackTask-continer {
  background: #fff;
  width: 400px;
  height: 100px;
  position: absolute;
  left: 220px;
  z-index: 401;
  margin-top: 20px;
  .trackTask-tabs-speed {
    .speed-slider {
      width: 80%;
      float: left;
    }
    .el-row {
      width: 20px;
      float: left;
      margin: 9px;
    }
  }
  .trackTask-table-continer {
    max-height: calc(100vh - 200px);
    overflow-y: auto;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    margin-top: 10px;
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
  .el-button.is-circle {
    border-radius: 50%;
    padding: 0;
    border: unset;
    background: unset;
    font-size: 22px;
    color: #409eff;
  }
}
</style>
