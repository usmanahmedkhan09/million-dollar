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
        <h2 class="app-mb-32">VENDOR LOGIN</h2>
      </div>
      <form class="signIn--form" @submit.prevent="userStore.loginUser(user)">
        <input
          v-model="user.email"
          class="app-input"
          type="text"
          placeholder="Email"
        />
        <input
          v-model="user.password"
          class="app-input app-mt-10"
          type="password"
          placeholder="Password"
        />
        <div class="app-flex-between app-margin-vertical">
          <p class="app-text-xsmall">Remeber Me</p>
          <p class="app-text-xsmall">Forget Password</p>
        </div>

        <button class="app-btn app-btn--secondary" type="submit">LOGIN</button>
      </form>
      <div class="app-text-center app-width-50 app-margin-vertical">
        <p>OR</p>
      </div>
      <div class="app-text-center app-width-50 app-margin-vertical">
        <p>Don't Have an account? Create one</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { User } from "../../models/user.model";
import { useUsers } from "../../store/userStore";

export default defineComponent({
  setup() {
    let userStore = useUsers();

    let user = ref(new User());

    return { user, userStore };
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
