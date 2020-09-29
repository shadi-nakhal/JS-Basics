const imgs = document.querySelectorAll("img");


const changeImg = (imgs) => {

    Array.from(imgs).forEach((img, i) => {

         img.addEventListener("mouseover", function(e) {
            e.target.src = ( `images/image${i+1}` + "_2.jpg")  
         })

         img.addEventListener("mouseout", function(e){
            e.target.src = `images/image${i+1}.jpg`
        });
    }) 

}

changeImg(imgs)