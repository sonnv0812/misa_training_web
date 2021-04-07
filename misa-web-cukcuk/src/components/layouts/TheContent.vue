<template>
  <div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default ({

  components: {
  },

})
</script>

<style scoped>
@import url("../style/main.css");

#content {
  position: absolute;
  top: 60px;
  left: 200px;
  right: 0px;
  bottom: 0px;
  /* background-color: yellow; */
  /* padding-left:  24px; */
  padding: 24px;
}

</style>
