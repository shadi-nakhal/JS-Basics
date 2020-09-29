const txt = document.querySelector("body")



txt.addEventListener("click", (e) => {

    switch(e.target.className){
        case "color green":

            txt.firstElementChild.style.color = "green";
            break;

        case "color red":

            txt.firstElementChild.style.color = "red";
            break;

        case "color blue":

            txt.firstElementChild.style.color = "blue";
            break;
    }
       


})



