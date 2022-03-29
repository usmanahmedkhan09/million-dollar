<template>
  <div class="add-driver">
    <div class="card">
      <div class="app-flex-between app-margin-vertical">
        <div class="app-flex-between">
          <img src="/images/card.svg" alt="card" />
          <div class="">
            <h3>Add New Driver</h3>
            <p class="app-width-50">
              lorem ipsum dolor sit am lorem lorem lorem ipsum dolor sit am
              lorem lorem lorem ipsum dolor sit am lorem lorem lorem ipsum dolor
              sit am lorem lorem
            </p>
          </div>
        </div>
        <div @click="updateShowModal">
          <img src="/images/xmark.svg" alt="xmark" />
        </div>
      </div>
      <div class="app-margin-vertical">
        <h2>Mandatory Information</h2>
      </div>
      <form class="form">
        <input class="app-input" type="text" placeholder="Captian Name" />
        <input class="app-input" type="text" placeholder="Contact Number" />
        <input
          class="app-input"
          type="text"
          placeholder=" Emergancy Contact Number"
        />
        <input class="app-input" type="text" placeholder="Complete Adress" />
        <input class="app-input" type="text" placeholder="Email" />
        <input class="app-input" type="text" placeholder="CNIC Number" />
        <input
          class="app-input"
          type="text"
          placeholder="Driving License Number"
        />
        <input class="app-input" type="text" placeholder="Car Type" />
        <input class="app-input" type="text" placeholder="Car Making" />
        <input class="app-input" type="text" placeholder="Car Modal" />
        <input class="app-input" type="text" placeholder="Car Color" />
        <input class="app-input" type="text" placeholder="Car Plate Number" />
        <input
          class="app-input"
          type="text"
          placeholder="Referance Name/Number "
        />
        <input class="app-input" type="text" placeholder="Rating" />
      </form>
      <div class="app-margin-vertical" style="float: right">
        <button style="width: 100px" class="app-btn app-btn--secondary">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    let { updateShowModal } = inject("showModal");
    return { updateShowModal };
  },
});
</script>

<style lang="scss" scoped>
form {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
</style>
