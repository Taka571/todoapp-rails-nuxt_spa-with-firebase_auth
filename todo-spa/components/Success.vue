<template>
  <transition name="fade">
    <div v-if="flash.status" class="success">{{flash.message}}</div>
  </transition>
</template>


<script>
export default {
  computed: {
    flash() {
      return this.$store.state.flash;
    }
  }
};
</script>

<style scoped>
.success {
  position: fixed;
  top: 0;
  z-index: 50;
  text-align: center;
  line-height: 56px;
  width: 100%;
  background: rgb(193, 245, 193);
  color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
