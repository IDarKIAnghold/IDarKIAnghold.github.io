export default () =>{
    let crafting_dbv;
    const ElemBody = document.getElementById('item-list'),
    setItemTitle = document.getElementById('crafting-app__title'),
    recipe_output = document.querySelector('.recipe_output i'),
    recipe_index = document.querySelector('.recipe_control-index');

    (function getFile (crafting_dbv) {
        let request = new XMLHttpRequest();  
        request.open('GET', crafting_dbv);
        request.onloadend = function() {
            parse(request.responseText);
        }
        request.send();
    })('./json/crafting_dbv.json')

    function parse(obj) {
        crafting_dbv = JSON.parse(obj);
        Object.keys(crafting_dbv).forEach(function(key) {
            const iElem = document.createElement('i');
            iElem.className = `crafting-app__item v${crafting_dbv[key].id}`;
            iElem.title = crafting_dbv[key].name;
            if(crafting_dbv[key].tab == undefined) 
                iElem.dataset.tab = 11
            else
                iElem.dataset.tab = crafting_dbv[key].tab
            iElem.onclick = () =>{
                setItemTitle.textContent = "Крафт предмета " + crafting_dbv[key].name;
                recipe_index.textContent = '1/' + crafting_dbv[key].recipes.length
                recipe_output.className = (`v${crafting_dbv[key].id}`)
                recipe_output.title = crafting_dbv[key].name
            }  
            if(crafting_dbv[key].recipes != '')
                ElemBody.appendChild(iElem) 
            else
                $(iElem).remove() 

        });  
    }
}

