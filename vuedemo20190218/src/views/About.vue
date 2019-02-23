<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  created(){
    console.log("about created");
    console.log(this.$root);
    console.log(this.$parent);
    console.log(this.$parent.good);
  },
  methods:{
    fff(){
      console.log("about fff");
    },
  }
}
</script>

<style lang="scss">
  
</style>
