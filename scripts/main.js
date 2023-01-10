const last_update = new Date(document.lastModified);
document.querySelector("#current_year").innerHTML = last_update.getFullYear();


// current_year
const today = new Date()
const dateOptions = {
    year: 'numeric',
    month: 'numeric', 
    day: 'numeric'
}

document.querySelector('#last_updated').textContent = today.toLocaleDateString('en-US', dateOptions);
