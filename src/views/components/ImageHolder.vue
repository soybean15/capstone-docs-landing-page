<template>
  <div class="flex flex-col">
    

    <ul v-for="item in section.contents">
      <li>
        <div class="flex flex-col items-center p-5 md:px-10">
          <img :src="require(`@/${item.image}`)" alt="Image">

          <div class="py-2">{{item.caption}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["section"],
};
</script>

<style>
</style>