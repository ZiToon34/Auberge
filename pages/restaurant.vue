<template>
<div class="allBody">
    <div id="container-nava"><img class="nava" alt="photo Navacelles" src="@/assets/img/navacelles1.jpg"></div>
    <div></div>

    
  <!-- Contenue page-->

  <div class="text" style="opacity: 1; box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;">
    <h2 class="nom">{{$t('restaurant')}}</h2>
    <p> Tarifs 2023 </p>
    
    <h3 class="description">{{$t('descriptionrestaurant')}}</h3>
    <p class="info"><u><strong> {{$t('inforestaurant')}} </strong></u> <br>{{$t('ps')}}</p>
   <!-- <a class="nom" href="https://aubergedelacascade-reservation.onrender.com/" style="background-color: black; color: aliceblue;">Reserver au Restaurant en ligne, cliquez ici</a> -->
  </div>


  <!-- Ajouter Caroussel ici -->

     <div class="conteneur">
       <div class="carousel-wrapper">
      <carousel v-bind="options">
        <slide v-for="i in 10" :key="i" class="img-wrapper">
          <img v-bind:src="`../${i}eat.jpg`" type="jpeg" class="imgCarousel"/>
        </slide>
      </carousel>
  </div>
     </div>
    
  <div class="menu">

    <div class="plat" style="box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;">
      <div class="listeMenu"> <strong>{{$t('listemenu')}}</strong></div>
      <table>
        <tbody>
        <tr>
          <td class="listePlat">{{$t('listeplat1')}}</td>
          <td class="prixPlat">21€</td>
        </tr>
        <tr>
          <td class="listePlat">{{$t('listeplat2')}}</td>
          <td class="prixPlat">25.50€</td>
        </tr>
        </tbody>
      </table>
      <div class="listeMenu"> <strong>{{$t('ardoise')}}</strong></div>
      <table>
        <tbody>
        <tr>
          <td class="listePlat">{{$t('Steak enfant + sirop')}}</td>
          <td class="prixPlat">9€</td>
        </tr>
        <tr>
          <td class="listePlat">{{$t('Salade Repas')}}</td>
          <td class="prixPlat">16€</td>
        </tr>
        <tr>
          <td class="listePlat">{{$t('Dessert')}}</td>
          <td class="prixPlat">7€</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="boisson" style="box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;">
      <div class="listeMenu"> <strong>{{$t('drink')}}</strong>
      </div>
      <table>
        <tbody>
        <tr>
          <td class="listeBoisson">Vin Blanc "Domaine Chemin Farrat" <br> Gourmandise</td>
          <td class="prixBoisson">17€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Blanc "Domaine de la Perdrix" <br> La coule douce</td>
          <td class="prixBoisson">18€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rosé "Domaine de Ferrussac <br> Sérieys</td>
          <td class="prixBoisson">19€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rosé "Domaine Chemin Farrat" <br> Tendresse</td>
          <td class="prixBoisson">17€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge "Domaine de la Perdrix" <br> Tradition</td>
          <td class="prixBoisson">21€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge "Domaine de la Perdrix <br> Cuvée J-S Pons</td>
          <td class="prixBoisson">29€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge Terrasse du Larzac "Mas Haut Buis" <br> Les Carlines</td>
          <td class="prixBoisson">25€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge "Domaine de Ferrussac" <br> Coste Rousse</td>
          <td class="prixBoisson">23€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge "Domaine Chemin Farrat" <br> Emotion</td>
          <td class="prixBoisson">21€</td>
        </tr>
        <tr>
          <td class="listeBoisson">{{$t('wine')}} <br> 0.25L - 0.5L - 1L</td>
          <td class="prixBoisson">5€ - 8€ - 11€</td>
        </tr>
        <tr>
          <td class="listeBoisson">{{$t('water')}}</td>
          <td class="prixBoisson">6.50€</td>
        </tr>
        </tbody>
      </table>
      
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Restaurant",
  data() {
    return {
      options: {
        loop: true,
        perPageCustom: [[0, 0], [300, 2], [600, 2], [790, 2], [980, 2.5], [1165, 3], [1370, 3.5],  [1555, 4]],
        scrollPerPage: true,
        paginationEnabled: true,
        autoplay: true,
        autoplayTimeout: 3000
      }
    }
  },
  head: {
    title: 'Restaurant',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Restaurant Auberge de la Cascade'
      }
    ],
  }
}
</script>

<style scoped>

.menu{
    display: block;
    background-color: rgb(245, 245, 245, 0.9);
    justify-content: space-around;
    padding: 20px;
    border-style: solid;
    border-color: khaki;
}
    
.plat, .boisson{
    display: flex;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    padding: 50px;
    background-color: #ffffff !important;
    border-style: solid;
    border-color: khaki;
}
.listePlat,.listeBoisson{
    padding: 25px;
    border-style: solid;
    border-color: khaki;
}
.prixPlat, .prixBoisson{
    border-style: solid;
    padding: 25px;
}
.listeMenu{
    font-size: 2rem;
    padding: 50px;
    text-decoration:underline;
}
@media screen and (min-width: 1100px){
  
    .menu{
        display: flex; 
    }
  
   
}
@media screen and (max-width: 390px){

.imgCarousel{
  width: 167px;
  height: 344px;
}

.allBody{
  width: 390px;

}


}
@media screen and (min-width: 390px) and (max-width: 599px){

.imgCarousel{
  width: 167px;
  height: 344px;
}

}
</style>
