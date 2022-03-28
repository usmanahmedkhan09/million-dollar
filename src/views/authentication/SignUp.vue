<template>
  <div class="signIn">
    <div class="signIn__item--one">
      <p class="signIn--Title">Million Dollar</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        blanditiis ipsam, fuga consequuntur nesciunt at enim adipisci pariatur
        consequatur voluptatum aperiam nostrum inventore itaque officiis
        laboriosam eum omnis dignissimos similique!
      </p>
    </div>
    <div class="signIn__item--two">
      <div class="app-text-center app-width-50">
        <h2 class="app-mb-32">VENDOR SIGNUP</h2>
      </div>
      <form class="signIn--form">
        <input class="app-input" type="text" placeholder="Full Name" />
        <input
          class="app-input app-mt-10"
          type="text"
          placeholder="Bussiness Name"
        />
        <input class="app-input app-mt-10" type="text" placeholder="Address" />
        <input
          class="app-input app-mt-10"
          type="text"
          placeholder="License No"
        />
        <input class="app-input app-mt-10" type="text" placeholder="Email" />
        <input class="app-input app-mt-10" type="text" placeholder="Password" />

        <div class="app-flex-between app-margin-vertical">
          <p class="app-text-xsmall">Remeber Me</p>
          <p class="app-text-xsmall">Forget Password</p>
        </div>

        <button class="app-btn app-btn--secondary" type="submit">SIGNUP</button>
      </form>
      <div class="app-text-center app-width-50 app-margin-vertical">
        <p>OR</p>
      </div>
      <div class="app-text-center app-width-50 app-margin-vertical">
        <p>Already Have An Account? Login</p>
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
<style lang="scss">
.signIn {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  height: 100%;

  &__item--one {
    align-self: center;
    justify-content: center;
    padding: 4rem;
  }

  &__item--two {
    align-self: center;
    justify-content: center;
    padding: 4rem;
  }

  &--Title {
    font-size: 3rem;
    font-weight: 500;
  }

  &--form {
    width: 50%;
  }
}
</style>
