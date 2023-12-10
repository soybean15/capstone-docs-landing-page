<template>
  <div>
    <div v-if="section.contents">
      <p
        class="text-start py-2 indent-10 "
        v-for="content in section.contents"
        :key="content"
      >
       
        <div  v-if="content.contents">
            <div >{{content.message }}</div>
          
                <ordered-list  v-if="content.type ==='ordered_enum'" :section='content'/>
                <UnOrderedList  v-if="content.type ==='unordered_enum'" :section='content'/>
                <ImageHolder  v-if="content.type ==='image'" :section='content'/>
             
        
        </div>
        <div v-else>
            <!-- {{ content }} -->
            
            <div v-html="content"></div>
        </div>
      </p>
    </div>
  </div>
</template>

<script>
import OrderedList from "@/views/components/OrderedList.vue";
import UnOrderedList from "@/views/components/UnorderedList.vue";

import ImageHolder from './ImageHolder.vue';
export default {
  props: ["section"],
  components: {
    UnOrderedList,
    OrderedList,
    ImageHolder
  },
};
</script>

<style>
</style>