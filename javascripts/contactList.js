"use strict"

let collection = require("./contactCollection");
let createContact = require("./contact"); 


function createListContact () {
    collection().forEach(element => {
        let contactComponent = createContact(element.name, element.phone, element.address);
        putOntoDom(contactComponent);
})
};


function putOntoDom (contact) {
    document.querySelector("#contactsCard").innerHTML += contact;
};



module.exports = createListContact;