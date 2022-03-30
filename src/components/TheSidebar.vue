<template>
  <div class="sidebar">
    <div
      class="app-flex-between app-full-width app-mb-32"
      style="border-bottom: 1px solid #e4e4e4; padding-block: 9.5px;background: #4a9aff;color:#fff"
    >
      <p style="align-self: center; font-weight: 700; margin-left: 24px">
        VENDOR PANEL
      </p>
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <router-link class="sidebar--item" to="/">
      <i class="fa fa-home"></i>
      <span>Dashboard</span>
    </router-link>
    <router-link class="sidebar--item" to="">
      <i class="fa fa-address-book"></i>
      <span>Bookings</span>
    </router-link>
    <router-link class="sidebar--item" to="">
      <i class='fas fa-wallet'></i>
      <span>Earnings</span>
    </router-link>
    <router-link class="sidebar--item" to="drivers-info">
      <i class="fa fa-address-card"></i>
      <span>Drivers</span>
    </router-link>
    <router-link class="sidebar--item" to="">
      <i class="fa fa-bell"></i>
      <span>Notifications</span>
    </router-link>
    <router-link class="sidebar--item" to="">
      <i class="fa fa-lock"></i>
      <span>Change password</span>
    </router-link>
    <router-link class="sidebar--item" to="">
      <i class="fa fa-power-off"></i>
      <span>Logout</span>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  :hover{
      background:rgb(74, 154, 255);
      color:#fff;
    }

  i {
    margin-right: 16px;
  }

  &--item {
    padding: 1rem 24px;
    text-decoration: none;
    color: #5f5f5f;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    font-weight: 500;
    
    span {
      align-self: flex-end;
    }
  }
}
</style>
