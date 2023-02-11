var ddData = [
    { text: "Vanila", value: 1,},
    { text: "RailCraft", value: 2,}
];

import crafting_table from "./craft_dbv.js";

var vanila = "<div class='scrollbar vanila' id='vanila'>"
var railcraft = "<div class='scrollbar railcraft'id='railcraft'>"
$('#select').ddslick({
    data:ddData,
    width: 120,
    onSelected: function (e) {
        let c = e.selectedData.value;
        if(c==1){
            $('#all-items').empty().append(vanila).append(crafting_table)
        }else{ 
            $('#all-items').empty().append(railcraft)
        }
        document.getElementById("input").value = ""; 
        $('.category_active').removeClass('category_active')
        $('.crafting-app__All').addClass('category_active');
    }
})