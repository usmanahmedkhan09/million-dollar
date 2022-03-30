<template>
  <div class="layout">
    <side-bar class="layout--sidebar"></side-bar>
    <div class="layout--topbar">
      <top-bar></top-bar>
    </div>
    <div class="layout--content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "../../components/TheSidebar.vue";
import TopBar from "../../components/TheTopbar.vue";

export default defineComponent({
  components: {
    SideBar,
    TopBar,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
.layout {
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-columns: 16% auto;
  grid-template-areas:
    "layout--sidebar layout--topbar"
    "layout--sidebar layout--content";

  &--sidebar {
    grid-area: layout--sidebar;
    background: #ffffff;
    border-right: 0px solid #e4e4e4;
    z-index: 11;
    box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
    transition: all .2s ease-out;
  }

  &--topbar {
    grid-area: layout--topbar;
    box-shadow: 0 0 20px #4a9aff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 999;
    background: #4a9aff;
  }

  &--content {
    grid-area: layout--content;
    height: calc(100vh - 60px);
    padding: 2rem;
    overflow: scroll;
    background: #f5f5f5;
  }
}
</style>
