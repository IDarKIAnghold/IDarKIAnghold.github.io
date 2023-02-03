window.onload = () =>{
    let input =  document.querySelector('#input');
    input.oninput = function(){
        let value = this.value.trim();
        let item = document.querySelectorAll('.crafting-app__items .crafting-app__item');
        if(value !=''){
            item.forEach(elem => {
                    if(elem.getAttribute('title').search(new RegExp(value, "i")) == -1){
                        elem.classList.add('hide');
                    }
                    else{
                        elem.classList.remove('hide');
                    }
            });
        } else{
            item.forEach(elem =>
                elem.classList.remove('hide')
        )}
}}