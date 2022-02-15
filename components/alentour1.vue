<template>
  <div class="conteneur1">
    <div class="box1">
      <img class="img"  v-bind:src=imgPlace alt="Photo du lieux"/>
      <div class="text">
        <h2 class="nom">{{namePlace}}</h2>
        <h3 class="description">
            {{ descriptionPlace }}
        </h3>
        <p class="info">
          <u><strong>Distance:</strong></u> <br />
          {{Km}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        imgPlace: String,
        namePlace: String,
        descriptionPlace: String,
        Km: String,
    }
}
</script>