let categories 
(function getFile (categories) {
  let request = new XMLHttpRequest();  
  request.open('GET', categories);
  request.onloadend = function() {
      parse(request.responseText);
  }
  request.send();
})('./json/categories.json')

function parse(obj){
  categories = JSON.parse(obj)
  
  const categoryBody = document.getElementById('craffting-app__categories'),
  category_active = categoryBody.getElementsByClassName('crafting-app__category')

  Object.keys(categories).forEach(function(key) {
    const category = document.createElement('div')
    category.dataset.filter = categories[key].id
    category.textContent = categories[key].name
    if(categories[key].id == 0) 
      category.className = 'crafting-app__category category_active crafting-app__All'
    else
      category.className = 'crafting-app__category'
    category.onclick = function(){
      input.value = ''
      for (let i = 0,length = category_active.length; i < length; i++) {
        let  current = document.getElementsByClassName("category_active")
        current[0].className = current[0].className.replace(" category_active", "")
        this.className += " category_active"
      }
      document.querySelectorAll('.crafting-app__item').forEach((c) =>{
        if (c.getAttribute('data-tab') == categories[key].id || categories[key].id == 0)
          $(c).removeClass('hide');
        else
          $(c).addClass('hide');
      })
    }
    categoryBody.appendChild(category)
  })
}