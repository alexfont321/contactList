(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

let createContract = (name, phone, address) => {
    let string =  `<h1>${name}</h1>
                <h3>${phone}</h3>
                <p>${address}</p>`;
    return string
};

module.exports = createContract;



},{}],2:[function(require,module,exports){
"use strict"

let contacts = [{
    name: "Alex Font",
    phone: "2103795967",
    address: "141 Neese Drive"
}, {
    name: "Daniel Font",
    phone: "734994001",
    address: "4513 Avenue Street"
}, {
    name: "weeny",
    phone: "999514003",
    address: "461 Corsage Drive"
}];


localStorage.setItem("contacts", JSON.stringify(contacts)); 

let getContacts = () => {
    return JSON.parse(localStorage.getItem("contacts"));
};

module.exports = getContacts;
},{}],3:[function(require,module,exports){
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
},{"./contact":1,"./contactCollection":2}],4:[function(require,module,exports){
"use strict"

const contactListFunct = require("./contactList"); 

// console.log(data());

contactListFunct();
},{"./contactList":3}]},{},[4]);
