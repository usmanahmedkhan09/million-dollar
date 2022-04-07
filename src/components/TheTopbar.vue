<template>
  <div class="topbar-container">
    <div class="search__wrapper">
      <input class="app-search" type="text" placeholder="search...." />
      <i class="fa fa-search"></i>
    </div>
    <div><h4 style="margin:0;color:#fff">Vendor</h4></div>
    <div class="item-divider"></div>
    <div class="userprofileicon">
      <router-link to="profile">
      <i class="fa fa-user-circle"></i>
       </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.topbar-container {
  width: 35%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}
.item-divider {
  position: absolute;
  height: 46px;
  width: 1px;
  right: 40%;
  border: 1px solid #fff;
}
.userprofileicon{
  i{
    font-size:40px;
    color: #fff
  }
}
</style>
