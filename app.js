var showCluesFlag = false;
var themeFlag = false;
var houseCount = 2;
var beaubaxtonsCount = 2;
var horcruxCount = 1;
var creaturesCount = 2;
var centaurCount = 2;
var houseelfCount = 2;
var ghostCount = 2;
var teacherCount = 3;
var deatheaterCount = 3;
var orderCount = 3;
var durmstrangCount = 3;
var muggleCount = 4;
var ministryCount = 12;
var unknownCount = 11;
var hufflepuffCount = 6;
var ravenclawCount = 11;
var slytherinCount = 15;
var gryffindorCount = 27;

window.addEventListener("load", checkVal);

function checkVal() {
   if (document.getElementById('userInput').value !== '') {
      document.getElementById("answer").disabled = false;
      document.getElementById("answer").classList.remove("disabled");
   }
   else {
      document.getElementById("answer").disabled = true;
      document.getElementById("answer").classList.add("disabled");
   }
}

function onAnswerSubmit() {
   let answer = document.getElementById("userInput").value.toLowerCase();
   data.filter(function (e) {
      if (e.characterName === answer) {
         document.getElementById(answer).innerText = answer;
         let parent = document.getElementById(answer).parentNode.parentNode.id;
         let grandParent = document.getElementById(parent).parentNode.parentNode.id;
         let className = document.getElementById(grandParent).className.split(" ")[1];
         document.getElementById(parent).classList.add(className + "-colors");
         countChecker(e);
         document.getElementById(grandParent).setAttribute("data-clue", e.clue);
         document.getElementById("userInput").value = "";
         document.querySelector(".label-txt").classList.remove("label-active");
         document.getElementById("answer").disabled = true;
         document.getElementById("answer").classList.add("disabled");
      }
      else {
         document.getElementById("answer").disabled = false;
         document.getElementById("answer").classList.remove("disabled");
      }
   });
}

function countChecker(e) {
   if (e.category === "house") {
      if (houseCount !== 0)
         houseCount--;
      document.getElementById("house-answer-count").innerText = houseCount;
      if (houseCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "beaubaxtons") {
      if (beaubaxtonsCount !== 0)
         beaubaxtonsCount--;
      document.getElementById("beaubaxtons-answer-count").innerText = beaubaxtonsCount;
      if (beaubaxtonsCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "horcrux") {
      if (horcruxCount !== 0)
         horcruxCount--;
      document.getElementById("horcrux-answer-count").innerText = horcruxCount;
      if (horcruxCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "creatures") {
      if (creaturesCount !== 0)
         creaturesCount--;
      document.getElementById("creatures-answer-count").innerText = creaturesCount;
      if (creaturesCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "centaur") {
      if (centaurCount !== 0)
         centaurCount--;
      document.getElementById("centaur-answer-count").innerText = centaurCount;
      if (centaurCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "houseelf") {
      if (houseelfCount !== 0)
         houseelfCount--;
      document.getElementById("houseelf-answer-count").innerText = houseelfCount;
      if (houseelfCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "ghost") {
      if (ghostCount !== 0)
         ghostCount--;
      document.getElementById("ghost-answer-count").innerText = ghostCount;
      if (ghostCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "teacher") {
      if (teacherCount !== 0)
         teacherCount--
      document.getElementById("teacher-answer-count").innerText = teacherCount;
      if (teacherCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "death-eater") {
      if (deatheaterCount !== 0)
         deatheaterCount--;
      document.getElementById("death-eater-answer-count").innerText = deatheaterCount;
      if (deatheaterCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "order") {
      if (orderCount !== 0)
         orderCount--;
      document.getElementById("order-answer-count").innerText = orderCount;
      if (orderCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "durmstrang") {
      if (durmstrangCount !== 0)
         durmstrangCount--;
      document.getElementById("durmstrang-answer-count").innerText = durmstrangCount;
      if (durmstrangCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "muggle") {
      if (muggleCount !== 0)
         muggleCount--;
      document.getElementById("muggle-answer-count").innerText = muggleCount;
      if (muggleCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "ministry") {
      if (ministryCount !== 0)
         ministryCount--;
      document.getElementById("ministry-answer-count").innerText = ministryCount;
      if (ministryCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "unknown") {
      if (unknownCount !== 0)
         unknownCount--;
      document.getElementById("unknown-answer-count").innerText = unknownCount;
      if (unknownCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "hufflepuff") {
      if (hufflepuffCount !== 0)
         hufflepuffCount--;
      document.getElementById("hufflepuff-answer-count").innerText = hufflepuffCount;
      if (hufflepuffCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "ravenclaw") {
      if (ravenclawCount !== 0)
         ravenclawCount--;
      document.getElementById("ravenclaw-answer-count").innerText = ravenclawCount;
      if (ravenclawCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "slytherin") {
      if (slytherinCount !== 0)
         slytherinCount--;
      document.getElementById("slytherin-answer-count").innerText = slytherinCount;
      if (slytherinCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
   else if (e.category === "gryffindor") {
      if (gryffindorCount !== 0)
         gryffindorCount--;
      document.getElementById("gryffindor-answer-count").innerText = gryffindorCount;
      if (gryffindorCount === 0)
         document.getElementById(e.category + "-count_content").classList.add(e.category + "-colors")
   }
}

document.getElementById("about").addEventListener("click", function () {
   document.getElementById("overlay").classList.add("open");
});

function closeModal() {
   document.getElementById("overlay").classList.remove("open");
}

document.getElementById('userInput').addEventListener("focusin", function () {
   document.querySelector(".label-txt").classList.add("label-active");
});

document.getElementById('userInput').addEventListener("focusout", function () {
   if (document.getElementById('userInput').value === '') {
      document.querySelector(".label-txt").classList.remove("label-active");
   };
});

function toggleThemeMode() {
   if (document.querySelector("html").getAttribute("data-theme") == "light") {
      document.getElementById("mode").classList.remove("fa-sun-o");
      document.getElementById("mode").classList.add("fa-moon-o");
      document.querySelector("html").setAttribute("data-theme", "dark");
   }
   else if (document.querySelector("html").getAttribute("data-theme") == "dark") {
      document.getElementById("mode").classList.remove("fa-moon-o");
      document.getElementById("mode").classList.add("fa-sun-o");
      document.querySelector("html").setAttribute("data-theme", "light");
   }
}

function showClues() {
   showCluesFlag = !showCluesFlag;
   if (showCluesFlag) {
      document.getElementById("clues").classList.remove("fa-lock");
      document.getElementById("clues").classList.add("fa-unlock-alt");
   }
   else {
      document.getElementById("clues").classList.remove("fa-unlock-alt");
      document.getElementById("clues").classList.add("fa-lock");
   }
   data.filter(function (e) {
      if (showCluesFlag) {
         document.getElementById("element_" + e.characterNumber).setAttribute("data-clue", e.clue);
      }
      else {
         document.getElementById("element_" + e.characterNumber).setAttribute("data-clue", "");
      }
   });
}