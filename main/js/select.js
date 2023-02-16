var ddData = [
    { text: "Vanila", value: 1,},
    { text: "RailCraft", value: 2,}
];

import crafting_table_V from "./craft_dbv.js";

var vanila = "<div class='scrollbar vanila' id='item-list'>"
var railcraft = "<div class='scrollbar railcraft'id='item-list'>"
$('.crafting-app__recipe').addClass('vanila');
$('#select').ddslick({
    data:ddData,
    width: 120,
    onSelected: function (e) {
        document.getElementById("input").value = ""
        $('.category_active').removeClass('category_active')
        $('.crafting-app__All').addClass('category_active') 
        if(e.selectedData.value == 1){
            $('.crafting-app__items').empty().append(vanila).append(crafting_table_V);
            $('.railcraft').toggleClass("vanila railcraft");
        }else{ 
            $('.crafting-app__items').empty().append(railcraft).append();
            $('.vanila').toggleClass("vanila railcraft");
        }
        console.log(ddData.selectedData.text);
    }
})