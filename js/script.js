"use strict";

let d = new Date();
let time = 1000;
let displayImage = document.getElementById("displayImage");
let descText = document.getElementById("descText");
let noticeBoard = document.getElementById("notification");
let myVar = setInterval(timer, 1000);


document.getElementById("year" ).innerHTML = d.getFullYear();
getSaved("quote_choice");


function timer() {
  var d = new Date();
  document.getElementById("showTime").innerHTML = d.toLocaleTimeString();
};

function processChoice() {
    let d = new Date();
    let attrs = [];
    let choices = {};
    let quoteType = document.getElementById("quoteType").value.toLowerCase();
    let period = document.getElementById("period").value.toLowerCase();
    let notice = "It's {activity} Time ({hour}), I won't have time to show you any other quote within this hour.<br> You can still select and save your choice below and I will remember it on your next visit.";

    if (d.getHours() == 8) {
        attrs[0] = "images/morning.jpg";
        attrs[1] = "Awesome morning quote";
        choices = {
            src:"images/morning.jpg", alt:"Awesome morning quote"
        };
        noticeBoard.innerHTML = notice.replace("{activity}", "Breakfast").replace("{hour}", "8am");
    } else if (d.getHours() == 17) {
        attrs[0] = "images/afternoon.jpg";
        attrs[1] = "Awesome afternoon quote";
        choices = {
            src:"images/afternoon.jpg", alt:"Awesome afternoon quote"
        };
        noticeBoard.innerHTML = notice.replace("{activity}", "Lunch").replace("{hour}", "3pm");
    } else if (d.getHours() == 21) {
        attrs[0] = "images/night.jpg";
        attrs[1] = "Awesome night quote";
        choices = {
            src:"images/night.jpg", alt:"Awesome night quote"
        };
        noticeBoard.innerHTML = notice.replace("{activity}", "Dinner").replace("{hour}", "9pm");
    } else {
        let properties = getDisplayImage(period, quoteType);
        attrs[0] = properties[0];
        attrs[1] = properties[1];
        choices = {
            src:properties[0], alt:properties[1]
        };
    };
    
    displayImage.setAttribute("src", attrs[0]);
    displayImage.setAttribute("alt", attrs[1]);
    descText.innerHTML = attrs[1];
    saveToLocal(choices);

    event.preventDefault();
};

function getSaved(key) {
    let choice = JSON.parse(localStorage.getItem(key));
    if (choice) {
        displayImage.setAttribute("src", choice.src);
        displayImage.setAttribute("alt", choice.alt);
    };
};

function saveToLocal(item) {
    localStorage.setItem("quote_choice", JSON.stringify(item));
};

function clearLocal() {
    localStorage.clear();
    event.preventDefault();
};

function getRandomSrc() {
    let randomNumber = Math.random();
    if (randomNumber < 0.1) {
        return "images/random.jpg"
    } else if (randomNumber < 0.2) {
        return "images/random-1.jpg"
    } else if (randomNumber < 0.3) {
        return "images/random-2.jpg"
    } else if (randomNumber < 0.4) {
        return "images/random-3.jpg"
    } else if (randomNumber < 0.5) {
        return "images/random-4.jpg"
    } else if (randomNumber < 0.6) {
        return "images/random-5.jpg"
    } else if (randomNumber < 0.7) {
        return "images/random-6.jpg"
    } else if (randomNumber < 0.8) {
        return "images/random-7.jpg"
    } else if (randomNumber < 0.9) {
        return "images/random-8.jpg"
    } else {
        return "images/random-9.jpg"
    };
};


function getDisplayImage(period="", type="") {
    let periods = ["morning", "afternoon", "night"];
    let types = ["motivational", "faithful", "wise"];
    let imgSrc = "images/{type}-{period}.jpg";
    let textDesc = "Awesome {type} {period} quote";
    let choice = `'That was a great choice. You chose "${period}" and "${type}".<br>'`;

    if (period && type) {
        if (isIn(period, periods)) {
            imgSrc = imgSrc.replace("{period}", period);
            textDesc = textDesc.replace("{period}", period);
            choice += "I found qoute matching period selected."
        } else {
            choice += " I can't find qoute matching the period you selected. I will show you random quote instead."
            randomImage();
        };
        if (isIn(type, types)) {
            imgSrc = imgSrc.replace("{type}", type);
            textDesc = textDesc.replace("{type}", type);
            choice += "I also found quote matching selected type.";
        } else {
            choice += " I can't find qoute matching the type you selected. I will show you random quote instead."
            randomImage();
        };
    } else {
        choice += " I can't find qoute matching your choices. Therefore, I will show you some Awesome Random quotes."
        randomImage();
    };

    function randomImage() {
        imgSrc = getRandomSrc();
        textDesc = "Awesome random quote";
    };
    
    noticeBoard.innerHTML = choice;
    return [imgSrc, textDesc];
};

function isIn(item, array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i].toLowerCase() == item.toLowerCase()) {
            return true;
		};
    };
    return false;
};

function saveToLocal(item) {
    localStorage.setItem("quote_choice", JSON.stringify(item));
};

function clearLocal() {
    localStorage.clear();
    event.preventDefault();
};
