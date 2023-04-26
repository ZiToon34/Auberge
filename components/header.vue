<template>
  <div>
    <header class="header">
      <nav :class="{ hide_smallscreen: !showMenu, topbar: true }">
        <div class="nav_topbar" @click="showMenu = false">
          <NuxtLink :to="localePath('/')" id="acceuil">
            <img src="@/assets/img/acceuil.png" alt="bouton acceuil" />
          </NuxtLink>
        </div>
        <div class="nav_topbar" @click="showMenu = false">
          <NuxtLink :to="localePath('/hotel/')"> {{ $t("hotel") }} </NuxtLink>
        </div>
        <div class="nav_topbar" @click="showMenu = false">
          <NuxtLink :to="localePath('/restaurant/')">
            {{ $t("restaurant") }}
          </NuxtLink>
        </div>
        <div class="nav_topbar" @click="showMenu = false">
          <NuxtLink :to="localePath('/alentour/')">
            {{ $t("navaAndAround") }}
          </NuxtLink>
        </div>
        <div class="nav_topbar" @click="showMenu = false">
          <NuxtLink :to="localePath('/contact/')">
            {{ $t("contact") }}
          </NuxtLink>
        </div>
        <div class="nav_topbar" @click="showMenu = false">
          <NuxtLink :to="localePath('/reservation/')" id="reservation">
            {{ $t("reservation") }}
          </NuxtLink>
        </div>
        <div id="selectLang">
          <button id="buttonLang" @click="showLang = !showLang">
            <country-flag :country="findCurrentFlag($i18n.locale)" size="normal" />
          </button>
          <ul id="listLang" v-if="showLang">
            <li
              v-for="lang in langs"
              :key="lang.i18n"
              @click="
                showLang = false;
                $i18n.locale = lang.i18n;
              "
            >
              <country-flag :country="lang.flag" size="normal" />
            </li>
          </ul>
        </div>
      </nav>
      <div id="topbar_phone" v-if="!showMenu" class="hide_fullscreen">
        <div id="button_phone">
          <img
            @click="showMenu = true"
            src="@/assets/img/button.png"
            alt="button top bar phone"
          />
        </div>
      </div>
      <div v-if="showMenu" @click="showMenu = false" id="croix">
        <img src="@/assets/img/croix.png" alt="boutton croix" />
      </div>
        <SavedModal v-show="showModal" />
        <SavedModal v-show="showModal" @close-modal="showModal = false" />
    </header>
  </div>
</template>

<script>
import SavedModal from '../components/SavedModal.vue'

export default {
  components: { SavedModal },
  name: "Acceuil",
  data() {
    return {
      showMenu: false,
      langs: [
        { i18n: "fr", flag: "fr" },
        { i18n: "en", flag: "gb" },
        { i18n: "nl", flag: "nl" },
        { i18n: "de", flag: "de" },
      ],
      showModal: true,
      showLang: false,
    };
  },
  methods: {
    findCurrentFlag(i18n) {
      for (const lang of this.langs) {
        if(i18n === lang.i18n ){
          return lang.flag
        }
      }
      return null
    },
  },
};
</script>

<style scoped>

#selectLang {
  position: relative;
  display: flex;
  flex-direction: column;
}

#buttonLang {
  background-color: rgba(243, 243, 243, 0);
  border-style: solid;
  padding: 5px;
  border-color: black;
}

#listLang {
  width: 100%;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  top: 45px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
}

#listLang li {
   background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-color: #af8842;
  padding: 10px;
  height: 30px;
  width: 100%;
}

#listLang li span {
  justify-content: center;
  margin-bottom: 3px;
}

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
  width: 356px;
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

.hide_smallscreen {
  display: none;
}

@media screen and (min-width: 1285px) {

  #listLang {
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  top: 50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  list-style-type: none;
}

#listLang li {
  width: auto;
  margin: 2.5px;
}

#listLang li span {
  width: 52px;
  height: 39px;
  margin-bottom: 3px;
}


  #croix{
    display: none;
  }

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
