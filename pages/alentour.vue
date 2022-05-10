<template>
  <div class="alentours">
    <div id="container-nava"><img class="nava" alt="Photo de navacelles" src="@/assets/img/navacelles1.jpg"></div>
    <Alentour class="alentour" id="alentourPair" v-for="around in arounds.arounds" :key="around.id" :imgPlace="around.img" :namePlace="$t(`arounds.${around.id}.namePlace`)" :descriptionPlace="$t(`arounds.${around.id}.decription_place`)" :Km="$t(`arounds.${around.id}.unite_dist`)"/>
  </div>
</template>

<script>
import arounds from '@/data/arounds'
import Alentour from '@/components/alentour.vue'

export default {
      name: 'Auberge',
      components: { Alentour },
      data() {
        return {
          arounds
        }
      },
      head: {
    title: 'Alentour',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Autour de l\'Auberge de la cascade'
      }
    ],
  }
} 
</script>


<style scoped>
.alentour {
  display: static;
  justify-content: center;
  background-color: rgb(245, 245, 245, 0.80);
  padding-top: 5%;
  padding-bottom: 5%;
  border-style: solid;
  border-color: khaki;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.alentours  #alentourPair:nth-child(2n) {
  background-color: rgb(245, 245, 245);
  flex-direction: row-reverse;
}

@media screen and (min-width: 1100px){
  .alentour {
    display: flex
  }
}

</style>