<template>
  <Transition name="modal">
    <Teleport to="body">
      <div v-if="showModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <slot></slot>
          </div>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>
