<template>
  <div class="home h-screen  ">
    
    <div class="hero min-h-screen w-full">
      <div class=" w-full" style="max-width: 500px;">
        <img src="@/assets/paec.png"/>
      </div>

      <div class=" bg-black bg-opacity-60 w-full h-full"></div>
      <div class="hero-content text-center h-full  text-neutral-content">

        <div class="max-w-md">
          <h1 class=" text-7xl font-bold hero-title hero-bg font-hero">PNHS Biometrics Attendance with Live Data</h1>
          <div class="mb-5 text-sm">Last Updated : <span>{{lastCommitDate}}</span> </div>
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
import { ref } from 'vue';
import moment from 'moment';
export default {
  name: "HomeView",
  components: {},
  setup(){
    const lastCommitDate = ref(moment(process.env.VUE_APP_LAST_COMMIT_DATE, 'YYYY/MM/DD_HH:mm:ss').format('MMMM DD YYYY, h:mm:ss a'));

   console.log(process.env.VUE_APP_LAST_COMMIT_DATE)
   return{
    lastCommitDate
   }
  }
};
</script>

<style scoped>

.hero-title{
  
  background: -webkit-linear-gradient(#cfd165, #acbe07);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

</style>
