<template>
    <div>
        <div id="container-nava"><img class="nava" alt="Photo de navacelles" src="@/assets/img/navacelles1.jpg"></div>
        <Hotel1 :imgRoom="require('@/assets/img/chambre1.jpg')" nameRoom="Chambre n°1" maxPeople="Maximum 4 personnes" />
        <Hotel :imgRoom="require('@/assets/img/chambre2.jpg')" nameRoom="Chambre n°2" maxPeople="Maximum 2 personnes" />  
        <Hotel1 :imgRoom="require('@/assets/img/chambre4.jpg')" nameRoom="Chambre n°4" maxPeople="Maximum 3 personnes" />
        <Hotel :imgRoom="require('@/assets/img/chambre5.jpg')" nameRoom="Chambre n°5" maxPeople="Maximum 2 personnes" />  
        <Hotel1 :imgRoom="require('@/assets/img/chambrersp1.jpg')" nameRoom="Chambre Relais n°1" maxPeople="Maximum 2 personnes" />
        <Hotel :imgRoom="require('@/assets/img/chambrersp2.jpg')" nameRoom="Chambre Relais n°2" maxPeople="Maximum 2 personnes" />
        <Hotel1 :imgRoom="require('@/assets/img/chambrersp3.jpg')" nameRoom="Chambre Relais n°3" maxPeople="Maximum 2 personnes" />
        <Hotel :imgRoom="require('@/assets/img/chambrersp4.jpg')" nameRoom="Chambre Relais n°4" maxPeople="Maximum 3 personnes" />
    </div>
</template>

<script>
import Hotel from '@/components/hotel.vue'
import Hotel1 from '@/components/hotel1.vue'

export default {
       name: 'Hotel',
       components: { Hotel, Hotel1} 
} 
</script> 