/* eslint-disable import/no-unresolved */
<template>
  <div id="app">
    <dl>
      <dt>
        <h1>基本布局</h1>
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>
        xxx
      </dd>
    </dl>
    <dl>
      <dt>
        <h1>分栏间隔</h1>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>
        xxx
      </dd>
    </dl>
    <dl>
      <dt>
        <h1>混合布局</h1>
        <el-row :gutter="20">
          <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>
        xxx
      </dd>
    </dl>
    <dl>
      <dt>
        <h1>分栏偏移</h1>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"  :pull="6">
            <div class="grid-content bg-purple">
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :push="12"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>
        xxx
      </dd>
    </dl>
    <dl>
      <dt>
        <h1>对齐方式</h1>
        <el-row type="flex" class="row-bg" >
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center" align="bottom">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>
        xxx
      </dd>
    </dl>
    <dl>
      <dt>
        <h1>Bootstrap响应式布局</h1>
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>
        xxx
      </dd>
    </dl>
    <dl>
      <dt>
        <h1>基于断点的隐藏类</h1>
        <el-row :gutter="10">
          <el-col class="hidden-xs-only" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>
      </dd>
    </dl>
  </div>
</template>

<script>
import ElRow from '@/components/element/Row.vue';
import ElCol from '@/components/element/Col.vue';

export default {
  name: 'App',
  components: {
    ElRow,
    ElCol,
  },
};
</script>

<style lang="scss">
dl{
  text-align:center;
  margin:0 10vh;
  margin-bottom: 5vh;
  padding:0 2vh;
  border: #bf9999 solid 2px;
  border-radius: 15px;
  min-width:350px;
}
h1 {
  color:#c48585;
  font-size:2rem;
  text-align:center
}
h2 {
  color:#c48585;
  font-size: 1rem;
  text-align:center
}
dd {
  border: #e6d3d3 solid 2px;
  border-radius: 15px;
  margin:0 0 2vh 0;
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #bf9999;
  }
  .bg-purple {
    background: #e6d3d3;
  }
  .bg-purple-light {
    background: #f2e5e5;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #fcf9f9;
  }
  .hidden {
      &-xs-only {
          @media only screen and (max-width:768px-1){
              display:none;
          }
      }
      &-sm-only {
          @media only screen and (min-width:768px) and (max-width:992px-1){
              display:none;
          }
      }
      &-md-only {
          @media only screen and (min-width:992px) and (max-width:1200px-1){
              display:none;
          }
      }
      &-lg-only {
          @media only screen and (min-width:1200px) and (max-width:1920px-1){
              display:none;
          }
      }
      &-xl-only {
          @media only screen and (min-width:1920px){
              display:none;
          }
      }
      &-sm-and-down {
          @media only screen and (max-width:992px-1){
              display:none;
          }
      }
      &-sm-and-up {
          @media only screen and (min-width:768px){
              display:none;
          }
      }
      &-md-and-down {
          @media only screen and (max-width:1200px-1){
              display:none;
          }
      }
      &-md-and-up {
          @media only screen and (min-width:992px){
              display:none;
          }
      }
      &-lg-and-down {
          @media only screen and (max-width:1920px-1){
              display:none;
          }
      }
      &-lg-and-up {
          @media only screen and (min-width:1200px){
              display:none;
          }
      }
  }
</style>
