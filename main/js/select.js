document.getElementById("select")
.onchange = function () {
    var b = {
        1: "vanila",
        2: "railcraft",
    }, c = this.value,
        a;
    for (a in b) document.getElementById(b[a])
    .style.display = 0 == c || c == a ? "flex" : "none"
    
    document.getElementById("input").value = "";
    let item = document.querySelectorAll('.crafting-app__items .crafting-app__item');
    item.forEach(elem =>
        elem.classList.remove('hide')
    )
};