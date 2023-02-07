let input = document.getElementById('input');
input.oninput = function(){
    let value = this.value.trim();
    let item = document.querySelectorAll('#all-items .crafting-app__item');
    if(value !=''){
        item.forEach(elem => {
            if(elem.getAttribute('title').search(new RegExp(value, "i")) == -1)
                elem.classList.add('hide');
            else
                elem.classList.remove('hide');              
        });  
    } else {
        item.forEach(elem =>
            elem.classList.remove('hide'))
    }
}

input.onclick = () => {
    var current = document.getElementsByClassName("category_active");
    current[0].className = current[0].className.replace(" category_active", "");
    let item = document.querySelectorAll('#all-items .crafting-app__item');
    item.forEach(elem =>{
        elem.classList.remove('hide')
    })
    const filters = document.querySelectorAll('div [data-filter]')
    filters.forEach(elem =>{
        if(elem.getAttribute('data-filter') == 0){
            elem.classList.add('category_active')
        }
    })
}