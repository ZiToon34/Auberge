<template>
<div class="welcome">
        <span  class="auberge"><strong>Auberge de la Cascade | Hameau de Navacelles</strong></span>
   </div>
  
</template>

<script>

export default {
    data() {
      return {
        title: 'Auberge de la Cascade à Navacelles',
        meta: [
          {
          name: 'description',
          content: 'Situé au centre du crique de Navacelles, proche de la cascade de la vis. L\'aubgerge de la cascade propose un restaurant, un bar ainsi que plusieurs hébergements.'
          }
        ],
        avions: null
      }
    },
   async mounted() {
    this.avions = await this.$http.$get(
      `/.netlify/functions/avions?name=A380`
    );
  }, 
  }
</script>

<style scoped>

.welcome{
    position: relative;
    text-align: center;
    background: url("~/assets/img/navacelles1.jpg") center center / cover no-repeat;
    background-position: center;
    justify-content: center;
    width: 100%;
    height: 660px;
}

.auberge{
    background-color: rgba(238, 238, 238, 0.45);
    position: absolute;
    text-shadow: 4px 4px 0 #141008;
    font-family: 'Libre Franklin', sans-serif;
    color: #af8842;
    top: 50%;
    display: block;
    position: relative;
    text-align: center;
    border: solid 4px;
    animation-name: arrive, apparait;
    animation-duration: 2s;
    font-size: 50px;

}


@keyframes apparait {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

@keyframes arrive {
    from{
        top: -50%;
    }
    to{
        top: 50%;  
    }
}
</style>
