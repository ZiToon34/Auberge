<template>
  <div>
    <div id="container-nava"><img class="nava" alt="Photo de navacelles" src="@/assets/img/navacelles1.jpg"></div>
    <Alentour :imgPlace="require('@/assets/img/navacelles.jpg')" namePlace="Cirque de Navacelles" descriptionPlace="Cirque naturel formé par un méandre recoupé de la rivière la Vis dans l'impressionnantes gorges entre le causse du Larzac (Hérault, au sud) et le causse de Blandas (Gard, au nord)." Km="0 Km"/>
    <Alentour1 :imgPlace="require('@/assets/img/foux.jpg')" namePlace="La Foux" descriptionPlace="Résurgence de la rivière la Vis après un parcours souterrain, dans le calcaire des Causses. Le moulin de la Foux est situé sur le parcours des randonnées dans la Vallée de la Vis. " Km="(à pied) 4,5Km - 59min (Allé)"/>
    <Alentour :imgPlace="require('@/assets/img/aigoual.jpg')" namePlace="Mont Aigoual" descriptionPlace="Le mont Aigoual est un sommet situé dans le Sud du Massif central, à la limite entre les départements du Gard et de la Lozère. Il culmine à 1 565 mètres d'altitude. Cela en fait le point culminant du Gard et le second point le plus haut de la Lozère. Il vous offrira un panorama remarquable à perte de vue." Km="60Km - 1h30min"/>
    <Alentour1 :imgPlace="require('@/assets/img/couvertoirade.jpg')" namePlace="La Couvertoirade" descriptionPlace="Reconnue comme l'un des plus beaux villages de France, Patrimoine Mondial de l'Humanité. La Cité de la Couvertoirade, posée au coeur du Larzac, vous acceuille avec ses mille ans d'histoire. Poussez les portes des remparts hospitaliers et osez vous perdre dans les secrets et la mémoire des lieux." Km="35Km - 45min"/>
    <Alentour :imgPlace="require('@/assets/img/salagou.jpg')" namePlace="Lac du Salagou" descriptionPlace='Le lac du Salagou est le lac de retenue du barrage du Salagou. Marquée par "les ruffes", ces terres rouges, la Vallée du Salagou offre un spectacle surnaturel, un véritable "choc minéral". La ruffe cède la place aux roches noires volcaniques sur les reliefs, et aux étranges roches blanches du Cirque de Mourèze.' Km="43Km - 47min"/>
    <Alentour1 :imgPlace="require('@/assets/img/stguilhem.jpg')" namePlace="Saint Guilhem-le-Désert" descriptionPlace="Reconnue comme l'un des plus beaux villages de France, Patrimoine Mondial de l'Humanité. Village abbatial, Saint-Guilhem-le-Désert est construit autour de l’Abbaye de Gellone, situé dans les Gorges de l'Hérault. Pénétrez dans ce symbole de l’art roman languedocien qui a fait de Saint-Guilhem l’un des plus grands foyers spirituels et culturels du Languedoc." Km="43Km - 1h"/>
    <Alentour :imgPlace="require('@/assets/img/lodeve.jpg')" namePlace="Lodève" descriptionPlace="Une ville d'hisoire:  Entre Larzac et Salagou, « capitale » des hautes terres de l’Hérault, Lodève allie les témoignages architecturaux d’une ancienne cité épiscopale influente (avec sa Cathédrale Saint Fulcran) qui fut aussi un important centre textile (avec la savonnerie fabrique de tapis), et une dynamique de développement s’appuyant sur de prestigieuses manifestations culturelles, la promotion de son terroir et de ses savoir-faire." Km="35Km - 41min"/>
    <Alentour1 :imgPlace="require('@/assets/img/levigan.jpg')" namePlace="Le Vigan" descriptionPlace="sous-préfecture du département du Gard, porte d'entrée des Cévennes, Le Vigan vous acceuille avec son hisoire (à travers notamment l'hisoire de la soie, des pommes, châtaignes, des Oignons... ) et son patrimoine ( quatre immeubles protégés au titre des monuments historiques : le vieux pont, classé en 1938, l'hospice, inscrit en 1993, le château d'Assas, inscrit et classé en 2002, et le château de Mareilles, inscrit en 2015. )" Km="26Km - 39min"/>
  
  </div>
</template>

<script>
import Alentour from '@/components/alentour.vue'
import Alentour1 from '@/components/alentour1.vue'

export default {
       name: 'Auberge',
       components: { Alentour, Alentour1} 
} 
</script> 