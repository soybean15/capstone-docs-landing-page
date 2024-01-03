<template>
  <div class="drawer bg-primary">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
    </div>
    <div class="drawer-side z-50 ">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>

     
      <ul
        class="menu w-[250px]  lg:min-w-max bg-base-100 overflow-auto "
      >
        <li class="text-justify text-xl my-5 font-bold">Table of contents </li>
        <li v-for="item in sideNav" :key="item.name">
          <a @click="navigate(item.name)" :class="{'bg-base-300':active ===item.name}">{{ item.title }}</a>
          <ul v-if="item.subtitles">
            <li v-for="item in item.subtitles" :key="item.name">
              <a @click="navigate(item.name)" :class="{'bg-base-300':active ===item.name}">{{ item.title }}</a>

              <ul v-if="item.subtitles">
                <li v-for="item in item.subtitles" :key="item.name">
                  <a @click="navigate(item.name)" :class="{'bg-base-300':active ===item.name}">{{ item.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useNavStore } from "@/store/nav";
import { storeToRefs } from "pinia";
import router from '@/router';
export default {
  setup() {
    const navStore = useNavStore();

    const { sideNav,active } = storeToRefs(navStore);

    return {
      sideNav,
      active,
      navigate:(_name)=>{

        console.log(`#${_name}`)
        active.value = _name
        router.push({name:'docs',hash:`#${_name}`})

      }
    };
  },
};
</script>

<style>
</style>