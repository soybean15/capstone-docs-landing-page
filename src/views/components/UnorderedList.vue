<template>
   <div class="text-justify py-1 indent-0">
        <div v-if="section.message">{{section.message}}</div>
        
        <div class="pl-10 text-justify" v-if="section.contents">
            <ul v-for="item in section.contents">
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