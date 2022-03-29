<template>
  <div class="dashboard">
    <div class="dashboard--Title">
      <img class="app-mr-16" src="/images/home.svg" alt="home" />
      <h3>Dashboard</h3>
    </div>
    <div class="dashboard__status">
      <div class="dashboard__status--one app-text-center">
        <h4>$ 10,000</h4>
        <p>Total Earnings</p>
      </div>
      <div class="dashboard__status--one app-text-center">
        <h4>5000</h4>
        <p>Total Bookings</p>
      </div>
      <div class="dashboard__status--one app-text-center">
        <h4>Drivers</h4>
        <p>100</p>
      </div>
    </div>
    <div class="dashboard__message">
      <h1>Welcome</h1>
      <div class="app-flex-between">
        <div style="align-self: center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit numquam
          minus incidunt tempore tenetur assumenda rerum veniam, molestias
          voluptatibus maxime iste consectetur, doloribus sapiente ullam,
          repellendus quam ea voluptatum officia. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Sit numquam minus incidunt tempore
          tenetur assumenda rerum veniam, molestias voluptatibus maxime iste
          consectetur, doloribus sapiente ullam, repellendus quam ea voluptatum
          officia.
        </div>
        <img src="/images/car.svg" alt="car" />
      </div>
    </div>
    <div class="dashboard__bookings">
      <div class="dashboard__bookings--item">
        <div class="app-flex-between">
          <h4>Recents Bookings Pendings</h4>
          <span>View All</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Booking Id</th>
              <th>Customer Name</th>
              <th>Type</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5670</td>
              <td>Bob Smith</td>
              <td>Shared</td>
              <td>$ 500</td>
            </tr>
            <tr>
              <td>5670</td>
              <td>Bob Smith</td>
              <td>Shared</td>
              <td>$ 500</td>
            </tr>
            <tr>
              <td>5670</td>
              <td>Bob Smith</td>
              <td>Shared</td>
              <td>$ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="dashboard__bookings--item">
        <div class="app-flex-between">
          <h4>Recents Bookings Progress</h4>
          <span>View All</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Booking Id</th>
              <th>Customer Name</th>
              <th>Type</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5670</td>
              <td>Bob Smith</td>
              <td>Shared</td>
              <td>$ 500</td>
            </tr>
            <tr>
              <td>5670</td>
              <td>Bob Smith</td>
              <td>Shared</td>
              <td>$ 500</td>
            </tr>
            <tr>
              <td>5670</td>
              <td>Bob Smith</td>
              <td>Shared</td>
              <td>$ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="dashboard__bookings--item">
        <div class="app-flex-between">
          <h4>Recents Bookings Completed</h4>
          <span>View All</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Booking Id</th>
              <th>Customer Name</th>
              <th>Type</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5670</td>
              <td>Bob Smith</td>
              <td>Shared</td>
              <td>$ 500</td>
            </tr>
            <tr>
              <td>5670</td>
              <td>Bob Smith</td>
              <td>Shared</td>
              <td>$ 500</td>
            </tr>
            <tr>
              <td>5670</td>
              <td>Bob Smith</td>
              <td>Shared</td>
              <td>$ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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

<style lang="scss" scoped>
.dashboard {
  img {
    height: 20px;
  }
  &--Title {
    display: flex;
  }

  &__status {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, auto);
    height: 100px;
    border: 1px solid black;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    margin-top: 2rem;
  }

  &__bookings {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, auto);
    column-gap: 16px;
    width: 100%;

    &--item {
      border: 1px solid black;
      height: 300px;
      border-radius: 10px;
      margin-top: 2rem;
      padding: 1rem;
    }
  }

  &__message {
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 1rem;
    padding: 1rem;

    img {
      height: 100px;
    }
  }
}
table {
  width: 100%;
  margin-top: 24px;
  border-spacing: unset;

  thead {
    text-align: left;

    th {
      border-bottom: 1px solid;
      border-top: 1px solid;
      border-collapse: collapse;
    }
  }
}
table,
th,
td {
  padding: 16px 0px;
}
</style>
