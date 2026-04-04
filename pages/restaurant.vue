<template>
<div class="allBody">
    <div id="container-nava"><img class="nava" alt="photo Navacelles" src="@/assets/img/navacelles1.jpg"></div>
    <div></div>

    
  <!-- Contenue page-->

  <div class="text" style="opacity: 1; box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;">
    <h2 class="nom">{{$t('restaurant')}}</h2>
    <a class="reservation-btn" href="https://auberge-de-la-cascade.bookatable.fr">🍽️ Réserver au Restaurant en ligne, <span class="click-here">Cliquez ICI</span></a>
    
    <h3 class="description">{{$t('descriptionrestaurant')}}</h3>
    <p class="info"><u><strong> {{$t('inforestaurant')}} </strong></u> <br>{{$t('ps')}}</p>
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
      <div class="listeMenu"> <strong>{{$t('ardoise')}}</strong></div>
      <table>
        <tbody>
        <tr>
          <td class="listePlat">Assiette enfant + sirop</td>
          <td class="prixPlat">{{$t('Assietteenfant')}}</td>
        </tr>
        <tr>
          <td class="listePlat">{{$t('3 Salade Repas')}}</td>
          <td class="prixPlat">{{$t('prixsalade')}}</td>
        </tr>
        <tr>
          <td class="listePlat">{{$t('Dessert')}}</td>
          <td class="prixPlat">{{$t('prixdessert')}}</td>
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
          <td class="listeBoisson">Vin Blanc "Mas Haut-Buis" <br> Les Carlines</td>
          <td class="prixBoisson">{{$t('prixcarlinesblanc')}}</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Blanc "Domaine de la Perdrix" <br> La coule douce</td>
          <td class="prixBoisson">{{$t('prixperdrixblanc')}}</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rosé "Domaine de Ferrussac <br> Sérieys</td>
          <td class="prixBoisson">{{$t('prixserieys')}}</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rosé "Domaine de la Perdrix" <br> La Coule Douce</td>
          <td class="prixBoisson">{{$t('prixcouledouce')}}</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge "Domaine de la Perdrix" <br> Tradition</td>
          <td class="prixBoisson">{{$t('prixtrad')}}</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge "Domaine de la Perdrix <br> Cuvée J-S Pons</td>
          <td class="prixBoisson">{{$t('prixpons')}}</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge Terrasse du Larzac "Mas Haut Buis" <br> Les Carlines</td>
          <td class="prixBoisson">{{$t('prixcarlinesrge')}}</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge "Domaine de Ferrussac" <br> Coste Rousse</td>
          <td class="prixBoisson">{{$t('prixcosterousse')}}</td>
        </tr>
        <tr>
          <td class="listeBoisson">{{$t('wine')}} <br> 0.25L - 0.5L - 1L</td>
          <td class="prixBoisson">{{$t('prixpichet')}}</td>
        </tr>
        <tr>
          <td class="listeBoisson">{{$t('water')}}</td>
          <td class="prixBoisson">{{$t('prixeau')}}</td>
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

.reservation-btn {
    display: inline-block;
    padding: 15px 30px;
    background: linear-gradient(45deg, #2c3e50, #3498db);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    transition: all 0.3s ease;
    margin: 20px 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.reservation-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    background: linear-gradient(45deg, #3498db, #2c3e50);
}

.click-here {
    text-decoration: underline;
    text-decoration-color: red;
    font-weight: bold;
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
