<template>
  <div class="bg-base-100 p-5">
    <div v-if="docs">
      <ChapterPage
        v-for="chapter in docs.chapters"
        :key="chapter.title"
        :chapter="chapter"
      />
    </div>
  </div>
</template>

<script>
import { useDocsStore } from "@/store/docs";

import { storeToRefs } from "pinia";

import ChapterPage from "./components/ChapterPage.vue";
export default {
  components: { ChapterPage },
  setup() {
    const docsStore = useDocsStore();
    const { docs } = storeToRefs(docsStore);
    
    return {
      docs,
    };
  },
};
</script>

<style>
</style>