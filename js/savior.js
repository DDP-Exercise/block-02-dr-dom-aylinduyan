"use strict";
/*******************************************************
 *     savior.js - 40p.
 *
 *     About time, savior - we need your help!
 *     Dr. DOM has attacked our webpage and spread his
 *     chaos all over it! We called our heroes, but he
 *     took them all captive! He summoned his list of
 *     minions to bother our users. We are in deep trouble!
 *
 *     Please, savior, >>RESTORE OUR OLD WEBPAGE<<!
 *     The people from the internets need you!
 *
 *     We shouldn't need to talk about this, but please,
 *     savior, stick to our ways and traditions! Do not
 *     fall for the dark side, don't use dark HTML or CSS
 *     magic to save us! Lydia, the goddess of judgment
 *     is watching. We have to do it the right way.
 *     The JavaScript way!
 *
 *     Bratlsoft - 2026-03-15
 *******************************************************/

"use strict";
/*******************************************************
 *     savior.js - 40p.
 *******************************************************/


const allParagraphs = document.getElementsByTagName("p");

for (let i = 0; i < allParagraphs.length; i++) {
    allParagraphs[i].style.color = "";
    allParagraphs[i].style.backgroundColor = "";
}


const allLists = document.getElementsByTagName("ul");

for (let i = 0; i < allLists.length; i++) {
    if (allLists[i].id !== "heroes_of_the_web") {
        allLists[i].remove();
    }
}
const paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].textContent.includes("minions")) {
        paragraphs[i].remove();
    }
}

const heroesList = document.getElementById("heroes_of_the_web");
heroesList.style.visibility = "visible";


const title = document.getElementById("title");
const message = document.getElementById("message");

title.textContent = "We, the mighty Heroes of the web, will protect you!";
message.textContent = "We care for simplistic design!";


const allScripts = document.getElementsByTagName("script");

for (let i = 0; i < allScripts.length; i++) {
    if (allScripts[i].src.includes("dr.dom.js")) {
        allScripts[i].remove();
    }
}