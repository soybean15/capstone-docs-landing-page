import { defineStore } from "pinia";
import { ref } from "vue";


export const useThemeStore = defineStore('theme',()=>{


    const isDark = ref(localStorage.getItem('isDark')==null ? true: false)

    const toggleDarkMode = ()=>{
        isDark.value= !isDark.value
        localStorage.setItem('isDark',isDark.value)

    }


    return {
        isDark,
        toggleDarkMode
    }


})