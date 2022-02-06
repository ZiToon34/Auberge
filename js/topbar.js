//Constantes pour récupérer la top bar et le boutton menu
const button_phone = document.getElementById('button_phone');
const topbar = document.getElementById('topbar');
const topb_bar = document.getElementById('topbar_phone')
const croix = document.getElementById('croix');

//fonction pour ouvrir et fermer la topbar
const ouvrir = () => {
    if(topbar.classList.contains('ferme')){
        topbar.classList.replace('ferme', 'ouvre')
        topbar_phone.classList.replace('open', 'ferme')
        croix.classList.replace('ferme', 'open')

    }

}

const fermer = () => {
    if(topbar.classList.contains('ouvre')){
        topbar.classList.replace('ouvre', 'ferme')
        croix.classList.replace('open', 'ferme')
        topbar_phone.classList.replace('ferme', 'open')
    }

}
//Listener de click sur boutton_phone pour ouvrir et fermer topbar
croix.addEventListener('click', fermer)
button_phone.addEventListener('click', ouvrir);