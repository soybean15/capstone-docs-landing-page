<template>
  <div>
    <div v-if="section.contents">
       <div :id="section.name" v-if="section.title " class="flex indent-0 text-xl font-bold  pb-4 ">{{ section.title }} </div>
     
      
      <div
       
        v-for="(content, index)  in section.contents"
        :key="content.name"
      >
       
        <div   class="text-start py-2 indent-1 " v-if="content.contents">
          
          
                <ordered-list  v-if="content.type ==='ordered_enum'" :section='content'/>
                <un-ordered-list  v-else-if="content.type ==='unordered_enum'" :section='content'/>
                <image-holder   v-else-if="content.type ==='image'" :section='content' />
                <paragraph  v-else-if="section.type ==='paragraph'" :section='content' :index="index" />
             <div  class="text-start pb-2 indent-10" v-else>

    
<div v-html="content" v-if="!content.title && !content.image"></div>
</div>
        
        </div>
        <div  class="text-start pb-2 indent-10" v-else>

    
            <div v-html="content" v-if="!content.title && !content.image"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderedList from "@/views/components/OrderedList.vue";
import UnOrderedList from "@/views/components/UnorderedList.vue";
import Paragraph from '@/views/components/Paragraph.vue'
import ImageHolder from './ImageHolder.vue';
export default {
  props: ["section","index"],
  components: {
    UnOrderedList,
    OrderedList,
    ImageHolder,
    Paragraph
  },
};
</script>

<style>
</style>