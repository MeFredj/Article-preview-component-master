 const share = document.querySelector(".person__forward-icon");
const shareIconColor = document.querySelector(".person-details__forward-icon--style");
const popup = document.querySelector(".social-bar");

share.addEventListener("click", function () {
  share.classList.toggle("active");
  shareIconColor.classList.toggle("active");
  popup.classList.toggle("active");
});
