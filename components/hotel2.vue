<template>
  <div class="conteneur1">
      <img class="img" :src="require(`@/assets/img/${imgRoom}`)" alt="Photo de la Chambre" />
            <div class="textRoom">
        <h2 class="nom">{{nameRoom}}</h2>
        <h3 class="description">
            {{$t('descriptionRoom')}}
        </h3>
        <p><u><strong>{{$t('price')}}</strong></u></p>
        <div class="tableTarifs">
            <table>
                <tbody>
                <tr>
                        <td style="border: none;"></td>
                        <th>{{$t('priceRoom')}}</th>
                    </tr>
                    <tr>
                        <td>{{$t('justroom')}}</td>
                        <td>65€/85€/105€</td>
                    </tr>
                    <tr>
                        <td>{{$t('half')}}</td>
                        <td>78€</td>
                    </tr>
                    <tr>
                        <td>{{$t('half2')}}</td>
                        <td>60€/{{$t('person')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('half3')}}</td>
                        <td>35€</td>
                    </tr>
                    <tr>
                        <td>{{$t('breakfast')}}</td>
                        <td>8€</td>
                    </tr>
                    <tr>
                        <td>{{$t('supPet')}}</td>
                        <td>5€/{{$t('day')}}</td>
                    </tr>
                    <tr>
                        <th>{{$t('tax')}}</th>
                        <th>0.80€</th>
                    </tr>
                    </tbody>
            </table>
        </div>
        <div style="padding-top: 10px;"> <strong> {{maxPeople}} </strong></div>
      </div>
    </div>
</template>

<script>
export default {
    name: "Hotel",
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
    justify-content: space-evenly;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.tableTarifs{
    display: flex;
    justify-content: center;
}


</style>
