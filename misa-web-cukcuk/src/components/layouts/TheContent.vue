<template>
  <div>
    <div id="content">
      <Customer/>
    </div>
  </div>
</template>

<script>
import Customer from '../pages/Customer.vue';

export default ({
  
  components: {
    Customer
  },

})
</script>

<style scoped>
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
