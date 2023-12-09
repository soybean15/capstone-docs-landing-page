<template>
  
  
  <div class="py-2" >

    <ol  v-if="section.contents">

        <li class="text-start py-2" v-for="(item, index) in section.contents" :key="index">
            {{ index + 1 }}. {{ item }}

        </li>

    </ol>
  </div>
</template>

<script>
export default {
    props:['section']

}
</script>

<style>

</style>