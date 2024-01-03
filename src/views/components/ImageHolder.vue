<template>
  <div class="flex flex-col">
    

    <ul v-for="item in section.contents" :key="item.name">
      <li>
        <div class="flex flex-col  p-2 md:px-10">
          <img :src="require(`@/${item.image}`)" alt="Image">

          <div class="py-2 indent-0 flex text-sm  justify-center ">{{item.caption}}</div>
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