<template>
  <div>
    <div v-if="section.contents">
      <p
        class="text-justify py-2 indent-10"
        v-for="content in section.contents"
        :key="content"
      >
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["section"],
};
</script>

<style>
</style>