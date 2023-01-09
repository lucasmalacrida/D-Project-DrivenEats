function toNumber(price){
    price = price.split('');
    price[price.length - 3] = '.';
    price = Number(price.join(''));
    return price;
}

function toPrice(num){
    num = num.toFixed(2).split('');
    num[num.length - 3] = ',';
    num = num.join('');
    return num;
}

let dish;
let priceDish;
function selectDish(card){
    let cardSelected = document.querySelector(".dishes .selected");
    let checkMarked = document.querySelector(".dishes .selected ion-icon");
    if (cardSelected !== null){
        cardSelected.classList.remove("selected");
        checkMarked.classList.add("hidden");
    }
    card.classList.add("selected");
    document.querySelector(".dishes .selected ion-icon").classList.remove("hidden");

    dish = document.querySelector(".dishes .selected h3").innerHTML;
    priceDish = document.querySelector(".dishes .selected span").innerHTML;
}

let drink;
let priceDrink;
function selectDrink(card){
    let cardSelected = document.querySelector(".drinks .selected");
    let checkMarked = document.querySelector(".drinks .selected ion-icon");
    if (cardSelected !== null){
        cardSelected.classList.remove("selected");
        checkMarked.classList.add("hidden");
    }
    card.classList.add("selected");
    document.querySelector(".drinks .selected ion-icon").classList.remove("hidden");

    drink = document.querySelector(".drinks .selected h3").innerHTML;
    priceDrink = document.querySelector(".drinks .selected span").innerHTML;
}

let dessert;
let priceDessert;
function selectDessert(card){
    let cardSelected = document.querySelector(".desserts .selected");
    let checkMarked = document.querySelector(".desserts .selected ion-icon");
    if (cardSelected !== null){
        cardSelected.classList.remove("selected");
        checkMarked.classList.add("hidden");
    }
    card.classList.add("selected");
    document.querySelector(".desserts .selected ion-icon").classList.remove("hidden");

    dessert = document.querySelector(".desserts .selected h3").innerHTML;
    priceDessert = document.querySelector(".desserts .selected span").innerHTML;
}

function verifyOrder(){
    if (dish !== undefined && drink !== undefined && dessert !== undefined){
        const buttonSend = document.querySelector(".send-order");
        buttonSend.classList.add("order-done");
        buttonSend.disabled = false;
        buttonSend.innerHTML = "Fechar pedido";
    }
}

const finalScreen = document.querySelector(".bigger-container-confirm-order");
let total;
let priceTotal;
function confirmOrder(){
    finalScreen.classList.remove("hidden");

    document.querySelector(".selected-dish p:nth-of-type(1)").innerHTML = dish;
    document.querySelector(".selected-dish p:nth-of-type(2)").innerHTML = priceDish;
    document.querySelector(".selected-drink p:nth-of-type(1)").innerHTML = drink;
    document.querySelector(".selected-drink p:nth-of-type(2)").innerHTML = priceDrink;
    document.querySelector(".selected-dessert p:nth-of-type(1)").innerHTML = dessert;
    document.querySelector(".selected-dessert p:nth-of-type(2)").innerHTML = priceDessert;

    total = (toNumber(priceDish) + toNumber(priceDrink) + toNumber(priceDessert));
    priceTotal = toPrice(total);
    document.querySelector(".total span").innerHTML = priceTotal;
}

function finishOrder(){
    let clientName = prompt("Digite seu nome:");
    let clientAdress = prompt("Digite seu endereço:");

    const phoneNumber = "5567991072525";
    const text = `Olá, gostaria de fazer o pedido:
    - Prato: ${dish}
    - Bebida: ${drink}
    - Sobremesa: ${dessert}
    Total: R$ ${priceTotal}
    
    Nome: ${clientName}
    Endereço: ${clientAdress}`;

    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(link, '_blank');
}

function cancelOrder(){
    finalScreen.classList.add("hidden");
}