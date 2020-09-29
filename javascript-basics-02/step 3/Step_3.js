const input = document.getElementById('name');

const tag = document.createElement("div")

document.body.appendChild(tag)

input.addEventListener("input", () => {

    tag.innerText = ""
    tag.innerHTML += input.value

})



