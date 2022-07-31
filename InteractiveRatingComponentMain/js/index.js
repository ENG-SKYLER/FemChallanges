const submit = document.getElementsByTagName("button")[0];
const rate = document.getElementsByClassName("rate");
const selected = document.querySelector(".sumbit");
const number = document.getElementsByTagName("span")[0];

for (let i = 0; i < rate.length; i++) {
  rate[i].onclick = function () {
    number.innerHTML = rate[i].innerHTML;
    rate[i].classList.toggle("sel");
    submit.onclick = function () {
      selected.style.cssText = "display:block ";
    };
  };
}
