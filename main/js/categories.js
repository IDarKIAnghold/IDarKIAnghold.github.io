categories = {
    1:{ id: 0, name: "\u0412\u0441\u0435" }, 
    2:{ id: 7, name: "\u041f\u0438\u0449\u0430" }, 
    3:{ id: 8, name: "\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b" }, 
    4:{ id: 9, name: "\u041e\u0440\u0443\u0436\u0438\u0435" }, 
    5:{ id: 11, name: "\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0431\u043b\u043e\u043a\u0438" }, 
    6:{ id: 1, name: "\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0431\u043b\u043e\u043a\u0438" },
    7:{ id: 2, name: "\u041c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u044b" }, 
    8:{ id: 3, name: "\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442" }, 
    9:{ id: 6, name: "\u0420\u0430\u0437\u043d\u043e\u0435" }
};

const categoryBody = document.getElementById('craffting-app__categories');
let category_active = categoryBody.getElementsByClassName('crafting-app__category');

Object.keys(categories).forEach(function(key) {
    const category = document.createElement('div');
    category.className = 'crafting-app__category';
    if(categories[key].name == "\u0412\u0441\u0435"){category.className = 'crafting-app__category category_active'}
    category.textContent = categories[key].name;
    category.onclick = function(even){
        console.log(categories[key].name);
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