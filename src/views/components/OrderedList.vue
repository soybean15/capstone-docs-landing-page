<template>
  
  
  <div class="py-2" >

    <ol  v-if="section.contents">
      <div :id="section.name" class="text-xl font-bold flex pb-4" v-if="section.title">{{ section.title }}</div>

        <li class="text-start py-2" v-for="(item, index) in section.contents" :key="index">
            <!-- {{ index + 1 }}. {{ item }} -->
            <div v-html="formatString(index+1, item)"></div>
        </li>
      

    </ol>
  </div>
</template>

<script>
export default {
    props:['section'],
    setup(){

      return {
        formatString:(index, item)=>{

          return index + ". "+item

        }
      }
    }

}
</script>

<style>

</style>