document.getElementById("select")
.onchange = function () {
    var b = {
        1: "vanila",
        2: "railcraft",
    }, c = this.value,
        a;
    for (a in b) document.getElementById(b[a])
    .style.display = 0 == c || c == a ? "block" : "none"
    
    document.getElementById("input").value = "";
    let item = document.querySelectorAll('.crafting-app__items .crafting-app__item');
    item.forEach(elem => elem.classList.remove('hide'))
    let mode = document.querySelector('.crafting-app_recipe')
    let mode_item = document.querySelector('.recipe_input i')
    if(c == 2){
        mode.classList.remove('vanila');
        mode.classList.add('railcraft')
    }
    else{
        mode.classList.remove('railcraft')
        mode.classList.add('vanila');
    }
};