<template>
  <div id="app">
    <dl>
      <dt>
        <h1>基本布局</h1>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>xxx</dd>
    </dl>
    <dl>
      <dt>
        <h1>分栏间隔</h1>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>xxx</dd>
    </dl>
    <dl>
      <dt>
        <h1>混合布局</h1>
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>xxx</dd>
    </dl>
    <dl>
      <dt>
        <h1>分栏偏移</h1>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6" :offset="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" :offset="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6" :pull="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12" :push="12">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>xxx</dd>
    </dl>
    <dl>
      <dt>
        <h1>对齐方式</h1>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center" align="bottom">
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="end">
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </dt>
      <h2>代码展示</h2>
      <dd>xxx</dd>
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
      <dd>xxx</dd>
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
      <dd>xxx</dd>
    </dl>
    <dl>
      <dt>
        <h1>Container容器</h1>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>

        <el-container>
          <el-aside width="200" >Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200" >Aside</el-aside>
            <el-main>Main</el-main>
          </el-container>
        </el-container>

        <el-container>
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200" >Aside</el-aside>
            <el-container>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </el-container>
        </el-container>

        <el-container>
          <el-aside width="200" >Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
          </el-container>
        </el-container>

        <el-container>
          <el-aside width="200" >Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </dt>
      <h2>代码展示</h2>
      <dd>xxx</dd>
    </dl>
  </div>
</template>
