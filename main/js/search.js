window.onload = () =>{
    let input = document.getElementById('input');
    input.oninput = function(){
        let value = this.value.trim();
        let item = document.querySelectorAll('#all-items .crafting-app__item');
        let current = document.getElementsByClassName("category_active");
        current[0].className = current[0].className.replace(" category_active", "");
        this.className += " category_active";
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
}