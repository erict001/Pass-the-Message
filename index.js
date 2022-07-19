let input = document.getElementById('input');
const submit = document.getElementById('submit')
const message = document.getElementById('message')

let array = []

function messageDelivery() {
    let textMessage = input.value
    message.textContent = textMessage
}

submit.addEventListener('click', messageDelivery)