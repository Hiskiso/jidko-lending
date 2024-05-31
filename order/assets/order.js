let inputs = document.getElementsByClassName("input_wraper")
let header = document.getElementById("header")

let thank = document.getElementById("thank")
let forOrder = document.getElementById("forOrder")

let order_button = document.getElementById("order_button")

function createOrder() {
    thank.textContent = "Спасибо за заказ!"
    forOrder.textContent = ""
    header.scrollIntoView({
        behavior: 'smooth'
    });
}

for (const input of inputs) {
    input.childNodes[3].addEventListener("keydown",(ev)=>{
        if (ev.key == "Enter") {
            createOrder()
        }
       
    })
}

order_button.addEventListener("click",()=>{
    createOrder()
})