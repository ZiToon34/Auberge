/* =========================================================
   reservation.js — Envoi du formulaire de pré-réservation
   ---------------------------------------------------------
   Le message part par EmailJS, directement depuis le
   navigateur : aucun serveur n'est nécessaire.
   ========================================================= */

(function () {
  "use strict"

  var SERVICE = "service_tgwg0ym"
  var MODELE = "template_llj7zkd"
  var CLE = "3OAPTNG_R1tLuUh5f"

  var form = document.getElementById("form-reservation")
  if (!form) return

  var bouton = document.getElementById("form-envoyer")
  var etat = document.getElementById("form-etat")

  function afficher(message, type) {
    if (!etat) return
    etat.textContent = message
    etat.className = "formulaire-etat " + (type || "")
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault()

    // Piege a robots : un visiteur ne voit pas ce champ, donc ne le remplit pas
    var piege = form.querySelector('input[name="site"]')
    if (piege && piege.value) {
      afficher("Demande envoyée.", "ok")
      return
    }

    // Verification des dates
    var debut = form.querySelector("#form_datestart").value
    var fin = form.querySelector("#form_dateend").value
    if (debut && fin && fin < debut) {
      afficher("La date de départ doit suivre la date d'arrivée.", "erreur")
      return
    }

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    if (typeof emailjs === "undefined") {
      afficher(
        "L'envoi est momentanément indisponible. Écrivez-nous à aubergedelacascade@orange.fr",
        "erreur"
      )
      return
    }

    bouton.disabled = true
    afficher("Envoi en cours…")

    emailjs.sendForm(SERVICE, MODELE, form, { publicKey: CLE }).then(
      function () {
        window.location.href = "merci.html"
      },
      function (erreur) {
        bouton.disabled = false
        afficher(
          "L'envoi a échoué. Réessayez, ou écrivez-nous à aubergedelacascade@orange.fr",
          "erreur"
        )
        console.error("EmailJS :", erreur)
      }
    )
  })
})()
