<template>
    


  <div :id="chapter.name" class="text-2xl font-bold "> {{chapter.title}}</div>
    <div v-if="chapter.sections">
        <div  class="px-5 md:px-10 py-5" v-for="section in chapter.sections" :key="section.title">
            <div :id="section.name" class="flex text-xl font-bold"> {{section.title}}</div>

            <Paragraph v-if="section.type ==='paragraph'" :section='section'/>

            <ordered-list v-if="section.type ==='ordered_enum'" :section='section'/>

         
        </div>

    </div>

  <div>
  </div>
</template>

<script>
import OrderedList from '@/views/components/OrderedList.vue'
import UnOrderedList from '@/views/components/UnorderedList.vue'
import Paragraph from '@/views/components/Paragraph.vue'
export default {
    props:['chapter'],
    components:{
        Paragraph,
        UnOrderedList,
        OrderedList
    },
    setup(){
    
    }
}
</script>

<style>

</style>