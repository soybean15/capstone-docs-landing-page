<template>
  <div class="about mt-20">
   <div class="flex flex-col items-center px-10 md:h-screen">

    <div class="text-white text-3xl font-bold py-3">Group 1</div>
    <ul class="" style="max-width: 1000px;">

      <li v-for="profile in profiles" :key="profile.name">
        <div class="flex md:flex-row flex-col  m-3 ">

          <div class="self-center ">
            <img  class="object-cover mb-1 md:mb-0 w-52 h-56 rounded-lg md:rounded-none md:rounded-s-lg" :src="profile.image"/>

          </div>
          <div class="md:w-[400px]  relative  ">
            <div class="absolute bg-black opacity-40 z-0 w-full h-full rounded-lg md:rounded-none md:rounded-e-lg"></div>
            <div class="p-4 flex flex-col z-10 opacity-90  text-white ">
              <div class="flex text-xl font-bold">  {{ profile.name }} </div>
              <div class="flex text-md text-blue-300">  {{ profile.email }} </div>
              <div class="flex text-md"><span class=" text-blue-300">Contact:</span>  {{ profile.contact }} </div>

              <div class="flex text-md"><span class=" text-blue-300">Height:</span>  {{ profile.height }} </div>
              <div class="flex text-md"><span class=" text-blue-300">Weight:</span>  {{ profile.weight }} </div>
              <div class="flex  w-full">
                <div class="flex text-md pr-12"><span class=" text-blue-300  ">Status:</span>  {{ profile.civilStatus }} </div>
                <div class="flex text-md"><span class=" text-blue-300">Citizenship:</span>  {{ profile.citizenship }} </div>
              </div>
              <div class="flex text-md text-sm text-start"><span class=" text-blue-300">Address:</span>  {{ profile.address }} </div>
            
            </div>
          
          
          </div>

         
        </div>
       
      </li>
    </ul>
    


   </div>
  </div>
</template>
<script>

const profiles = [
    {
      name: "Marlon T. Padilla",
      email: "marlonpadilla1593@gmail.com",
      contact: "09272148745",
      citizenship: "Filipino",
      civilStatus: "Single",
      height: "5’7",
      weight: "70kg",
      address: "357, Hulo Street, Sinasajan Penaranda, Nueva Ecija",
      image : require('@/assets/profile/marlon.png')
    },
    {
      name: "Janus S. Abesamis",
      email: "janusa1616@gmail.com",
      contact: "0966-840-2581",
      citizenship: "Filipino",
      civilStatus: "Single",
      height: "5’6",
      weight: "76kg",
      address: "157 Lacuna St., Brgy. San Josef, Penaranda, Nueva Ecija",
      image : require('@/assets/profile/janus.jpg')
    },
    {
      name: "Jowel T. De Guzman",
      email: "joweldeguzman07@gmail.com",
      contact: "09350585654",
      citizenship: "Filipino",
      civilStatus: "Single",
      height: "5’6",
      weight: "766kg",
      address: "10 Rizal street Barangay Poblacion I Penaranda, Nueva Ecija",
      image : require('@/assets/profile/jowel.jpg')
    },
    
  ]


export default {
  setup() {

    return {
      profiles
    }
    
  }
}
</script>
