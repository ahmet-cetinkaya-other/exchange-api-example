const amount = document.querySelector("#amount")
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Currency("USD", "TRY");
const ui = new UI(firstSelect, secondSelect);

eventListener();

function eventListener() {
    amount.addEventListener("input", exchangeCurrency)
    firstSelect.onchange = function () {
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst()
    }
    secondSelect.onchange = function () {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond()
    }
}

function exchangeCurrency() {
    currency.changeAmount(amount.value)
    currency.exchange()
        .then(r => {
            ui.displayResult(r)
        })
        .catch(err => console.log(err))
}