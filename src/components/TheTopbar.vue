<template>
  <div class="topbar-container">
    <div class="search__wrapper">
      <input class="app-search" type="text" placeholder="search...." />
      <img src="/images/search-icon.svg" alt="search-icon" height="20px" />
    </div>
    <div>Vendor</div>
    <div class="item-divider"></div>
    <div class="">
      <img height="40px" src="/images/user.svg" alt="user" />
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
  border: 1px solid black;
}
</style>
