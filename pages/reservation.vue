<template>
    <div>
        <div id="container-nava"><img class="nava" alt="photo navacelles" src="@/assets/img/navacelles1.jpg"></div>
<div class="conteneur">
    <div class="box1" style="display: block;">

        <form id="myForm">
            <label for="form_name">Nom et Prénom</label>
            <input id="form_name" type="text" name="name" v-model="name" class="form-control" placeholder="Entrez vôtre Nom et prénom *" required="required" data-error="Nom Obligatoire.">
            <label for="form_email">Email (obligatoire)</label>
            <input id="form_email" type="email" name="email" v-model="data" class="form-control" placeholder="Entrez vôtre Email *" required="required" data-error="email valide obligatoire.">
            <label for="form_phone">Numéro de téléphone</label>
            <input id="form_phone" type="tel" name="phone" v-model="data" class="form-control" placeholder="Entrez vôtre Numéro de Téléphone">
            <label for="form_message">Votre Message</label>
            <textarea id="form_message" name="message" v-model="data" class="form-control" placeholder="Entrez vôtre Message *" rows="4" required="required" data-error="S'il vous plait, laissez nous un message."></textarea>

            <div class="g-recaptcha" data-sitekey="6LdrYGoeAAAAAC57ityHOtXfx_fmjEEakWD77WRw"></div>
            <br />
            <input type="submit" id="submitBtn" @click="send()" value="Envoyer message">

        

        </form>

    </div>
</div>
    </div>
</template>

<script>
export default {
    name: 'Reservation',
  
    setUp(){
        window.onload = function () {
        var el = document.getElementById('g-recaptcha-response');
        if (el) {
            el.setAttribute('required', 'required');
        }
    }
    },
    
 data(){
     return { send(){
emailjs.init("user_apZeCzVOpcDPHBbbvLyfy");
emailjs.sendForm('service_txou49c', 'template_751vyee', '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
     }
 }
}
</script>



<style scoped>
 /* CSS */
        #g-recaptcha-response {
            display: block !important;
            position: absolute;
            margin: -50px 0 0 0 !important;
            z-index: -999999;
            opacity: 0;
        }

.form-control {
    display: block;
    margin-bottom: 1rem;
    
}

#submitBtn{
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

</style>