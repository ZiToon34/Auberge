<template>
  <div class="hostelRooms">
    <div id="container-nava"><img class="nava" alt="Photo de navacelles" src="@/assets/img/navacelles1.jpg"></div>
    <Hotel2 class="hostel_room" id="hostelPair" v-for="room in rooms.rooms" :key="room.id" :imgRoom="room.img" :nameRoom="$t(`rooms.${room.id}.nameRoom`)" :maxPeople="$t(`rooms.${room.id}.maxPeople`)"/>
  </div>
</template>

<script>
import rooms from '@/data/rooms'
import Hotel2 from '@/components/hotel2.vue'

export default {
      name: 'Hotel',
      components: { Hotel2 },
      data() {
        return {
          rooms
        }
      }
} 
</script>



<style scoped>
.hostel_room {
  display: static;
  justify-content: center;
  background-color: rgb(245, 245, 245, 0.80);
  padding-top: 5%;
  padding-bottom: 5%;
  border-style: solid;
  border-color: khaki;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.hostelRooms  #hostelPair:nth-child(2n) {
  background-color: rgb(245, 245, 245);
  flex-direction: row-reverse;
}

@media screen and (min-width: 1100px){
  .hostel_room {
    display: flex
  }
}

</style>