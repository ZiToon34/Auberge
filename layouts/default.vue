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
       components: { Header, Footer  },
       head: {
    title: 'Auberge de la cascade',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Bienvenue sur le site de l\'Auberge de la Cascade à Navacelles - Hérault. Profitez d\'un cadre exceptionnel pour vos vacances.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
} 
</script> 

<style scoped>
#auberge {
    color: black;

}
</style>