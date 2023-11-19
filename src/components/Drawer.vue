<template>
  <div class="drawer bg-primary">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
    </div>
    <div class="drawer-side z-50">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>

     
      <ul
        class="menu xl:menu-horizontal lg:min-w-max bg-base-100 overflow-auto"
      >
        <li class="text-justify text-xl my-5 font-bold">Group I Docs </li>
        <li v-for="item in sideNav" :key="item.title">
          <a @click="active=item.title" :class="{'bg-base-300':active ===item.title}">{{ item.title }}</a>
          <ul v-if="item.subtitles">
            <li v-for="item in item.subtitles">
              <a @click="active=item.title" :class="{'bg-base-300':active ===item.title}">{{ item.title }}</a>

              <ul v-if="item.subtitles">
                <li v-for="item in item.subtitles">
                  <a @click="active=item.title" :class="{'bg-base-300':active ===item.title}">{{ item.title }}</a>
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
export default {
  setup() {
    const navStore = useNavStore();

    const { sideNav,active } = storeToRefs(navStore);

    return {
      sideNav,
      active
    };
  },
};
</script>

<style>
</style>