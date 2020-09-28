

var button = document.querySelector('button')

var name = document.getElementById('name');

var name2 = document.getElementById('surname')

var city = document.getElementById('city')



button.addEventListener("click", function(){
    if(confirm('Are you sure?')){

        name.value = "";
        name2.value = "";
        city.value = "";
        
    }
});