<template>
  <div>
    <div id="container-nava"><img class="nava" alt="Photo de navacelles" src="@/assets/img/navacelles1.jpg"></div>
    <Hotel2 :imgRoom="require('@/assets/img/chambre1.jpg')" nameRoom="Chambre n°1" descriptionRoom="Comprend Salle de Bain, WiFi et WC" maxPeople="Maximum 4 personnes"/>
    <Hotel1 :imgRoom="require('@/assets/img/chambre2.jpg')" nameRoom="Chambre n°2" descriptionRoom="Comprend Salle de Bain, WiFi et WC" maxPeople="Maximum 2 personnes"/>
    <Hotel2 :imgRoom="require('@/assets/img/chambre4.jpg')" nameRoom="Chambre n°4" descriptionRoom="Comprend Salle de Bain, WiFi et WC" maxPeople="Maximum 3 personnes"/>
    <Hotel1 :imgRoom="require('@/assets/img/chambre5.jpg')" nameRoom="Chambre n°5" descriptionRoom="Comprend Salle de Bain, WiFi et WC" maxPeople="Maximum 2 personnes"/>
    <Hotel2 :imgRoom="require('@/assets/img/chambrersp1.jpg')" nameRoom="Chambre relais n°1" descriptionRoom="Comprend Salle de Bain, WiFi et WC" maxPeople="Maximum 2 personnes"/>
    <Hotel1 :imgRoom="require('@/assets/img/chambrersp2.jpg')" nameRoom="Chambre relais n°2" descriptionRoom="Comprend Salle de Bain, WiFi et WC" maxPeople="Maximum 2 personnes"/>
    <Hotel2 :imgRoom="require('@/assets/img/chambrersp3.jpg')" nameRoom="Chambre relais n°3" descriptionRoom="Comprend Salle de Bain, WiFi et WC" maxPeople="Maximum 2 personnes"/>
    <Hotel1 :imgRoom="require('@/assets/img/chambrersp4.jpg')" nameRoom="Chambre relais n°4" descriptionRoom="Comprend Salle de Bain, WiFi et WC" maxPeople="Maximum 2 personnes"/>
  </div>
</template>

<script>
import Hotel2 from '@/components/hotel2.vue'
import Hotel1 from '@/components/hotel1.vue'

export default {
       name: 'Auberge',
       components: { Hotel2, Hotel1 } 
} 
</script> 