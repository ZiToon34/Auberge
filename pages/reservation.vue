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
      <div class="button-container">
  <a class="reservation-btn" href="https://larzac34.netlify.app/reservation">🍽️ Réserver au Restaurant en ligne, <span class="click-here">Cliquez ICI</span></a>
        </div>
        <div class="button-container">
  <a class="reservation-btn" href="https://auberge-de-la-cascade.fr/reservationHotel">🏨 Réserver pour l'Hébergement, <span class="click-here">Cliquez ICI</span></a>
        </div>
      </div>
    </div>
</template>



<style scoped>
/* CSS */

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

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20px 0;
}

.click-here {
    text-decoration: underline;
    text-decoration-color: red;
    font-weight: bold;
}
</style>


