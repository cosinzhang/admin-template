<template>
  <div class="app-wrapper">
    <header id="header">
      <div class="nav-logo">
        <a href="/index">INDEX</a>
      </div>

      <div class="navbar-menu-list">
        <a href="#">
          <Icon type="arrow-right-b" />&nbsp;菜单一</a>
        <a href="#">
          <Icon type="arrow-right-b" />&nbsp;菜单二</a>
        <a href="#" target="_blank">
          <Icon type="arrow-right-b" />&nbsp;菜单四</a>
      </div>
  
      <div class="navbar-nav">
        <a href="#" @click="toggleMenu">李四 <Icon type="arrow-down-b"/></a>
        <div class="dropdown-menu" :class="{'hidden': !menu}">
          <div style="margin-top:15px;"><a href="#" @click="logout">退出</a></div>
          <div class="divider"></div>
          <div><a href="#" style="padding-bottom: 5px;margin-bottom:15px;">帮助</a></div>
        </div>
      </div>
    </header>
    <main>
      <div class="app-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import _ from 'lodash';
  
  
  
  export default {
    components: {
      
    },
    created() {
  
    },
    data() {
      return {
        menu: false,
      }
    },
    methods: {
      toggleMenu(e) {
        e.preventDefault()
        this.menu = !this.menu
      },
      handleSelect(s) {
        console.info(s);
      },
      logout() {
        
      }
    }
  }
</script>

<style src="./index.less" lang="less">
  
</style>