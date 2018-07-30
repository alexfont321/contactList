"use strict"

let createContract = (name, phone, address) => {
    let string =  `<h1>${name}</h1>
                <h3>${phone}</h3>
                <p>${address}</p>`;
    return string
};

module.exports = createContract;


