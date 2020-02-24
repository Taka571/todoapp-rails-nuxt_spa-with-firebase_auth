<template>
  <div>
    <div v-if="user">
      <p>Email: {{user.email}}</p>
      <p>ユーザー名: {{user.name}}</p>
    </div>
    <v-btn @click="logOut">ログアウト</v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
    }
  }
};
</script>

<style>
</style>
