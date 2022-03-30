<template>
  <div class="drivers">
    <app-modal :showModal="showModal">
      <add-driver></add-driver>
    </app-modal>
    <div class="d-header">
      <div style="flex-grow: 0.9" class="d-flex">
        <img class="app-mr-16" src="/images/card.svg" alt="card" />
        <h3 style="margin:0">Drivers</h3>
      </div>
      <div class="butnadd" @click="showModal = true" >
        <i class="fa fa-plus"></i>
        <span>Add New Driver</span>
      </div>
      
      <div class="butnadd" >
        <i class="fa fa-share"></i>
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
              <div class="tableicon">
                <i class="fa fa-eye"></i>
                <i class="fa fa-trash"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td>lorem</td>
            <td>1232322</td>
            <td>lorem@example.com</td>
            <td>APK</td>
            <td>424444997</td>
            <td>
              <div class="tableicon">
                <i class="fa fa-eye"></i>
                <i class="fa fa-trash"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td>lorem</td>
            <td>1232322</td>
            <td>lorem@example.com</td>
            <td>APK</td>
            <td>424444997</td>
            <td>
              <div class="tableicon">
                <i class="fa fa-eye"></i>
                <i class="fa fa-trash"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td>lorem</td>
            <td>1232322</td>
            <td>lorem@example.com</td>
            <td>APK</td>
            <td>424444997</td>
            <td>
              <div class="tableicon">
                <i class="fa fa-eye"></i>
                <i class="fa fa-trash"></i>
              </div>
            </td>
          </tr>
          <tr>
            <td>lorem</td>
            <td>1232322</td>
            <td>lorem@example.com</td>
            <td>APK</td>
            <td>424444997</td>
            <td>
              <div class="tableicon">
                <i class="fa fa-eye"></i>
                <i class="fa fa-trash"></i>
              </div>
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
.tableicon{
  i{
    color: #4a9aff;
    padding: 6px;
    font-size: 16px;
  }
}
.butnadd{
    background: #4a9aff;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 8px 14px;
    border-radius: 5px;
    font-size: 14px;
  i{
    margin-right:16px
  }
}
img {
  height: 20px;
}
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
  border: 1px solid #ccc;
  border-spacing: unset;
  background:#fff;
  font-size: 14px;

  tr th {
    text-align: center;
    border-top: 1px solid #4a9aff;
    border-bottom: 1px solid #4a9aff;
    border-collapse: collapse;
    padding: 0.8rem;
    background: #4a9aff;
    color: white;
  }

  tr td {
    text-align: center;
    border-bottom: 1px solid #ccc;
    border-collapse: collapse;
    padding: 0.8rem;
  }
}
</style>
