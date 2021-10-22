import url from "./modules/const.js";
import load from "./modules/load.js";


document.addEventListener("DOMContentLoaded", function () {
    load.getData(url.peopleUrl + "1/");
});

let count = 1;

let rightArrow = document.body.querySelector(".rightArrow");
rightArrow.addEventListener("click", function () {
    load.getData(url.peopleUrl + ++count + "/");
})

let leftArrow = document.body.querySelector(".leftArrow");
leftArrow.addEventListener("click", function () {
    if(count > 1) {
          load.getData(url.peopleUrl + --count + "/");
    }
})


