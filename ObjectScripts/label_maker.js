"use strict";



let myVar = {
    name: " Xavier",
    address: "123 Sesame",
    city: "Atlanta",
    State: "Georgia",
    zip: "00000",

}

printContact(myVar)

//---------------------------------------------------------------

function printContact(contact){
    console.log(contact.name)
    console.log(contact.address)
    console.log(`${contact.city}, ${contact.State} ${contact.zip}`)
}
