
const today = new Date()
const dateOptions = {
    year: 'numeric',
    month: 'numeric', 
    day: 'numeric'
}

document.querySelector('#today').textContent = today.toLocaleDateString('en-US', dateOptions);

document.querySelector('#temp').innerHTML = '32&deg,'

document.querySelector('#myform').value = 'Carpe Diem!'

function makeRed(item){
    item.style.color = 'red'
}

document.querySelectorAll(".red").forEach(makeRed)