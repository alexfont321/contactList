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