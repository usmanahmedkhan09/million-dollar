<template>
  <div class="drivers">
    <app-modal :showModal="showModal">
      <add-driver :id="driverId" v-if="driverId"></add-driver>
    </app-modal>
    <div class="d-header">
      <div style="flex-grow: 0.9" class="d-flex">
        <img class="app-mr-16" src="/images/card.svg" alt="card" />
        <h3 style="margin: 0">Drivers</h3>
      </div>
      <div class="butnadd" @click="showModal = true">
        <i class="fa fa-plus"></i>
        <span>Add New Driver</span>
      </div>

      <div class="butnadd">
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
          <tr v-for="driver in drivers" :key="driver._id">
            <td>{{ driver.captainName }}</td>
            <td>{{ driver.contactNumber }}</td>
            <td>{{ driver.emailAddress }}</td>
            <td>{{ driver.drivingLicenseNumber }}</td>
            <td>{{ driver.cnicNumber }}</td>
            <td>
              <div class="tableicon">
                <i class="fa fa-eye" @click="updateShowModal(driver._id)"></i>
                <i
                  class="fa fa-trash"
                  @click="driverStore.deleteDriverById(driver._id)"
                ></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, provide, onMounted } from "vue";
import AddDriver from "../../components/add-driver.vue";
import { useDrivers } from "@/store/driversStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    AddDriver,
  },
  setup() {
    let showModal = ref(false);

    let driverStore = useDrivers();

    let { getDrivers } = driverStore;

    let { drivers } = storeToRefs(driverStore);

    let driverId = ref("");

    /* eslint-disable */
    const updateShowModal = (id: any) => {
      driverId.value = id;
      showModal.value = !showModal.value;
    };

    provide("showModal", { showModal, updateShowModal });

    onMounted(() => {
      getDrivers();
    });

    return { showModal, updateShowModal, driverStore, driverId, drivers };
  },
});
</script>
<style lang="scss" scoped>
.tableicon {
  i {
    color: #4a9aff;
    padding: 6px;
    font-size: 16px;
  }
}
.butnadd {
  background: #4a9aff;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 5px;
  font-size: 14px;
  i {
    margin-right: 16px;
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
  background: #fff;
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
