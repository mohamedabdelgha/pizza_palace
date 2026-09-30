let category = ["Pizza","Burger","Drinks","Dessert"]
let categorylist = document.getElementById("category-list")

category.forEach(item =>{
    categorylist.innerHTML += 
    `<li>${item}</li>`
})

let menu=[
    {
        name:"Cheese pizza",
        detials:"Alot of cheese, made with love",
        price:200,
        image:"/veg stack pizza_0.jpg",
    },
    {
        name:"Chicken pizza",
        detials:"Alot of cheese,fresh chicken, made with love",
        price:350,
        image:"/veg stack pizza_0.jpg",
    },
    {
        name:"Chicken pizza",
        detials:"Alot of cheese,fresh chicken, made with love",
        price:350,
        image:"/veg stack pizza_0.jpg",
    },
    {
        name:"Chicken pizza",
        detials:"Alot of cheese,fresh chicken, made with love",
        price:350,
        image:"/veg stack pizza_0.jpg",
    },
]
let cardscon = document.getElementById("cards-con")
menu.forEach(function(item,i){
    cardscon.innerHTML+=
    `<div class="food-card">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>${item.detials}</p>
        <b>${item.price}EGP</b>
        <button onclick="addtocart(${i})">add to cart</button>
    </div>`
})

let cart = []
let cartbox = document.getElementById("cart")
function addtocart(i){
    const found = cart.find(item => item.name === menu[i].name)
    if(found){
        found.qty = found.qty +1
        showcart()
    }else{
        cart.push({
            name:menu[i].name,
            price:menu[i].price,
            qty:1,
            img:menu[i].image
        })
        console.log(cart)
        showcart()
    }

}
function showcart(){
    cartbox.innerHTML=""
    cart.forEach(function (element,i) {
        cartbox.innerHTML+=
        `<div class="item">
            <img src="${element.image}" width="50px">
            <h3>${element.name}</h3>
            <p>${element.qty}</p>
            <p>${element.price} egp</p>
        </div>`
        
    });
}