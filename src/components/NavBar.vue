<template>
  <div class="navbar fixed bg-gray-900 z-10 bg-opacity-50  ">


    <div class="flex-1">
      <label for="my-drawer" class="btn btn-ghost swap swap-rotate drawer-button" v-if="currentRoute != '/' && currentRoute != '/about'">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" />

        <!-- hamburger icon -->

        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
          viewBox="0 0 512 512">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>


        <!-- close icon -->
        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      <router-link :to="{ name: 'home' }">
        <label class="btn btn-ghost text-white">Docs</label></router-link>
    </div>
    <div class="flex-none">
      <router-link :to="{ name: 'about' }">
      <div tabindex="0" role="button" class="btn  btn-ghost m-1 text-white">About Us</div>
    </router-link>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn  btn-ghost m-1 text-white">More</div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow 	The highest mean obtained was 4.80. The data shows that the system was very high in terms of security and organized records. The possible reason that causes the result is due to extensive username and password functionality, and well-organized employee management bg-base-100  rounded-box w-52">
          <li>
            <div class="flex w-full justify-between">
              <span> Dark Mode</span>
              <label class="swap swap-rotate">
                <!-- this hidden checkbox controls the state -->
                <input @click="toggleDarkMode" type="checkbox" class="theme-controller" value="synthwave" />

                <!-- sun icon -->
                <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                <!-- moon icon -->
                <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>

            </div>

          </li>

          <li>

            <a class="flex w-full" href="https://github.com/soybean15/realtime-biometrics-api" target="_blank">
              <div class="flex w-full justify-between">
                <span>Repository</span>
                <div class="avatar">
                  <div class="w-6 rounded-full">
                    
                    <img fill="#fff" src="@/assets/github-logo.svg" v-if="isDark"/>
                    <img fill="#fff" src="@/assets/github-logo-dark.svg" v-else/>
                    
                  </div>
                </div>

              </div>

            </a>
          </li>

          <li>
            <a href="/files/docx.pdf" download>Download Document</a>

          </li>



        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import { useThemeStore } from '@/store/theme'
import { storeToRefs } from 'pinia';
import { useNavStore } from '@/store/nav';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

export default {

  setup() {

    const route = useRoute()
    const currentRoute = computed(() => route.fullPath)


    console.log("route",currentRoute.value)
    const themeStore = useThemeStore()
    const { isDark } = storeToRefs(themeStore)
    const navStore = useNavStore()
    const { sideNav } = storeToRefs(navStore)


    return {
      toggleDarkMode: () => {
        themeStore.toggleDarkMode()

        console.log(isDark.value)

      },
      sideNav,
      isDark,
      currentRoute
    }
  }
};
</script>

<style>
.sticky {}
</style>