<template>
  <div class="drivers">
    <app-modal :showModal="showModal">
      <add-driver></add-driver>
    </app-modal>
    <div class="d-header">
      <div style="flex-grow: 0.9" class="d-flex">
        <img src="/images/card.svg" alt="card" />
        <span>Drivers</span>
      </div>
      <div class="d-flex" @click="showModal = true" style="cursor: poniter">
        <img src="/images/plus.svg" alt="card" />
        <span>Add New Driver</span>
      </div>
      <div class="d-flex">
        <img src="/images/share.svg" alt="card" />
        <span>Share Link</span>
      </div>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Full name</th>
            <th>Contact No</th>
            <th>Email Address</th>
            <th>Driving License</th>
            <th>CNIC Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>lorem</td>
            <td>1232322</td>
            <td>lorem@example.com</td>
            <td>APK</td>
            <td>424444997</td>
            <td>
              <img src="/images/edit.svg" alt="edit" />
              <img src="/images/trash.svg" alt="edit" />
            </td>
          </tr>
          <tr>
            <td>lorem</td>
            <td>1232322</td>
            <td>lorem@example.com</td>
            <td>APK</td>
            <td>424444997</td>
            <td>
              <img src="/images/edit.svg" alt="edit" />
              <img src="/images/trash.svg" alt="edit" />
            </td>
          </tr>
          <tr>
            <td>lorem</td>
            <td>1232322</td>
            <td>lorem@example.com</td>
            <td>APK</td>
            <td>424444997</td>
            <td>
              <img src="/images/edit.svg" alt="edit" />
              <img src="/images/trash.svg" alt="edit" />
            </td>
          </tr>
          <tr>
            <td>lorem</td>
            <td>1232322</td>
            <td>lorem@example.com</td>
            <td>APK</td>
            <td>424444997</td>
            <td>
              <img src="/images/edit.svg" alt="edit" />
              <img src="/images/trash.svg" alt="edit" />
            </td>
          </tr>
          <tr>
            <td>lorem</td>
            <td>1232322</td>
            <td>lorem@example.com</td>
            <td>APK</td>
            <td>424444997</td>
            <td>
              <img src="/images/edit.svg" alt="edit" />
              <img src="/images/trash.svg" alt="edit" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import AddDriver from "../../components/add-driver.vue";

export default defineComponent({
  components: {
    AddDriver,
  },
  setup() {
    let showModal = ref(false);

    const updateShowModal = () => {
      showModal.value = !showModal.value;
    };

    provide("showModal", { showModal, updateShowModal });

    return { showModal, updateShowModal };
  },
});
</script>
<style lang="scss" scoped>
.d-flex {
  display: flex;
}
.d-header {
  display: flex;
  justify-content: space-between;
}
table {
  width: 100%;
  margin-top: 2rem;
  border: 1px solid black;
  border-spacing: unset;

  tr th {
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-collapse: collapse;
    padding: 0.8rem;
    background: black;
    color: white;
  }

  tr td {
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-collapse: collapse;
    padding: 0.8rem;
  }
}
</style>
