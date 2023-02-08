window.onload = () =>{
    document.getElementById("select").onchange = e => {
        var b = {
            1: "vanila",
            2: "railcraft",
        }, c = e.target.value,
            a;
        for (a in b) document.getElementById(b[a])
        .style.display = 0 == c || c == a ? "block" : "none"
        
        document.getElementById("input").value = "";
        let item = document.querySelectorAll('.crafting-app__items .crafting-app__item');
        item.forEach(elem => elem.classList.remove('hide'))
        let mode = document.querySelector('.crafting-app__recipe')
        if(c == 1)
            mode.classList.replace("railcraft" , "vanila");
        else
            mode.classList.replace("vanila" , "railcraft");
    };
}
