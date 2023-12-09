import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { useNavStore } from "./nav";


export const useDocsStore = defineStore('docs',()=>{

    const docs = ref(null)
    const navStore = useNavStore() 
    const {sideNav} = storeToRefs(navStore)

    const fetchData =async ()=>{
       await fetch('/data.json')
       .then(response => response.json())
        .then(data =>docs.value =data)
      

        navStore.getNav(docs.value.chapters,sideNav)
  
    }
    return {
        fetchData,
        docs
    }

})