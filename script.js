let dish
let priceDish
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
    
    priceDish = document.querySelector(".dishes .selected span").innerHTML.split('');
    priceDish[priceDish.length - 3] = '.';
    priceDish = Number(priceDish.join(''));
}

let drink
let priceDrink
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

    priceDrink = document.querySelector(".drinks .selected span").innerHTML.split('');
    priceDrink[priceDrink.length - 3] = '.';
    priceDrink = Number(priceDrink.join(''));
}

let dessert
let priceDessert
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

    priceDessert = document.querySelector(".desserts .selected span").innerHTML.split('');
    priceDessert[priceDessert.length - 3] = '.';
    priceDessert = Number(priceDessert.join(''));
}

function verifyOrder(){
    if (dish !== undefined && drink !== undefined && dessert !== undefined){
        const buttonSend = document.querySelector(".send-order");
        buttonSend.classList.add("order-done");
        buttonSend.disabled = false;
        buttonSend.innerHTML = "Fechar pedido";
    }
}

function sendOrder(){
    let total = (priceDish + priceDrink + priceDessert).toFixed(2).split('');
    total[total.length - 3] = ',';
    total = total.join('');

    const phoneNumber = "5567991072525";
    const text = `Olá, gostaria de fazer o pedido:
    - Prato: ${dish}
    - Bebida: ${drink}
    - Sobremesa: ${dessert}
    Total: R$ ${total}`;

    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(link, '_blank');
}