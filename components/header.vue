<template>
  <div>
    <header class="header">
      <nav @click="showMenu = false" :class="{hide_smallscreen: !showMenu, topbar: true}">
        <div class="nav_topbar">
          <NuxtLink to="/" id="acceuil">
            <img src="@/assets/img/acceuil.png" alt="bouton acceuil" />
          </NuxtLink>
        </div>
        <div class="nav_topbar">
          <NuxtLink to="/hotel"> L'Hôtel </NuxtLink>
        </div>
        <div class="nav_topbar">
          <NuxtLink to="/restaurant">
          Le Restaurant
        </NuxtLink>
        </div>
        <div class="nav_topbar">
          <NuxtLink to="/alentour">
          Navacelles & Alentours
        </NuxtLink>
        </div>
        <div class="nav_topbar">
          <NuxtLink to="/contact">
          Contact
        </NuxtLink>
        </div>
        <div class="nav_topbar">
          <NuxtLink to="/reservation" id="reservation">
          Reservation
        </NuxtLink>
        </div>
      </nav>
      <div v-if="!showMenu" @click="showMenu = true" class="hide_fullscreen"  id="topbar_phone">
        <div id="button_phone"><img src="@/assets/img/button.png" alt="button top bar phone" /></div>
      </div>
      <div v-if="showMenu" @click="showMenu = false" id="croix">
        <img src="@/assets/img/croix.png" alt="boutton croix" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Acceuil',
  data() {
      return {
        showMenu: false
      }
    },
}
</script>

<style scoped>
#croix {
  top: 0;
  left: 175px;
  height: 50px;
  width: 50px;
  cursor: pointer;
  position: fixed;
  right: 25px;
  z-index: 100;
  margin-top: 30px;
}

#topbar_phone {
  position: fixed;
  background-color: rgba(243, 243, 243, 0.85);
  width: 100%;
  height: 66px;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 40px;
  padding-top: 40px;
  z-index: 100;
}

#button_phone {
  height: 50px;
  width: 50px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 15px;
}

.topbar {
      left: 0;
  display: block;
  position: fixed;
  background-color: rgba(243, 243, 243, 0.85);
  height: 100%;
  width: 286px;
  z-index: 100;
}

#reservation {
  border-style: solid;
  padding: 5px;
}

.nav_topbar {
  position: relative;
  margin: 30px 2.5%;
  font-size: 20px;
  color: black !important;
  z-index: 98;
  text-decoration: none;
  font-family: Arial "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
}

#noir1,
#noir2,
#noir3,
#noir4,
#reservation {
  color: black;
}

.hide_fullscreen {
  display: block;
}

.hide_smallscreen{
  display: none;
}

@media screen and (min-width: 1285px) {

  .topbar {
      display: flex;
  width: 100%;
  height: 66px;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
  z-index: 100;

  }

  .nav_topbar {
    position: relative;
    display: inline-flex;
    font-size: 20px;
    color: black;
    text-decoration: none;
    font-family: Arial "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    white-space: nowrap;
    vertical-align: middle;
  }

  .hide_fullscreen {
    display: none;
  }
}
</style>