let item = document.getElementById("itemtext");
let quanty = document.getElementById("quantytext");
let Amount = document.getElementById("Amounttext");
let addButton = document.getElementById("add-button");
let itemList = document.getElementById("itemlist")

addButton.addEventListener("click", function () {
    let text = itemtext.value;
    if (text==="") {
        alert("Please Enter Item");
        return;
    }
 let Item = item.value;
let Quantities = quanty.value;
let AmountValue = Amount.value;
let li = document.createElement("li");
li.textContent = Item + "  Quantity:"  +  Quantities  + "   Amount:" + AmountValue;
itemList.appendChild(li);

})
