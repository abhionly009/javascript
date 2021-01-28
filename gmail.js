document.getElementById('deletebtn').addEventListener('click', e => {
    var button = e.target;
    button.parentElement.parentElement.remove()
})