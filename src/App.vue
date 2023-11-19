<template>
  <div class="main font-sans" :data-theme="isDark ?'dark':'light'"> 
  <nav-bar/>
  <drawer/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import {useThemeStore} from '@/store/theme'
import Drawer from './components/Drawer.vue'
import { storeToRefs } from 'pinia'
export default{
  components:{NavBar,Drawer},
  setup(){

    const themeStore = useThemeStore()
    const {isDark} = storeToRefs(themeStore)

    return {
      isDark
    }

  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.main{
  background:linear-gradient(120deg, #122B40, #446CB3);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
