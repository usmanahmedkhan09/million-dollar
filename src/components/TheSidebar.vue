<template>
  <div class="sidebar">
    <div
      class="app-flex-between app-full-width app-mb-32"
      style="border-bottom: 1px solid; padding-block: 9.5px"
    >
      <p style="align-self: center; font-weight: 700; margin-left: 24px">
        VENDOR PANEL
      </p>
      <img src="/images/bars.svg" alt="home" style="height: 40px" />
    </div>
    <router-link class="sidebar--item" to="/">
      <img src="/images/home.svg" alt="home" />
      <span>Dashboard</span>
    </router-link>
    <router-link class="sidebar--item" to="">
      <img src="/images/book.svg" alt="home" />
      <span>Bookings</span>
    </router-link>
    <router-link class="sidebar--item" to="">
      <img src="/images/wallet.svg" alt="home" />
      <span>Earnings</span>
    </router-link>
    <router-link class="sidebar--item" to="drivers-info">
      <img src="/images/card.svg" alt="home" />
      <span>Drivers</span>
    </router-link>
    <router-link class="sidebar--item" to="">
      <img src="/images/bell.svg" alt="home" />
      <span>Notifications</span>
    </router-link>
    <router-link class="sidebar--item" to="">
      <img src="/images/lock.svg" alt="home" />
      <span>Change password</span>
    </router-link>
    <router-link class="sidebar--item" to="">
      <img src="/images/logout.svg" alt="home" />
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

  img {
    height: 20px;
    margin-right: 16px;
  }

  &--item {
    margin: 1rem;
    padding-left: 24px;
    text-decoration: none;
    color: black;
    display: flex;
    width: 100%;
    justify-content: flex-start;

    span {
      align-self: flex-end;
    }
  }
}
</style>
