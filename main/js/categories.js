let categories = {
    1:{ id: 0, name: "Все" }, 
    2:{ id: 7, name: "Еда" }, 
    3:{ id: 8, name: "Инструменты" }, 
    4:{ id: 9, name: "Оружие" }, 
    5:{ id: undefined, name: "Строительные блоки" }, 
    6:{ id: 1, name: "Декоративные блоки" },
    7:{ id: 2, name: "Механизмы" }, 
    8:{ id: 3, name: "Транспорт" }, 
    9:{ id: 6, name: "Разное" }
};

const categoryBody = document.getElementById('craffting-app__categories');
const category_active = categoryBody.getElementsByClassName('crafting-app__category');
const input = document.getElementById('input');

Object.keys(categories).forEach(function(key) {
    const category = document.createElement('div');
    category.dataset.filter = categories[key].id;
    category.textContent = categories[key].name;
    category.className = 'crafting-app__category';
    if(categories[key].name == "Все"){category.className = 'crafting-app__category category_active'}
    category.onclick = function(){
      input.value = '';
    }
    categoryBody.appendChild(category);
})

for (var i = 0; i < category_active.length; i++) {
    category_active[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("category_active");
      current[0].className = current[0].className.replace(" category_active", "");
      this.className += " category_active";
    });
}

const filters = document.querySelectorAll('div [data-filter]')
for(let filter of filters){
  filter.addEventListener('click', function(){
    let filterid = filter.getAttribute('data-filter');
    let allitem = document.querySelectorAll('.crafting-app__item [data-tab="' + filterid + '"]')
    let alldivs = document.querySelectorAll('.crafting-app__item')
    alldivs.forEach(function (c) {
      if (c.getAttribute('data-tab') == filterid){
        c.classList.remove('hide')
      }else if(filterid == '0'){
        c.classList.remove('hide')
      }else{
        c.classList.add('hide');
      }
    })
  })
}