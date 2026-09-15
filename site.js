/* =========================================================
   site.js — Comportements communs a toutes les pages
   ---------------------------------------------------------
   Menu de navigation sur petit ecran, pop-up d'annonce,
   et fondu des photos de la page d'accueil.
   ========================================================= */

// ---------- MENU SUR PETIT ECRAN ----------
(function () {
  var burger = document.getElementById("burger")
  var barre = document.getElementById("topbar")
  if (!burger || !barre) return

  burger.addEventListener("click", function () {
    burger.classList.toggle("ouvert")
    barre.classList.toggle("ouvert")
  })

  // Un lien choisi referme le menu
  barre.querySelectorAll("a").forEach(function (lien) {
    lien.addEventListener("click", function () {
      burger.classList.remove("ouvert")
      barre.classList.remove("ouvert")
    })
  })
})();

// ---------- LIEN DE LA PAGE COURANTE ----------
(function () {
  var page = location.pathname.split("/").pop() || "index.html"
  document.querySelectorAll(".nav_topbar").forEach(function (lien) {
    if (lien.getAttribute("href") === page) lien.classList.add("actif")
  })
})();

// ---------- POP-UP D'ANNONCE ----------
document.addEventListener("cms:ready", function () {
  var fond = document.getElementById("popup-fond")
  if (!fond) return

  // La pop-up ne s'affiche que si l'aubergiste l'a activee
  var visible = false
  try {
    var rubrique = window.CMS_DATA.sections.find(function (s) { return s.id === "popup" })
    var champ = rubrique && rubrique.fields.find(function (f) { return f.id === "visible" })
    visible = champ ? champ.value === true : false
  } catch (e) {
    visible = false
  }

  if (!visible) return

  fond.classList.add("ouvert")

  function fermer() { fond.classList.remove("ouvert") }

  var croix = document.getElementById("popup-fermer")
  if (croix) croix.addEventListener("click", fermer)

  // Clic en dehors de l'encadre
  fond.addEventListener("click", function (e) {
    if (e.target === fond) fermer()
  })

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") fermer()
  })
})

// ---------- FONDU DES PHOTOS D'ACCUEIL ----------
// Les deux photos sont choisies dans Mon CMS : on les injecte
// dans les variables CSS utilisees par l'animation.
document.addEventListener("cms:ready", function () {
  var bloc = document.querySelector(".welcome")
  if (!bloc || !window.CMS_DATA) return

  function photo(id) {
    try {
      var r = window.CMS_DATA.sections.find(function (s) { return s.id === "accueil" })
      var f = r && r.fields.find(function (x) { return x.id === id })
      return f && f.value ? f.value : null
    } catch (e) {
      return null
    }
  }

  var p1 = photo("photo1")
  var p2 = photo("photo2")
  if (p1) bloc.style.setProperty("--photo1", "url('images/" + p1 + "')")
  if (p2) bloc.style.setProperty("--photo2", "url('images/" + p2 + "')")
})
