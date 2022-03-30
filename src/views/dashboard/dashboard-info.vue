<template>
  <div class="dashboard">
    <div class="dashboard--Title">
      
      <i class="fa fa-home app-mr-16"></i>
      <h3 style="margin:0">Dashboard</h3>
    </div>
    <div class="dashboard__status">
        <div class="cardbox">
            <div class="card-body flex j-c-between a-i-center text-whs-nowrap">
                <div class="cardboxtext">
                    <h4>Total Earnings</h4>
                    <p>$ 10,000 </p>
                </div>
                <div class="card-icon w-50 h-50">
                    <i class="fa fa-solid fa-dollar-sign"></i>
                </div>
            </div>
        </div>
        <div class="cardbox">
            <div class="card-body flex j-c-between a-i-center text-whs-nowrap">
                <div class="cardboxtext">
                    <h4>Total Bookings</h4>
                    <p>5000</p>
                </div>
                <div class="card-icon w-50 h-50">
                    <i class="fa fa-address-book"></i>
                </div>
            </div>
        </div>

        <div class="cardbox">
            <div class="card-body flex j-c-between a-i-center text-whs-nowrap">
                <div class="cardboxtext">
                    <h4>Drivers</h4>
                    <p>100</p>
                </div>
                <div class="card-icon w-50 h-50">
                    <i class="fa fa-car"></i>
                </div>
            </div>
        </div>
    </div>

    <div class="dashboard__message cardbox card-body">
      <h2>Welcome</h2>
      <div class="dashboardtext">
        <div style="align-self: center">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit numquam
            minus incidunt tempore tenetur assumenda rerum veniam, molestias
            voluptatibus maxime iste consectetur, doloribus sapiente ullam,
            repellendus quam ea voluptatum officia. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Sit numquam minus incidunt tempore
            tenetur assumenda rerum veniam, molestias voluptatibus maxime iste
            consectetur, doloribus sapiente ullam, repellendus quam ea voluptatum
            officia.
            </p>
        </div>
        <div class="icontaxi">
          <i class="fa fa-car"></i>
        </div>
       
      </div>
    </div>
    <div class="dashboard__bookings">
      <div class="dashboard__bookings--item cardbox">
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
      <div class="dashboard__bookings--item cardbox">
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
      <div class="dashboard__bookings--item cardbox">
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
.icontaxi{
    width: 80px;
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 20px rgb(0 0 0 / 10%);
    border-radius: 50%;
  i{
    font-size:30px;
    color: #c2c2c2;
  }
}
.cardbox {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 3px rgb(0 0 0 / 5%);
    margin-bottom: 30px;
    border: 0;
}
.cardboxtext{
  display:flex;
  flex-flow: column;
}
.card-body {
    padding: 30px;
}
.h-50 {
    height: 50px !important;
}
.w-50 {
    width: 50px !important;
}
.j-c-between {
    justify-content: space-between;
}

.a-i-center {
    align-items: center;
}
.flex {
    display: flex;
}
.text-whs-nowrap {
    white-space: nowrap;
}
.card-body {
      -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  .card-icon {
      border-radius: 100%;
      box-shadow: inset 0 0 20px rgb(0 0 0 / 10%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #c2c2c2;
  }
}
.dashboard {
  img {
    height: 20px;
  }
  &--Title {
    display: flex;
    align-items: center;
    i{
      font-size:20px
    }
  }

  &__status {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, auto);
    grid-gap: 1rem;
  
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
      font-size:14px;
      height: 300px;
      border-radius: 10px;
      margin-top: 2rem;
      padding: 1rem;
    }
  }

  &__message {
    margin-top: 1rem;

    img {
      height: 80px;
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
      border-bottom: 1px solid #dbdbdb;
      border-top: 1px solid #dbdbdb;
      border-collapse: collapse;
    }
  }
}
table,
th,
td {
  padding: 16px 0px;
}
.dashboardtext{
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, auto);
}


</style>
