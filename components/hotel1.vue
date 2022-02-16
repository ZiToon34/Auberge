<template>
  <div class="conteneur">
    <div class="box">
      <img class="img" v-bind:src=imgRoom alt="Photo de la Chambre" />
      <div class="textRoom">
        <h2 class="nom">{{nameRoom}}</h2>
        <h3 class="description">
            {{ descriptionRoom }}
        </h3>
        <p><u><strong>Tarifs:</strong></u></p>
        <div class="tableTarifs">
            <table>
                <tr>
                        <td style="border: none;"></td>
                        <th>Prix</th>
                    </tr>
                    <tr>
                        <td>Demi-pension (personne seule)</td>
                        <td>78€</td>
                    </tr>
                    <tr>
                        <td>Demi-pension (à partir de 2)</td>
                        <td>60€/personne</td>
                    </tr>
                    <tr>
                        <td>Demi-pension (-12ans)</td>
                        <td>35€</td>
                    </tr>
                    <tr>
                        <td>Petit Déjeuner/personne</td>
                        <td>8€</td>
                    </tr>
                    <tr>
                        <td>Suplléments animaux</td>
                        <td>5€/jour</td>
                    </tr>
                    <tr>
                        <th>Taxe de Séjour non-incluse</th>
                        <th>0.80€/personne</th>
                    </tr>
            </table>
        </div>
        <div style="padding-top: 10px;"> <strong> {{maxPeople}} </strong></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        imgRoom: String,
        nameRoom: String,
        descriptionRoom: String,
        maxPeople: String,
    }
}
</script>

<style scoped>

.textRoom{
    display: flex;
    text-align: center;
    box-sizing: border-box;
    flex-direction: column;
    padding: 20px;
    background-color: #ffffff !important;
    border-style: solid;
    border-color: khaki;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.tableTarifs{
    display: flex;
    justify-content: center;
}

</style>