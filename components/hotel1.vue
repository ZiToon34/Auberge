<template>
    <div>
        <div class="conteneur1">
    <div class="box1">
        <img class="img" v-bind:src=imgRoom alt="Photos Chambre" style="height: 300px;">
        <div class="text" style="max-height: none">
            <h2 class="nom">{{nameRoom}}</h2>
            <h3 class="description">Comprend Salle de Bain, WiFi et WC</h3>
            <div><u><strong>Tarifs:</strong></u></div>
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
                <div style="padding-top: 10px;"> <strong> {{maxPeople}} </strong></div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props:{
        imgRoom: String,
        nameRoom: String,
        maxPeople: String,

    }
}
</script>
