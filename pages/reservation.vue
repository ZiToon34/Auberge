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
<div>
 <!--<a style="border-radius: 30px; display: flex; flex-direction: column; height: 55px; justify-content: center; align-items: center; background-color: black; color: aliceblue" href="https://larzac34.netlify.app/reservation">Pour Reserver au Restaurant en ligne cliquez ici</a> -->
      <p style="display: flex; flex-direction: column; justify-content: center; align-items: center; color: red"> <strong>!! L'auberge se situe au hameau de Navacelles dans le cirque de Navacelles (non-pas à St Maurice-Navacelles mais sur sa commune) !!</strong></p>
    </div>
    <div>
        <br>
    <p style="display: flex; flex-direction: column; justify-content: center; align-items: center; color: black"><strong>Ceci est un formulaire de PRÉ-RÉSERVATION (Réponse sous 48H) </strong></p>
  </div>
    
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
            required="required"
            data-error="Téléphone Obligatoire"
          />
          <label for="form_pension">{{$t('formpension')}}</label>
          <select
            id="pension"
            type="text"
            name="pension"
            class="form-control"
            :placeholder="$t('form_pension')"
            required="required"
            data-error="Type d'Hébergement Obligatoire"
          >
          <option value="">--Choisissez une Option--</option>
          <option value="Demi-pension">{{$t('demipension')}}</option>
          <option value="Chambre Seule + Petit Dej">{{$t('roomalonedej')}}</option>
          <option value="Chambre Seule">{{$t('roomalone')}}</option>
          <option value="Vente au lit">Vente au lit</option>
          </select>
          <label for="form_pers">{{$t('formpers')}}</label>
          <select
            id="form_pers"
            type="text"
            name="pers"
            class="form-control"
            :placeholder="$t('form_pers')"
            required="required"
          >
          <option value="">--Choisissez une Option--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          </select>
          <label for="form_bed">{{$t('formbed')}}</label>
          <select
            id="form_bed"
            type="text"
            name="bed"
            class="form-control"
            :placeholder="$t('form_bed')"
            required="required"
          >
          <option value="">--Choisissez une Option--</option>
          <option value="Grand Lit">{{$t('bigbed')}}</option>
          <option value="Lits Jumeaux">{{$t('twinbed')}}</option>
          <option value="Grand Lit + Petit Lit">{{$t('bigtwinbed')}}</option>
          <option value="Grand Lit + Supperposé">{{$t('bigsupp')}}</option>
          <option value="Groupe">{{$t('group')}}</option>
          <option value="Vente au lit">Vente au lit</option>
          </select>
          <label for="form_datestart">{{$t('formdatestart')}}</label>
          <input
            id="form_datestart"
            type="text"
            :placeholder="$t('kindofdate')"
            name="datestart"
            class="form-control"
            required="required"
            data-error="Date d'arrivée obligatoire."
          />
          <label for="form_dateend">{{$t('formdateend')}}</label>
          <input
            id="form_dateend"
            type="text"
            :placeholder="$t('kindofdate')"
            name="dateend"
            class="form-control"
            required="required"
            data-error="Date de départ obligatoire."
          />
          <label for="form_message">{{$t('formmessage')}}</label>
          <textarea
            id="form_message"
            name="message"
            class="form-control"
            :placeholder="$t('form_message')"
            rows="10"
            required="required"
            data-error="S'il vous plait, laissez nous un message."
          ></textarea>

          <recaptcha />
          <br />
          <div>
      <p style="display: flex; flex-direction: column; justify-content: center; align-items: center; color: red"> <strong>!! L'auberge se situe au hameau de Navacelles dans le cirque de Navacelles (non-pas à St Maurice-Navacelles mais sur sa commune) !!</strong></p>
    </div>
          <br />
          <input type="submit" id="submitBtn" value="Envoyer" @click.prevent="sendEmail()" :disabled="submitDisabled"/>
        </form>
      </div>
      <div>
        <br>
    <a href="mailto:aubergedelacascade@orange.fr?subject=Reservation&body=Demande de Reservation" style="display: flex; flex-direction: column; justify-content: center; align-items: center; color: red"><strong>En cas de Problème lors de l'envoi du formulaire, cliquez ici</strong></a>
  </div>
    </div>
    
  </div>
  
</template>

<script>
import swal from "sweetalert";
import emailjs from "emailjs-com";

export default {
  name: "Reservation",
  data() {
    return {
      siteKey: process.env.siteKey,
      submitDisabled: false,
    };
  },
  methods: {
    async sendEmail() {
      this.submitDisabled = true; // désactive le bouton
      try {
        const token = await this.$recaptcha.getResponse();
        console.log("ReCaptcha token:", token);
        // send token to server alongside your form data
        // at the end you need to reset recaptcha
        await this.$recaptcha.reset();
      } catch (error) {
        swal("Il y a un problème de connection", error);
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
            window.location.href = "https://www.auberge-de-la-cascade.fr/formsend";
          },
          (error) => {
            swal("Problème d'envoi, veuillez réessayer", error.text);
          }
        );
      //window.location.href = "https://www.auberge-de-la-cascade.fr/formsend"//
    },
  },
  head: {
    title: "Reservation",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Reserver à l'Auberge de la cascade",
      },
    ],
  },
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

#form_message::placeholder{
  color: red
}

@media screen and (min-width: 1100px){

.form-control{
  width: 50%;
}

}
</style>

// coucou //
