window.onload = () =>{
    let input = document.getElementById('input');
    var current = document.getElementsByClassName("category_active");
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
        current[0].className = current[0].className.replace(" category_active", "");
        this.className += " category_active";
    }
}