var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");
var isStorageSupport = true;
var mapLink = document.querySelector(".js-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map-close");
var galleryLink = document.querySelector(".js-button-gallery");
var galleryPopup = document.querySelector(".modal-gallery");
var galleryClose = document.querySelector(".modal-gallery-close");
var gallery2Link = document.querySelector(".js-button-gallery2");
var gallery2Popup = document.querySelector(".modal-gallery2");
var gallery2Close = document.querySelector(".modal-gallery-close2");
var gallery3Link = document.querySelector(".js-button-gallery3");
var gallery3Popup = document.querySelector(".modal-gallery3");
var gallery3Close = document.querySelector(".modal-gallery-close3");
try {
  storage = localStorage.getItem("login"); // ключ был изменён с "item" на "login"
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth; // исправление ошибки со свойством offsetWidth
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault(); // отменяем действие только для активного модального окна
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    } else if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault(); // отменяем действие только для активного модального окна
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    } else if (galleryPopup.classList.contains("modal-show")) {
      galleryPopup.classList.remove("modal-show");
    }
  }
});

galleryLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  galleryPopup.classList.add("modal-show");
});

galleryClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  galleryPopup.classList.remove("modal-show");
});

gallery2Link.addEventListener("click", function (evt) {
  evt.preventDefault();
  gallery2Popup.classList.add("modal-show");
});

gallery2Close.addEventListener("click", function (evt) {
  evt.preventDefault();
  gallery2Popup.classList.remove("modal-show");
});

gallery3Link.addEventListener("click", function (evt) {
  evt.preventDefault();
  gallery3Popup.classList.add("modal-show");
});

gallery3Close.addEventListener("click", function (evt) {
  evt.preventDefault();
  gallery3Popup.classList.remove("modal-show");
});

$(function(){
 $('.slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: '.gallery-button-back', // Класс кнопки "назад"
  nextArrow: '.gallery-button-next'  // Класс кнопки "вперед"
});
});
