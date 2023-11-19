import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavStore = defineStore('nav', () => {

    const sideNav = ref([])

    const active = ref('chapter_1')
    const getNav = (data,sideNav) => {
        
        
        data.forEach(element => {
            
            const keys = Object.keys(element);

            if (Array.isArray(element)) {


                return
            }
            keys.forEach(key => {
                

                if (key === 'title') {
                
                    sideNav.value.push({title:element[key],name:element['name']})

                }

                if (Array.isArray(element[key])) {
                   

                    if(element['title']){
                        sideNav.value[sideNav.value.length - 1].subtitles = [];
                        getNav(element[key], { value: sideNav.value[sideNav.value.length - 1].subtitles });
                    }

                   
                }


            })

        });

      
        
       
    }

    



    return {
        getNav,
        sideNav,active
    }

})