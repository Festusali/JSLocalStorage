"use strict";

let d = new Date();
let time = 1000;
let displayImage = document.getElementById("displayImage");
let myVar = setInterval(timer, 1000);

document.getElementById("year" ).innerHTML = d.getFullYear();
getSaved("quote_choice");


function timer() {
  var d = new Date();
  document.getElementById("showTime").innerHTML = d.toLocaleTimeString();
}

function processChoice() {
    let d = new Date();
    let attrs = [];
    let choices = {};
    let randomSrc = "";
    let quoteType = document.getElementById("quoteType").value;
    let period = document.getElementById("period").value;
    let descText = document.getElementById("descText");
    let fullDesc = document.getElementById("fullDesc");

    if (period == "Morning") {
        if (d.getHours() == 8) {
            attrs[0] = "images/morning.jpg";
            attrs[1] = "Awesome morning quote";
            choices = {
                src:"images/morning.jpg", alt:"Awesome morning quote"
            };
        } else if (quoteType == "Motivation") {
            attrs[0] = "images/motivation-morning.jpg";
            attrs[1] = "Awesome morning motivational quote";
            choices = {
                src:"images/morning.jpg", alt:"Awesome morning motivational quote"
            };
        } else if (quoteType == "Wisdom") {
            attrs[0] = "images/wisdom-morning.jpg";
            attrs[1] = "Awesome wise morning quote";
            choices = {
                src:"images/wisdom-morning.jpg", alt:"Awesome wise morning quote"
            };
        }  else if (quoteType == "Faith") {
            attrs[0] = "images/faith-morning.jpg";
            attrs[1] = "Uplifting faithful morning quote";
            choices = {
                src:"images/faith-morning.jpg", alt:"Uplifting faithful morning quote"
            };
        } else {
            randomSrc = getRandomSrc();
            attrs[0] = randomSrc;
            attrs[1] = "Random quote";
            choices = {
                src:randomSrc, alt:"Random quote"
            };
        }
    } else if (period == "Afternoon") {
        if (d.getHours() == 15) {
            attrs[0] = "images/afternoon.jpg";
            attrs[1] = "Awesome afternoon quote";
            choices = {
                src:"images/afternoon.jpg", alt:"Awesome afternoon quote"
            };
        } else if (quoteType == "Motivation") {
            attrs[0] = "images/motivation-afternoon.jpg";
            attrs[1] = "Awesome afternoon motivational quote";
            choices = {
                src:"images/afternoon.jpg", alt:"Awesome afternoon motivational quote"
            };
        } else if (quoteType == "Wisdom") {
            attrs[0] = "images/wisdom-afternoon.jpg";
            attrs[1] = "Awesome wise afternoon quote";
            choices = {
                src:"images/wisdom-afternoon.jpg", alt:"Awesome wise afternoon quote"
            };
        }  else if (quoteType == "Faith") {
            attrs[0] = "images/faith-afternoon.jpg";
            attrs[1] = "Uplifting faithful afternoon quote";
            choices = {
                src:"images/faith-afternoon.jpg", alt:"Uplifting faithful afternoon quote"
            };
        } else {
            randomSrc = getRandomSrc();
            attrs[0] = randomSrc;
            attrs[1] = "Random quote";
            choices = {
                src:randomSrc, alt:"Random quote"
            };
        }
    } else if (period == "Night") {
        if (d.getHours() == 23) {
            attrs[0] = "images/night.jpg";
            attrs[1] = "Awesome night quote";
            choices = {
                src:"images/night.jpg", alt:"Awesome night quote"
            };
        } else if (quoteType == "Motivation") {
            attrs[0] = "images/motivation-night.jpg";
            attrs[1] = "Awesome motivational night quote";
            choices = {
                src:"images/night.jpg", alt:"Awesome motivational night quote"
            };
        } else if (quoteType == "Wisdom") {
            attrs[0] = "images/wisdom-night.jpg";
            attrs[1] = "Awesome wise night quote";
            choices = {
                src:"images/wisdom-night.jpg", alt:"Awesome wise night quote"
            };
        }  else if (quoteType == "Faith") {
            attrs[0] = "images/faith-night.jpg";
            attrs[1] = "Uplifting faithful night quote";
            choices = {
                src:"images/faith-night.jpg", alt:"Uplifting faithful night quote"
            };
        } else {
            randomSrc = getRandomSrc();
            attrs[0] = randomSrc;
            attrs[1] = "Random quote";
            choices = {
                src:randomSrc, alt:"Random quote"
            };
        }
    } else {
        randomSrc = getRandomSrc();
        attrs[0] = randomSrc;
        attrs[1] = "Random quote";
        choices = {
            src:randomSrc, alt:"Random quote"
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
}
