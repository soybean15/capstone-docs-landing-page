<template>
  <div class="home h-screen ">
    <div class="hero min-h-screen">
      <div class=" "></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-7xl font-bold hero-title hero-bg font-hero">PNHS Real Time Biometrics </h1>
          <p class="mb-5 text-gray-200">
            Capstone Documentation of BSIT 4A(Group 1)
          </p>
         <router-link :to="{name:'docs'}">  <button  for="my-drawer" class="btn btn-warning drawer-button ">View Docs</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>

.hero-title{
  
  background: -webkit-linear-gradient(#cfd165, #acbe07);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

</style>
