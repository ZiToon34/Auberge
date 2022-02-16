<template>
<div>
    <div id="container-nava"><img class="nava" alt="photo Navacelles" src="@/assets/img/navacelles1.jpg"></div>
    <div></div>

    
  <!-- Contenue page-->

  <div class="text" style="opacity: 1; box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;">
    <h2 class="nom">Le Restaurant</h2>
    <h3 class="description">« Située au cœur du cirque de Navacelles , l’auberge de la cascade vous propose une
      restauration simple et de qualitée dans un cadre hors du commun »</h3>
    <p class="info"><u><strong> Restaurant ouvert le samedi, dimanche et lundi en basse saison.
          Tout les jours en haute saison. Le midi uniquement ( demi pension le soir pour les clients de l’hôtel )
        </strong></u> <br> Ps: pour les groupes nous pouvons à la demande faire des menus spéciaux</p>
  </div>

  <!-- Ajouter Caroussel ici -->

     <div class="conteneur">
       <div class="carousel-wrapper">
    <client-only>
      <carousel v-bind="options">
        <slide v-for="i in 6" :key="i" class="img-wrapper">
          <img :src="`./${i}eat.jpg`" />
        </slide>
      </carousel>
    </client-only>
  </div>
     </div>
    

  <div class="menu">

    <div class="plat" style="box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;">
      <div class="listeMenu"> <strong> 3 Choix de chaque au moins</strong></div>
      <table>
        <tr>
          <td class="listePlat">Entrée + Plat (ou Plat + Dessert)</td>
          <td class="prixPlat">18.50€</td>
        </tr>
        <tr>
          <td class="listePlat">Entrée + Plat + Dessert</td>
          <td class="prixPlat">22.50€</td>
        </tr>
      </table>
      <div class="listeMenu"> <strong> A l'ardoise</strong></div>
      <table>
        <tr>
          <td class="listePlat">Burger du Larzac</td>
          <td class="prixPlat">16€</td>
        </tr>
        <tr>
          <td class="listePlat">Salade Repas</td>
          <td class="prixPlat">14€</td>
        </tr>
        <tr>
          <td class="listePlat">Dessert Maison</td>
          <td class="prixPlat">5.50€</td>
        </tr>
      </table>
    </div>

    <div class="boisson" style="box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;">
      <div class="listeMenu"> <strong> Boissons</strong>
      </div>
      <table>
        <tr>
          <td class="listeBoisson">Vin Rosé/ Blanc "Domaine de la Perdrix" <br> La coule douce</td>
          <td class="prixBoisson">16€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rosé "Domaine de Ferrussac <br> Serieys</td>
          <td class="prixBoisson">18€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge "Domaine de la Perdrix" <br> Tradition</td>
          <td class="prixBoisson">20€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge "Domaine de la Perdrix <br> Cuvée J-S Pons</td>
          <td class="prixBoisson">29€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge Terrasse du Larzac "Mas Haut Buis" <br> Les Carlines</td>
          <td class="prixBoisson">23€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Vin Rouge "Domaine de Ferrussac" <br> Coste Rousse</td>
          <td class="prixBoisson">23€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Pïchet Rouge/ Blanc/ Rosé <br> 0.25L - 0.5L - 1L</td>
          <td class="prixBoisson">5€ - 8€ - 11€</td>
        </tr>
        <tr>
          <td class="listeBoisson">Eaux Minérales</td>
          <td class="prixBoisson">6.50€</td>
        </tr>
      </table>
    </div>

  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        loop: true,
        perPage: 3.5,
        paginationEnabled: false
      }
    }
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

.carousel-wrapper {
  padding: 40px;
  height: 100%;
}

.img-wrapper {
  margin: auto;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(gray 100%, 0.8);
}



@media screen and (min-width: 1100px){
  
    .menu{
        display: flex; 
    }

  
   
}



</style>