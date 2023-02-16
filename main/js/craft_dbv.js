import filename from "./select.js";
export default () => {
    let crafting_dbv;
    const ElemBody = document.getElementById('item-list'),
        setItemTitle = document.getElementById('crafting-app__title'),
        recipeType = document.querySelector('.recipe'),
        recipe_output = document.querySelector('.recipe_output i'),
        recipe_output_count = document.querySelector('.recipe_output i b'),
        recipe_index = document.querySelector('.recipe_control-index'),
        next_btn = document.querySelector('.recipe_control-btn_next'),
        prev_btn = document.querySelector('.recipe_control-btn_prev');
    (function getFile(crafting_dbv) {
        let request = new XMLHttpRequest();
        request.open('GET', crafting_dbv)
        request.onloadend = function () {
            parse(request.responseText);
        }
        request.send();
    })(`./json/${filename}.json`)

    function parse(obj) {
        crafting_dbv = JSON.parse(obj);
        Object.keys(crafting_dbv).forEach(function (key) {
            const iElem = document.createElement('i')
            let counter = 1;
            let index = 0;
            iElem.className = `crafting-app__item v${crafting_dbv[key].id}`
            iElem.title = crafting_dbv[key].name

            if (crafting_dbv[key].tab == undefined)
                iElem.dataset.tab = 11
            else
                iElem.dataset.tab = crafting_dbv[key].tab

            iElem.onclick = () => {
                setItemTitle.textContent = `Крафт предмета ${crafting_dbv[key].name}`;
                recipe_index.textContent = `${counter}/${crafting_dbv[key].recipes.length}`;
                recipeType.className = `recipe recipe_${crafting_dbv[key].recipes[index].type}`

                if(crafting_dbv[key].recipes[index].count > 1) 
                    recipe_output_count.textContent = crafting_dbv[key].recipes[index].count

                recipe_output.className = (`v${crafting_dbv[key].id}`)
                recipe_output.title = crafting_dbv[key].name

                next_btn.onclick = () => {
                    if (counter < crafting_dbv[key].recipes.length) {
                        counter++;
                        index++;
                        recipeType.className = `recipe recipe_${crafting_dbv[key].recipes[index].type}`
                        recipe_index.textContent = `${counter}/${crafting_dbv[key].recipes.length}`
                        recipe_output_count.textContent = crafting_dbv[key].recipes[index].count
                    }
                }
                prev_btn.onclick = () => {
                    if (counter <= crafting_dbv[key].recipes.length & counter > 1) {
                        counter--;
                        index--;
                        recipeType.className = `recipe recipe_${crafting_dbv[key].recipes[index].type}`
                        recipe_index.textContent = `${counter}/${crafting_dbv[key].recipes.length}`
                        recipe_output_count.textContent = crafting_dbv[key].recipes[index].count
                    }
                }
            }
            if (crafting_dbv[key].recipes != '')
                ElemBody.appendChild(iElem)
            else
                $(iElem).remove()
        });
    }
}