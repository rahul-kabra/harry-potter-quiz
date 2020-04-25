let showCluesFlag = false;
let themeFlag = false;
let houseCount = 2;
let beaubaxtonsCount = 2;
let horcruxCount = 1;
let creaturesCount = 2;
let centaurCount = 2;
let houseelfCount = 2;
let ghostCount = 2;
let teacherCount = 3;
let deatheaterCount = 3;
let orderCount = 3;
let durmstrangCount = 3;
let muggleCount = 4;
let ministryCount = 12;
let unknownCount = 11;
let hufflepuffCount = 6;
let ravenclawCount = 11;
let slytherinCount = 15;
let gryffindorCount = 27;

$(document).ready(function () {
   if ($("#userInput").val() !== "") {
      $("#answer").attr("disabled", false);
      $("#answer").removeClass("disabled");
   }
   else {
      $("#answer").attr("disabled", true);
      $("#answer").addClass("disabled");
   }
});

function checkVal() {
   if ($("#userInput").val() !== "") {
      $("#answer").attr("disabled", false);
      $("#answer").removeClass("disabled");
   }
   else {
      $("#answer").attr("disabled", true);
      $("#answer").addClass("disabled");
   }
}

function onAnswerSubmit() {
   let answer = $("#userInput").val().toLowerCase();
   $.grep(data, function (e, i) {
      if (e.characterName === answer) {
         $("#" + answer).text(answer);
         let parent = $("#" + answer).parent().parent()[0].id;
         let grandParent = $("#" + parent).parent().parent()[0].id;
         let className = $("#" + grandParent)[0].className.split(" ")[1];
         $("#" + parent).addClass(className + "-colors");
         countChecker(e);
         $("#" + grandParent).attr("data-clue", e.clue);
         $("#userInput").val("");
         $("#userInput").focusout();
         $("#answer").attr("disabled", true);
         $("#answer").addClass("disabled");
      }
      else {
         $("userInput").focus();
         $("#answer").attr("disabled", false);
         $("#answer").removeClass("disabled");
      }
   })
}

function countChecker(e) {
   if (e.category === "house") {
      houseCount--;
      $("#house-answer-count").text(houseCount);
      if (houseCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "beaubaxtons") {
      beaubaxtonsCount--;
      $("#beaubaxtons-answer-count").text(beaubaxtonsCount);
      if (beaubaxtonsCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "horcrux") {
      horcruxCount--;
      $("#horcrux-answer-count").text(horcruxCount);
      if (horcruxCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "creatures") {
      creaturesCount--;
      $("#creatures-answer-count").text(creaturesCount);
      if (creaturesCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "centaur") {
      centaurCount--;
      $("#centaur-answer-count").text(centaurCount);
      if (centaurCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "houseelf") {
      houseelfCount--;
      $("#houseelf-answer-count").text(houseelfCount);
      if (houseelfCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "ghost") {
      ghostCount--;
      $("#ghost-answer-count").text(ghostCount);
      if (ghostCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "teacher") {
      teacherCount--
      $("#teacher-answer-count").text(teacherCount);
      if (teacherCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "death-eater") {
      deatheaterCount--;
      $("#death-eater-answer-count").text(deatheaterCount);
      if (deatheaterCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "order") {
      orderCount--;
      $("#order-answer-count").text(orderCount);
      if (orderCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "durmstrang") {
      durmstrangCount--;
      $("#durmstrang-answer-count").text(durmstrangCount);
      if (durmstrangCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "muggle") {
      muggleCount--;
      $("#muggle-answer-count").text(muggleCount);
      if (muggleCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "ministry") {
      ministryCount--;
      $("#ministry-answer-count").text(ministryCount);
      if (ministryCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "unknown") {
      unknownCount--;
      $("#unknown-answer-count").text(unknownCount);
      if (unknownCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "hufflepuff") {
      hufflepuffCount--;
      $("#hufflepuff-answer-count").text(hufflepuffCount);
      if (hufflepuffCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "ravenclaw") {
      ravenclawCount--;
      $("#ravenclaw-answer-count").text(ravenclawCount);
      if (ravenclawCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "slytherin") {
      slytherinCount--;
      $("#slytherin-answer-count").text(slytherinCount);
      if (slytherinCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
   else if (e.category === "gryffindor") {
      gryffindorCount--;
      $("#gryffindor-answer-count").text(gryffindorCount);
      if (gryffindorCount === 0)
         $("#" + e.category + "-count_content").addClass(e.category + "-colors")
   }
}

$('#about').click(function () {
   $('#overlay').addClass('open');
});

$('#userInput').focus(function () {
   $(this).parent().find(".label-txt").addClass('label-active');
});

$("#userInput").focusout(function () {
   if ($(this).val() == '') {
      $(this).parent().find(".label-txt").removeClass('label-active');
   };
});

function toggleThemeMode() {
   if ($("html")[0].dataset.theme == "light") {
      $("#mode").removeClass("fa-sun-o");
      $("#mode").addClass("fa-moon-o");
      $("html")[0].dataset.theme = "dark";
   }
   else if ($("html")[0].dataset.theme == "dark") {
      $("#mode").removeClass("fa-moon-o");
      $("#mode").addClass("fa-sun-o");
      $("html")[0].dataset.theme = "light";
   }
}

function closeModal() {
   $('#overlay').removeClass('open');
}

function showClues() {
   showCluesFlag = !showCluesFlag;
   if (showCluesFlag) {
      $("#clues").removeClass("fa-lock");
      $("#clues").addClass("fa-unlock-alt");
   }
   else {
      $("#clues").removeClass("fa-unlock-alt");
      $("#clues").addClass("fa-lock");
   }
   $.grep(data, function (e, i) {
      if (showCluesFlag) {
         $("#element_" + e.characterNumber).attr("data-clue", e.clue);
      }
      else {
         $("#element_" + e.characterNumber).attr("data-clue", "");
      }
   })
}