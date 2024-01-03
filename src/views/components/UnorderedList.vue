<template>
   <div class="text-start py-1 indent-0">
    <div :id="section.name" class="text-xl font-bold  pb-4" v-if="section.title">{{ section.title }}</div>
        <div v-if="section.message">{{section.message}}</div>
        
        <div class="pl-5 md:pl-10 text-start" v-if="section.contents">
            <ul v-for="item in section.contents" :key="item.name">
                <li :id="item.title"  class="py-2">
                    <p><strong >{{item.title}} </strong>
                   {{item.value}} </p>

                   

                </li>

            </ul>
            
        </div>
   </div>
  
</template>

<script>
export default {
    props:['section']

}
</script>

<style>

</style>