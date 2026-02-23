<template>
  <div class="modal-overlay">
    <div id="popup">
      <div class="close" @click="$emit('close-modal')">
      <button class="close-img">X</button>
      </div>
     <div style="text-align: center; font-size: 42px !important;
    line-height: 42px !important; margin-bottom: 5px; margin-top: 20px;"> Réouverture </div>
      <div style="text-align: center; margin-top: 15px; font-size: 20px; line-height: 30px; font-family: 'Playfair Display', Arial, Tahoma, sans-serif; color: #af8842;"> L'Auberge de la Cascade sera heureuse de vous accueillir à nouveau à partir du 4 Avril 2026. Vous pouvez toujours nous contacter via le formulaire de pré-réservation avant cette date. </div>
      <div class="seeusoon" style="text-align: center; margin-top: 5px; font-size: 18px !important; line-height: 42px !important; margin-bottom: 5px;"> A très bientôt !</div>
    </div>
  </div>
</template>

<!-- change modal-overlay to display flex for see it or display none to unsee it -->

<script>
  export default {
}
</script>

<style scoped>

.modal-overlay {
  opacity: 0.7;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 9999999;
}

.close {
  cursor: pointer;
}

.close-img {
  width: 25px;
}

button {
  display: block;
  background-color: #af8842;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
}

#popup{
    border-width: 5px;
    border-style: solid;
    border-color: #af8842;
    background-color: white;
    text-align: center;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 1) 0px 54px 55px, rgba(0, 0, 0, 1) 0px -10px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    width: 100%;
    height: 30vh;
    top: 308px;
    opacity: 1;
    display: block;
    z-index: 1999999999;
  }

  @media screen and (max-width: 630px){

#popup{
    border-style: solid;
    border-width: 5px;
    border-color: #af8842;
    background-color: white;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 1) 0px 54px 55px, rgba(0, 0, 0, 1) 0px -10px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    width: 100%;
    height: 400px;
    top: 308px;
    opacity: 1;
    display: block;
    z-index: 1999999999;
  }
}

@media screen and (min-width: 1285px) {

#popup {
    border-style: solid;
    border-color: #af8842;
    background-color: white;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 1) 0px 54px 55px, rgba(0, 0, 0, 1) 0px -10px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    width: 650px;
    height: 250px;
    top: 308px;
    left: 25vw;
    opacity: 1;
    display: block;
    z-index: 1999999999;
    }
}
</style>
