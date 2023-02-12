export default () =>{
    let crafting_dbv;
    const ElemBody = document.getElementById('item-list'),
    setItemTitle = document.getElementById('crafting-app__title'),
    crafting = document.querySelector('.recipe'),
    recipe_output = document.querySelector('.recipe_output i');

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
                setItemTitle.textContent = "Крафт предмета " + crafting_dbv[key].name
                if(["smelting", "smoking", "blasting"].includes(crafting_dbv[key].recipes[0].type) ){
                    crafting.className = `recipe recipe_${crafting_dbv[key].recipes[0].type}`
                    // recipe_input.className = 'v720'
                }else if(['shapeless','shaped'].includes(crafting_dbv[key].recipes[0].type)){
                    crafting.className = `recipe recipe_${crafting_dbv[key].recipes[0].type}`
                }else{
                    crafting.className = `recipe recipe_${crafting_dbv[key].recipes[0].type}` 
                    // recipe_input.className = 'v733'
                }
                recipe_output.className = (`v${crafting_dbv[key].id}`)
                recipe_output.title = crafting_dbv[key].name
            }
            ElemBody.appendChild(iElem)
            if(crafting_dbv[key].recipes == '') $(iElem).remove();
        });  
    }
}

