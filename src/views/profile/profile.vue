<template>
  <div class="drivers">
   
    <div class="d-header">
      <div style="flex-grow: 0.9" class="d-flex">
        <i class="app-mr-16 fonticon fa fa-user-circle"></i>
        <h3 style="margin:0">Profile</h3>
      </div>
      <div class="butnadd">
        <router-link to="edit-profile">
          <i class="fa fa-user-circle"></i>
          <span>Edit Profile</span>
        </router-link>
      </div>
      
    </div>
    <div class="dashboard__status">
      <div class="cardbox">
        <div class="card-body">
          <div class="profile-img-edit">
            <img class="profile-pic" src="/images/dp.jpg" alt="profile-pic">
            <div class="p-image">
              <i class="fas fa-edit "></i>
                <input class="file-upload" type="file" accept="image/*">
            </div>
          </div>
        </div>
      </div>
    
      <div class="cardbox">
        <div class="card-body">
          <div class="userdetailsec">
            <div class="userdetail">
              <p>First Name:</p>
              <p>John</p>
            </div>
            <div class="userdetail">
              <p>Last Name:</p>
              <p>Wood</p>
            </div>
            <div class="userdetail">
              <p>Email:</p>
              <p>John@gmail.com</p>
            </div>
            <div class="userdetail">
              <p>Phone:</p>
              <p>001 2351 256 12</p>
            </div>
            <div class="userdetail">
              <p> Location:</p>
              <p>Dubai</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard__status {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 30% auto;
    grid-gap: 1rem;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    margin-top: 2rem;
}
.fonticon{
  font-size:20px;
}
.textright{
  text-align: right;
}
.userdetailsec{

  .userdetail{
    align-items: center;
    display: grid;
    grid-template-columns: 30% auto;
    padding-bottom: 12px;
    
  }
}
.profile-img-edit {
    float: left;
    position: relative;
    display: inline-block;
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
    .profile-pic {
      max-width: 100%;
      display: block;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      height: 100%;
  }
    .p-image {
      position: absolute;
      top: auto;
      right: 8px;
      bottom: 10px;
      transition: all .3s cubic-bezier(.175, .885, .32, 1.275);
      background: #4a9aff;
      color: #fff;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      line-height: 28px;
      text-align: center;
      font-size: 12px;
      cursor: pointer;
      .upload-button {
          font-size: 1.5em;
      }
      .file-upload {
        display: none;
    }
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
    a{
      color: #fff;
      list-style: none;
      text-decoration: none;
    }
  i{
    margin-right:16px
  }
}

.d-flex {
  display: flex;
}
.d-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
form {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    .forminput{
      margin: 10px 0;
      label{
        display: inline-block;
        margin-bottom: 6px;
        font-weight: 500;
      }
      input {
          width: 100%;
          height: 40px;
          font-size: 14px;
          padding-inline: 1rem;
          background: rgba(239, 242, 246, 0.6);
          mix-blend-mode: normal;
          opacity: 0.8;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          color: black !important;
          font-family: "Montserrat", sans-serif;
          outline: none;
      }
      select {
          width: 100%;
          height: 40px;
          font-size: 14px;
          padding-inline: 1rem;
          background: rgba(239, 242, 246, 0.6);
          mix-blend-mode: normal;
          opacity: 0.8;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          color: black !important;
          font-family: "Montserrat", sans-serif;
          outline: none;
      }
       textarea {
          width: 100%;
          font-size: 14px;
          padding-inline: 1rem;
          background: rgba(239, 242, 246, 0.6);
          mix-blend-mode: normal;
          opacity: 0.8;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          color: black !important;
          font-family: "Montserrat", sans-serif;
          outline: none;
      }
    }
    
}

</style>
