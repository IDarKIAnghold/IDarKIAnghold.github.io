let categories = {
    1:{ id: 0, name: "Все" }, 
    2:{ id: 7, name: "Еда" }, 
    3:{ id: 8, name: "Инструменты" }, 
    4:{ id: 9, name: "Оружие" }, 
    5:{ id: 11, name: "Строительные блоки" }, 
    6:{ id: 1, name: "Декоративные блоки" },
    7:{ id: 2, name: "Механизмы" }, 
    8:{ id: 3, name: "Транспорт" }, 
    9:{ id: 6, name: "Разное" }
};

const categoryBody = document.getElementById('craffting-app__categories'),
category_active = categoryBody.getElementsByClassName('crafting-app__category')

Object.keys(categories).forEach(function(key) {
  const category = document.createElement('div')
  category.dataset.filter = categories[key].id
  category.textContent = categories[key].name
  if(categories[key].id == 0) 
    category.className = 'crafting-app__category category_active'
  else
    category.className = 'crafting-app__category'
  category.onclick = function(){
    input.value = ''
    for (let i = 0,length = category_active.length; i < length; i++) {
      let  current = document.getElementsByClassName("category_active")
      current[0].className = current[0].className.replace(" category_active", "")
      this.className += " category_active"
    }
    document.querySelectorAll('.crafting-app__item').forEach(function (c) {
      if (c.getAttribute('data-tab') == categories[key].id || categories[key].id == 0)
        c.classList.remove('hide')
      else
        c.classList.add('hide')
    })
  }
  categoryBody.appendChild(category)
})