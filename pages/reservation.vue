<template>
  <div>
    <div id="container-nava">
      <img
        class="nava"
        alt="photo navacelles"
        src="@/assets/img/navacelles1.jpg"
      />
    </div>
    <div class="conteneur">
      <div class="box1" style="display: block">
        <form id="myForm" ref="form" @submit.prevent="sendEmail">
          <label for="form_name">{{$t('nameandsur')}}</label>
          <input
            id="form_name"
            type="text"
            name="name"
            class="form-control"
            :placeholder="$t('nameandsur')"
            required="required"
            data-error="Nom Obligatoire."
          />
          <label for="form_email">{{$t('formemail')}}</label>
          <input
            id="form_email"
            type="email"
            name="email"
            class="form-control"
            :placeholder="$t('formemail')"
            required="required"
            data-error="email valide obligatoire."
          />
          <label for="form_phone">{{$t('formphone')}}</label>
          <input
            id="form_phone"
            type="tel"
            name="phone"
            class="form-control"
            :placeholder="$t('formphone')"
          />
          <label for="form_message">{{$t('formmessage')}}</label>
          <textarea
            id="form_message"
            name="message"
            class="form-control"
            :placeholder="$t('formmessage')"
            rows="4"
            required="required"
            data-error="S'il vous plait, laissez nous un message."
          ></textarea>

          <recaptcha />
          <br />
          <input type="submit" id="submitBtn" value="Envoyer" />
        </form>
      </div>
    </div>
    <form method="post" action="mail.php">
            <input id="form_name" type="text" name="name" class="form-control" placeholder="Entrez vôtre Nom *" required="required" data-error="Nom Obligatoire.">
            <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Entrez vôtre Prénom *" required="required" data-error="Prénom obligatoire.">
            <input id="form_email" type="email" name="email" class="form-control" placeholder="Entrez vôtre Email *" required="required" data-error="email valide obligatoire.">
            <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Entrez vôtre Numéro de Téléphone">
            <textarea id="form_message" name="message" class="form-control" placeholder="Entrez vôtre Message *" rows="4" required="required" data-error="S'il vous plait, laissez nous un message."></textarea>

            <div class="g-recaptcha" data-sitekey="6LdrYGoeAAAAAC57ityHOtXfx_fmjEEakWD77WRw"></div>
            <br />
            <input type="submit" value="Envoyer message">

        

        </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Reservation",
  data() {
    return {
      siteKey: process.env.siteKey,
    };
  },
  methods: {
    async sendEmail() {
      try {
        const token = await this.$recaptcha.getResponse();
        console.log("ReCaptcha token:", token);

        // send token to server alongside your form data

        // at the end you need to reset recaptcha
        await this.$recaptcha.reset();
      } catch (error) {
        window.alert("Il y a un problème de connection", error);
      }
      emailjs
        .sendForm(
          process.env.serviceId,
          process.env.templateId,
          this.$refs.form,
          process.env.userId
        )
        .then(
          (result) => {
            window.alert("L'email a bien été envoyé", result.text);
          },
          (error) => {
            window.alert("Problème d'envoi, veuillez réesayer", error.text);
          }
        );
    },
  },
  head: {
    title: 'Reservation',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Reserver à l\'Auberge de la cascade'
      }
    ],
  }
};
</script>



<style scoped>
/* CSS */
.form-control {
  display: block;
  margin-bottom: 1rem;
  width: 100%;
}

#myForm{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#submitBtn {
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
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media screen and (min-width: 1100px){

.form-control{
  width: 50%;
}

}
</style>