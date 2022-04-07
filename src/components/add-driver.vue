<template>
  <div class="add-driver">
    <div class="card">
      <div class="app-flex-between app-margin-vertical">
        <div class="app-flex-between">
          <img class="app-mr-16" src="/images/card.svg" alt="card" />
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
        <h3>Mandatory Information</h3>
      </div>
      <form class="form">
        <input
          v-model="driver.captainName"
          class="app-input"
          type="text"
          placeholder="Captian Name"
        />
        <input
          v-model="driver.contactNumber"
          class="app-input"
          type="text"
          placeholder="Contact Number"
        />
        <input
          v-model="driver.emergencyContactNumber"
          class="app-input"
          type="text"
          placeholder=" Emergancy Contact Number"
        />
        <input
          v-model="driver.completeAddress"
          class="app-input"
          type="text"
          placeholder="Complete Adress"
        />
        <input
          v-model="driver.emailAddress"
          class="app-input"
          type="text"
          placeholder="Email"
        />
        <input
          v-model="driver.cnicNumber"
          class="app-input"
          type="text"
          placeholder="CNIC Number"
        />
        <input
          v-model="driver.drivingLicenseNumber"
          class="app-input"
          type="text"
          placeholder="Driving License Number"
        />
        <input
          v-model="driver.carType"
          class="app-input"
          type="text"
          placeholder="Car Type"
        />
        <input
          v-model="driver.carMaking"
          class="app-input"
          type="text"
          placeholder="Car Making"
        />
        <input
          v-model="driver.carModel"
          class="app-input"
          type="text"
          placeholder="Car Modal"
        />
        <input
          v-model="driver.carColor"
          class="app-input"
          type="text"
          placeholder="Car Color"
        />
        <input
          v-model="driver.carPlateNumber"
          class="app-input"
          type="text"
          placeholder="Car Plate Number"
        />
        <input
          v-model="driver.referenceName"
          class="app-input"
          type="text"
          placeholder="Referance Name/Number "
        />
        <input
          v-model="driver.rating"
          class="app-input"
          type="text"
          placeholder="Rating"
        />
      </form>
      <div class="app-margin-vertical" style="float: right">
        <button
          v-if="!id"
          @click="driverStore.addDriver(driver), updateShowModal()"
          style="width: 100px"
          class="app-btn app-btn--secondary"
        >
          Submit
        </button>
        <button
          v-else
          @click="driverStore.updateDriverById(id, driver), updateShowModal()"
          style="width: 100px"
          class="app-btn app-btn--secondary"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";
import { Driver } from "@/models/drivers.model";
import { useDrivers } from "@/store/driversStore";

export default defineComponent({
  props: ["id"],
  setup(props) {
    let driver = ref(new Driver());

    let driverStore = useDrivers();
    /* eslint-disable */
    let { updateShowModal }: any = inject("showModal");

    onMounted(() => {
      if (props.id) {
        driver.value = driverStore.driverById(props.id) as Driver;
      }
    });

    return { updateShowModal, driver, driverStore };
  },
});
</script>

<style lang="scss" scoped>
img {
  height: 20px;
}
form {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
</style>
