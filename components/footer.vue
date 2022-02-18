<template>
        <footer>
        <div class="footer">
        <div class="horaires" >
            <h2 class="h2_horaires">{{$t('timetable')}}</h2>
            <hr class="barre barre_horaire" style="width: 30%; height: 1px; background: #b2b2b2;">
            <p class="info_footer">{{$t('openFooter')}} <br> {{$t('openFooter2')}} </p>
        </div>
        <div class="adresse">
            <h2 class="h2_adresse">{{$t('locate')}}</h2>
            <hr class="barre barre_adresse" style="width: 30%; height: 1px; background: #b2b2b2;">
            <a href="https://www.google.com/maps/place/Auberge+de+la+Cascade,+hameau+de,+34520+Saint-Maurice-Navacelles/@43.8863591,3.5430335,14z/data=!4m6!1m3!3m2!1s0x12b3ef59f8fcd04d:0x7cbe35cb64f667b4!2sAuberge+de+la+Cascade,+hameau+de,+34520+Saint-Maurice-Navacelles!3m1!1s0x12b3ef59f8fcd04d:0x7cbe35cb64f667b4?hl=fr&gl=FR" class="info_footer info_adresse" style="text-decoration: underline;">Auberge de la cascade <br> Hameau de Navacelles <br> 34520 Saint Maurice-Navacelles</a>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11500.545067018318!2d3.5116667!3d43.8944444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7cbe35cb64f667b4!2sAuberge%20de%20la%20Cascade!5e0!3m2!1sfr!2sfr!4v1620997946108!5m2!1sfr!2sfr" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        </div>
        <div class="footer2">
            <div class="reseaux">
                <div class="facebook">
                    <a href="https://www.facebook.com/AubergeDeLaCascade/"><img src="@/assets/img/facebook.svg" alt="image et lien facebook"></a>
                </div>
                <div class="instagram">
                    <a href="https://www.instagram.com/la_cascade_navacelles/"><img src="@/assets/img/instagram.svg" alt="image et lien instagram "></a>
                </div>
                <div class="tripadvisor">
                    <a href="https://www.tripadvisor.fr/Restaurant_Review-g3490621-d6742799-Reviews-Auberge_de_la_Cascade-Saint_Maurice_Navacelles_Herault_Occitanie.html"><img src="@/assets/img/tripadvisor.svg" alt="image et lien tripadvisor"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.h2_horaires, .h2_adresse{
    font-size: 30px;
    margin: 0px 0px 15px;
}

.barre{
    margin: 0px 0px 15px;
}

.barre_adresse{
    float: right;
    margin-left: 100%;
}

.info_footer{
    margin: 0px 0px 15px;
    color: rgba(189, 189, 189, 0.85);
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    letter-spacing: 0px;
}


.info_adresse{
    text-align: right;
}

.horaires, .adresse{
    color: rgba(243, 243, 243, 0.85);
    display: block;
}

.horaires{
    padding: 15px 10% 15px 0px;
}

.adresse{
    padding: 15px 0px 15px 10%;
    text-align: right;
}

.footer{
    display: flex;
    background-color: black;
    padding-left: 33px;
    padding-right: 33px;
    position: relative;
    justify-content: center;
}


.footer2{
    background-color: rgba(5, 5, 5, 0.85);
    display: inline-flex;
    justify-content: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
}

.reseau{
    padding: 0px 10px;
    display: block;
}

.facebook, .instagram, .tripadvisor{
    display: inline-flex;
    padding: 0px 10px;
}

.map{
    display: none;
    justify-content: flex-end
}


@media screen and (min-width: 800px){

.map{
    display: flex;
}

.footer{
    display: flex;
    justify-content: space-around;
    padding: 20px 0px 35px;
}

.adresse, .horaires{
    padding: 15px 0px;
}

}

</style>