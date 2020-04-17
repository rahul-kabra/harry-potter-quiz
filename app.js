var answers = [
    "harry",
    "hermione",
    "lily",
    "bellatrix",
    "barty",
    "cho",
    "nott",
    "ollivander",
    "fleur",
    "neville",
    "narcissa",
    "magorian",
    "albus",
    "spinnet",
    "percival",
    "skeeter",
    "charlie",
    "argus",
    "kreacher",
    "cattermole",
    "scorpius",
    "timms",
    "voldemort",
    "crabbe",
    "minerva",
    "firenze",
    "cornelius",
    "nagini",
    "cuffe",
    "zabini",
    "gaunt",
    "george",
    "amycus",
    "severus",
    "brown",
    "krum",
    "regulus",
    "sirius",
    "yaxley",
    "zacharias",
    "norbert",
    "molly",
    "twycross",
    "remus",
    "rodolphus",
    "padma",
    "aragog",
    "cedric",
    "ignotus",
    "slytherin",
    "shacklebolt",
    "ted",
    "ivanova",
    "xenophilius",
    "cresswell",
    "bagman",
    "hufflepuff",
    "travers",
    "ginny",
    "rosmerta",
    "amos",
    "igor",
    "pettigrew",
    "aubrey",
    "hagrid",
    "trelawney",
    "phineas",
    "bill",
    "james",
    "arthur",
    "ron",
    "fred",
    "ravenclaw",
    "rufus",
    "dobby",
    "sturgis",
    "bagshot",
    "hestia",
    "myrtle",
    "dedalus",
    "roger",
    "leanne",
    "creevey",
    "parvati",
    "nymphadora",
    "pomfrey",
    "seamus",
    "edgecombe",
    "gilderoy",
    "terry",
    "dudley",
    "horace",
    "ernie",
    "tom",
    "beery",
    "luna",
    "alecto",
    "thomas",
    "pansy",
    "umbridge",
    "nicholas",
    "petunia",
    "andromeda",
    "carmichael",
    "black",
    "crockford",
    "elphias",
    "flamel",
    "moody",
    "norris",
    "lee"
];

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

function onAnswerSubmit() {
    let answer = $("#userInput").val().toLowerCase();
    if (answers.includes(answer)) {
        $("#" + answer).text(answer);
        let parent = $("#" + answer).parent().parent()[0].id;
        let grandParent = $("#" + parent).parent().parent()[0].id;
        let className = $("#" + grandParent)[0].className.split(" ")[1];
        $("#" + parent).addClass(className + "-colors");
        $("#userInput").val("");
        $("#userInput").focusout();
        $("#answer").attr("disabled", true);
        $("#answer").addClass("disabled");
    }
    else {
        console.log("Wrong answer. Try harder!");
        $("userInput").focus();
        $("#answer").attr("disabled", false);
        $("#answer").removeClass("disabled");
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
    if ($("html")[0].dataset.theme == "light")
        $("html")[0].dataset.theme = "dark";
    else if ($("html")[0].dataset.theme == "dark")
        $("html")[0].dataset.theme = "light"
}

function closeModal() {
    $('#overlay').removeClass('open');
}