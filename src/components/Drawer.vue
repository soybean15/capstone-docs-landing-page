<template>
   <div class="drawer ">
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
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Introduction</a></li>
        <li><a>Review of Related Literature</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>