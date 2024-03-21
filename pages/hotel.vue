<template>
  <div>
  <div class="hostelRooms">
    <div id="container-nava"><img class="nava" alt="Photo de navacelles" src="@/assets/img/navacelles1.jpg"></div>
    <Hotel2 class="hostel_room" id="hostelPair" v-for="room in rooms.rooms" :key="room.id" :imgRoom="room.img" :nameRoom="$t(`rooms.${room.id}.nameRoom`)" :maxPeople="$t(`rooms.${room.id}.maxPeople`)"/>
  </div>
  <div class="hostel_room">
      <div class="conteneur1">
        <div class="textRoom">
        <h2 class="nohalfname">{{$t('justroom')}}</h2>
        </div>
        <div class="nohalf">
      <table>
                <tbody>
                
                  <tr>
                    <td>1 personne</td>
                    <td>65€</td>
                  </tr>
                  <tr>
                    <td>2 personnes</td>
                    <td>85€</td>
                  </tr>
                  <tr>
                    <td>3 personnes</td>
                    <td>105€</td>
                  </tr>
                        </tbody>
      </table>
      </div>
      </div>
                        
    </div>
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
      },
      head: {
    title: 'Hotel',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Hebergement au centre du cirque de Navacelles'
      }
    ],
  }
}
</script>



<style scoped>

.nohalfname{
  padding-bottom: 5%;
  text-align: center;
 justify-content: center;
  font-size: 3em;
    color: #1a1a1a;
    font-weight: 400;
    font-family: "Cinzel", Helvetica, Arial, sans-serif;
}

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

.nohalf{
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: rgb(245, 245, 245, 0.80);
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  border-style: solid;
  border-color: khaki;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

@media screen and (min-width: 1100px){
  .hostel_room {
    display: flex
  }
  .nohalf{
    display: flex
  }
}

</style>
