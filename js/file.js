"use strict";

fetch("https://restcountries.com/v3.1/currency/inr").then(response => {
    if(!response.ok){
        throw new Error
    }
    return response.json()
}).then(userData => {
    console.log(userData)
})



