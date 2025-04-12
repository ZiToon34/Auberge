<template>
<div>
<div id="container-nava"><img class="nava" alt="Photo de navacelles" src="@/assets/img/navacelles1.jpg"></div>
<div class="conteneur">
        <div class="box">
        <div class="text" style="max-height: none;">
            <h2 class="nom">{{$t('contact')}}</h2>
            <a class="reservation-btn" href="https://larzac34.netlify.app/reservation">🍽️ Réserver au Restaurant en ligne</a>
            <h3 class="description"> {{$t('linkform')}} <NuxtLink to="/reservation" style="border-style: solid; border-color: black; color: #af8842;"> RESERVATION </NuxtLink>.</h3>
          <!-- <a style="border-radius: 30px; display: flex; flex-direction: column; height: 55px; justify-content: center; align-items: center; background-color: black; color: aliceblue" href="https://larzac34.netlify.app/reservation">Pour Reserver au Restaurant en ligne cliquez ici</a> -->
            <p class="info"><u><strong>{{$t('formail')}}</strong></u><br> Auberge de la cascade navacelles<br><br>
            18 chemin des faïsses <br><br>
            Hameau de navacelles<br><br>
            34520 St Maurice – Navacelles <br><br>
            Tél: 04-67-81-50-95</p>
        </div>
        <div class="ggMap">
            <iframe class="ggMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11500.545067018318!2d3.5116667!3d43.8944444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7cbe35cb64f667b4!2sAuberge%20de%20la%20Cascade!5e0!3m2!1sfr!2sfr!4v1620997946108!5m2!1sfr!2sfr" allow="fullscreen" loading="lazy"></iframe>
        </div>
        </div>
</div>
</div>
</template>
<script>
export default {
    head: {
    title: 'Contact',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contacter l\'Auberge de la cascade'
      }
    ],
  }
} 
</script>
<style scoped>

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
</style>
