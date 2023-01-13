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
    const buttonSend = document.querySelector(".send-order");

    if (dish === "Nenhuma Opção" && drink === "Nenhuma Opção" && dessert === "Nenhuma Opção"){
        buttonSend.classList.remove("order-done");
        buttonSend.disabled = true;
        buttonSend.innerHTML = "Selecione os 3 itens <br>para fechar o pedido";
    } else if (dish !== undefined && drink !== undefined && dessert !== undefined){
        buttonSend.classList.add("order-done");
        buttonSend.disabled = false;
        buttonSend.innerHTML = "Fechar pedido";
    }
}

const finalScreen = document.querySelector(".bigger-container-confirm-order");
let selectedDish;
let selectedDrink;
let selectedDessert;
let total;
let priceTotal;
function confirmOrder(){
    finalScreen.classList.remove("hidden");

    selectedDish = document.querySelector(".selected-dish");
    if (dish === "Nenhuma Opção"){
        selectedDish.classList.add("hidden");
    } else {
        selectedDish.classList.remove("hidden");
        selectedDish.innerHTML = `<p>${dish}</p><p>${priceDish}</p>`;
    }

    selectedDrink = document.querySelector(".selected-drink");
    if (drink === "Nenhuma Opção"){
        selectedDrink.classList.add("hidden");
    } else {
        selectedDrink.classList.remove("hidden");
        selectedDrink.innerHTML = `<p>${drink}</p><p>${priceDrink}</p>`;
    }

    selectedDessert = document.querySelector(".selected-dessert");
    if (dessert === "Nenhuma Opção"){
        selectedDessert.classList.add("hidden");
    } else {
        selectedDessert.classList.remove("hidden");
        selectedDessert.innerHTML = `<p>${dessert}</p><p>${priceDessert}</p>`;
    }

    total = (toNumber(priceDish) + toNumber(priceDrink) + toNumber(priceDessert));
    priceTotal = toPrice(total);
    document.querySelector(".total span").innerHTML = priceTotal;
}

function finishOrder(){
    let clientName;
    do {
        clientName = prompt("Digite seu nome:");
        if (clientName === null){
            return;
        }
    } while (clientName === '');
    
    let clientAdress;
    do {
        clientAdress = prompt("Digite seu endereço:");
        if (clientAdress === null){
            return;
        }
    } while (clientAdress === '');

    const phoneNumber = "5567991072525";
    const text = 
`Olá, gostaria de fazer o pedido:
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