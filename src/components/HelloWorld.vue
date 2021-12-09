<template>
  <div class="hello">
    <div class="hello-title">
      <h1>{{ msg }}</h1>
      <h2>开源、可扩展</h2>
      <!-- <div class="hello-title-downs">
        <el-button type="primary" icon="">下载</el-button>
      </div> -->
    </div>
    <div class="hello-describe">
      <p class="hello-describe-title">
        GoldWind GIS for leaflet API (GW-GIS)二维地图可视化开发平台
      </p>
      <p class="hello-describe-content">
        完成地图开发平台建设，首先可解决代码不规范问题，使系统运行速
        度更快，代码复用率提升，可节约开发资源；其次，技术迭代更便捷；再次，方
        便对风电行业的业务功能进行定制化，为后期功能优化奠定基石；最重要的是，
        可实现风电行业地图开发平台零的突破，为风电行业在二维可视化领域打下坚实
        的基础。
      </p>
    </div>
    <p class="hello-download">
      GW-GIS 1.0
      <a
        href="../vendors/goldwind.leaflet.min.js"
        download="goldwind.leaflet.min.js"
        >下载</a
      >
    </p>
    <div class="hello-Introduction">
      <div class="hello-Introduction-item">
        <h3>开发指南</h3>
        <p>
          主要介绍 GW-GIS 的入门用法包括 Leaflet 下载方式、GW-GIS 的下载途径、
          文件方式引入、模块化开发方式、打包配置说明等。
        </p>
      </div>
      <div class="hello-Introduction-item">
        <h3>API</h3>
        <p>
          GW-GIS 拟定 6 大模块和 24 个基础接口，每个接口根据实际需要明
          确给出具体 options 及常用方法，如
          L.GW.Map.mouseOver、L.GW.Map.mouseMove、 L.GW.Layer.setZIndex
          等，并给出 API 文档。services 模块，制定统一 规范配置文件命名为
          MapConfig.js，style 模块制定 mapStyleConfig.js。
        </p>
      </div>
      <div class="hello-Introduction-item">
        <h3>示例</h3>
        <p>
          应用 GW-GIS 做出加载 wms、wmts 、Inner、ArcGIS、Google、Gaode 的地
          图服务示例、渲染基础点线面及点 buffer
          的示例、轨迹回放示例以及测距、全图、
          缩放+-、鼠标实时获取坐标、获取高程、地图比例尺、测量面积、坐标系转换、
          点查询、高程剖面等仅 10 种操作示例，每个示例都有一一对应的注释。所开发
          的示例打包成.zip，以方便用户下载使用。
        </p>
      </div>
      <div class="hello-Introduction-item">
        <h3>关于</h3>
        <p>GW_GIS的使用说明，用户反馈信息和问题解答，作者简介和联系方式</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: inline-block;
  .hello-title {
    color: #fff;
    background-image: url(../assets/img/title.jpeg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    padding: 50px 0;
    font-size: 25px;
    font-weight: 800;
    height: 186px;
  }
  .hello-title-downs {
    float: left;
    margin: 60px 0 0 20px;
  }
  h1 {
    text-align: left;
    color: #fff;
    margin: 0 0 0 20px;
  }
  h2 {
    text-align: left;
    color: #fff;
    margin: 0 0 0 20px;
  }
  h3 {
    margin: 10px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .hello-describe {
    text-align: center;
    margin: 30px auto;
    width: 50%;
    .hello-describe-title {
      font-size: 32px;
      font-weight: 800;
    }
    .hello-describe-content {
      font-size: 20px;
    }
  }
  .hello-download {
    font-size: 16px;
  }
  .hello-Introduction {
    // height: e("calc(100% - 624px)");
    .hello-Introduction-item {
      width: 50%;
      float: left;
    }
  }
}
</style>
