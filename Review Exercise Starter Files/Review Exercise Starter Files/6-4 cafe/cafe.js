"use strict";
const getElement = selector => document.querySelector(selector);

const getSelectedProduct = src => {
    
};

let priceList = [
    {name:"espresso", price: 1.95},
    {name:"cappuccino", price: 3.45},
    {name:"coffee", price: 1.75},
    {name:"biscotti", price: 1.95},
    {name:"scone", price: 2.95},
    {name:"latte", price: 2.95}
]

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#menu-list img");
    for(let image of images){
        let originalImage = image.src;
        let hoverImage = image.id;
        image.addEventListener("mouseover", () => {
            image.src = hoverImage;
        })
        image.addEventListener("mouseout", () => {
            image.src = originalImage;
        })
        image.addEventListener("click", () => {
            let item = document.createElement("option");
            item.textContent = image.alt;
            let priceItem = priceList.find((element) => element.name === image.alt);
            item.textContent = image.alt + " " + priceItem.price;
            let orderList = getElement("#order");
            orderList.appendChild(item);
        })
    }
}); 