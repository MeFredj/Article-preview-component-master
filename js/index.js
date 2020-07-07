/* function shareButton() {
var person = document.getElementById("person-bar");
if (person.classList.contains("person")) {
person.classList.remove("person");
person.classList.add("person-hidden");
} else {
    person.classList.remove("person-hidden");
    person.classList.add("person");
}

var socialBar = document.getElementById("social-bar");

if (socialBar.classList.contains("social-bar--not-visible")) {
    socialBar.classList.remove("social-bar--not-visible");
    socialBar.classList.add("social-bar");
    } else {
        socialBar.classList.remove("social-bar");
        socialBar.classList.add("social-bar--not-visible");
    }
};
*/

const share = document.querySelector(".share");
const popup = document.querySelector(".popup");

share.addEventListener("click", function () {
  share.classList.toggle("active");
  popup.classList.toggle("active");
});
