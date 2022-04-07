<template>
  <div class="drivers">
   
    <div class="d-header">
      <div style="flex-grow: 0.9" class="d-flex">
        <i class="app-mr-16 fonticon fa fa-lock"></i>
        <h3 style="margin:0">Change Password</h3>
      </div>
     
      
    </div>
    <div class="cardbox">
      <div class="card-body">
        
        <form>
          <div class="forminput">
            <label>Current Password:</label>
            <input type="text" placeholder="" >
          </div>
          <div class="forminput">
            <label>New Password:</label>
            <input type="text" placeholder="" >
          </div>
          <div class="forminput">
            <label>Verify Password:</label>
            <input type="text" placeholder="" >
          </div>
          
        </form>
        <div class="app-margin-vertical textright"  data-v-022086e4=""><button style="width:100px;" class="app-btn app-btn--secondary" data-v-022086e4=""> Submit </button></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fonticon{
  font-size:20px;
}
.textright{
  text-align: right;
}
.profile-img-edit {
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
