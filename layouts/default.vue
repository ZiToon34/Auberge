<template>
  <div id="auberge">
      <Header/>
      <Nuxt/>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
       name: 'Auberge',
       components: { Header, Footer  }
} 
</script> 

<style scoped>
#auberge {
    color: black;

}
</style>