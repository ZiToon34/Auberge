<template>
  <div class="conteneur1">
      <img class="img" :src="imageSrc" alt="Photo de la Chambre" @error="onImgError" />
            <div class="textRoom">
        <h2 class="nom">{{nameRoom}}</h2>
        <h3 class="description">
            {{$t('descriptionRoom')}}
            <br>
            *Pas d'accés PMR
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
                        <td>{{$t('half')}}</td>
                        <td>{{$t('prixdemiseul')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('half2')}}</td>
                        <td>{{$t('prixdemi2')}}/{{$t('person')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('half3')}}</td>
                        <td>{{$t('prixdemienfant')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('breakfast')}}</td>
                        <td>{{$t('prixdej')}}</td>
                    </tr>
                    <tr>
                        <td>{{$t('supPet')}}</td>
                        <td>{{$t('prixanimaux')}}/{{$t('day')}}</td>
                    </tr>
                    <tr>
                        <th>{{$t('tax')}}</th>
                        <th>{{$t('prixtaxe')}}</th>
                    </tr>
                    </tbody>
            </table>
        </div>
        <div style="padding-top: 10px;"> <strong> {{maxPeople}}</strong> <br> *Petit Déjeuner de 8h00 à 9h00 </div>
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
        cmsImageId: String
    },
    data() {
        return {
            imageSrc: require(`@/assets/img/${this.imgRoom}`)
        }
    },
    mounted() {
        // Si une image CMS existe pour cette chambre, l'utiliser
        const cms = window.$cms
        if (cms && this.cmsImageId) {
            const photos = cms.getSection('photos_chambres')
            const cmsImg = cms.getField(photos, this.cmsImageId)
            if (cmsImg) {
                this.imageSrc = cms.img(cmsImg)
            }
        }
    },
    methods: {
        onImgError() {
            // Si l'image CMS échoue, revenir à l'image d'origine
            this.imageSrc = require(`@/assets/img/${this.imgRoom}`)
        }
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
