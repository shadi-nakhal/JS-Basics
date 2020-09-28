var div = document.getElementById('divID');

var input = document.getElementById('name');

input.addEventListener("input", () => {
    var bla = input.value;
    div.textContent = bla
})



