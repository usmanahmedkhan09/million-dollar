<template>
  <div class="layout">
    <side-bar class="layout--sidebar"></side-bar>
    <div class="layout--topbar">topbar</div>
    <div class="layout--content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "../../components/TheSidebar.vue";

export default defineComponent({
  components: {
    SideBar,
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
    border-right: 1px solid black;
  }

  &--topbar {
    grid-area: layout--topbar;
    border-bottom: 1px solid black;
  }

  &--content {
    grid-area: layout--content;
    height: calc(100vh - 60px);
    padding: 2rem;
    overflow: scroll;
  }
}
</style>
