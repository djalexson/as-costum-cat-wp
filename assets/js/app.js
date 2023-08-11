jQuery(document).ready(function($) {

	function  elmLiast(id,name,ul) {
	if(ul){
		return 	`<ul class="children">
<li id="product_cat-${id}">
			 <div class="as__panel__input__row" data-update="add">
				<span class="as__panel__input__col as__panel__input__col_add"><input class="as__panel__cot_input" data-update="add-1" type="text" value="" placeholder="Введите имя категории"><input class="as__panel__cot_input" data-update="add-2" type="text" value="" placeholder="Введите url категории"></span> 
				<span class="as__panel__input__col"> <botton class="as__panel__input__btn button button-primary" data-update="add">Ок</botton>   </span></div>
				
				<div class="as__panel__input__row" data-update="update"><span class="as__panel__input__col"><input class="as__panel__cot_input" data-update="update" type="text" value="" placeholder="Введите  новое  имя категории"> </span> <span class="as__panel__input__col"> <botton class="as__panel__input__btn button button-primary" data-update="update">Ок</botton>   </span></div>
				<label class="selectit"><input value="${id}" type="checkbox" name="tax_input[product_cat][]" id="in-product_cat-${id}">${name}</label>
				<div class="as__panel">
				<span class="as__panel__cot__edit as__panel__col"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
				<path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
				<path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
				<span class="as__panel__cot_del as__panel__col"></span>
				<span class="as__panel__cot_add as__panel__col"><svg viewBox="0 0 340.7 340.8">
				<style type="text/css">
					.st0{fill:none;stroke:#fff;stroke-width:40;stroke-miterlimit:2;}
				</style>
				<path class="st0" d="M297.6,150c13-13,13-34.1,0-47.1l-59.7-59.7c-13-13-34.1-13-47.1,0L53.8,180L33.4,303.6  c-0.4,2.3,1.6,4.2,3.8,3.8l123.5-20.6L297.6,150z"></path>
				</svg>
				</span>
				</div>	
				</li>
</ul>
`
		
	}else{
		
		return 	`<li id="product_cat-${id}">
			 <div class="as__panel__input__row" data-update="add">
				<span class="as__panel__input__col as__panel__input__col_add"><input class="as__panel__cot_input" data-update="add-1" type="text" value="" placeholder="Введите имя категории"><input class="as__panel__cot_input" data-update="add-2" type="text" value="" placeholder="Введите url категории"></span> 
				<span class="as__panel__input__col"> <botton class="as__panel__input__btn button button-primary" data-update="add">Ок</botton>   </span></div>
				
				<div class="as__panel__input__row" data-update="update"><span class="as__panel__input__col"><input class="as__panel__cot_input" data-update="update" type="text" value="" placeholder="Введите  новое  имя категории"> </span> <span class="as__panel__input__col"> <botton class="as__panel__input__btn button button-primary" data-update="update">Ок</botton>   </span></div>
				<label class="selectit"><input value="${id}" type="checkbox" name="tax_input[product_cat][]" id="in-product_cat-${id}">${name}</label>
				<div class="as__panel">
				<span class="as__panel__cot__edit as__panel__col"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
				<path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
				<path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
				<span class="as__panel__cot_del as__panel__col"></span>
				<span class="as__panel__cot_add as__panel__col"><svg viewBox="0 0 340.7 340.8">
				<style type="text/css">
					.st0{fill:none;stroke:#fff;stroke-width:40;stroke-miterlimit:2;}
				</style>
				<path class="st0" d="M297.6,150c13-13,13-34.1,0-47.1l-59.7-59.7c-13-13-34.1-13-47.1,0L53.8,180L33.4,303.6  c-0.4,2.3,1.6,4.2,3.8,3.8l123.5-20.6L297.6,150z"></path>
				</svg>
				</span>
				</div>	
				</li>`
	}
		
		}
	function createProductCategory(category_name, category_slug ,categoryid) {
    jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        data: {
            action: 'create_product_category_2',
            category_name: category_name,
            category_slug: category_slug,
        },
        success: function(response) {
            try {
                var createdCategory = response;
					
						if (createdCategory && createdCategory.term_id) {
                            
							$('#product_cat-'+categoryid).after(elmLiast(createdCategory.term_id,createdCategory.name,false));
                } else {
                    console.log('Ошибка при создании категории'+createdCategory);
                }
            } catch (error) {
                console.log('Ошибка при обработке ответа: ' + error);
            }
        },
        error: function(errorThrown) {
            console.log('Ошибка при создании категории: ' + errorThrown);
        }
    });
}


function createProductSubcategory(subcategory_name,subcategory_slug,parent_category_id,categoryId ,boolSubCat,akkord,child) {
	
	jQuery.ajax({
        url: ajaxurl,
        type: 'POST',
        data: {
            action: 'create_product_subcategory_1',
            subcategory_name: subcategory_name,
            subcategory_slug: subcategory_slug,
            parent_category_id: parent_category_id,
        },
		 dataType: 'json',
        success: function(response) {
            try {
                var createdCategory = response;
    	console.log(createdCategory)

                if (createdCategory && createdCategory.term_id) {
     if(boolSubCat){
		 
		 if(akkord){
			 $('#product_cat-'+categoryId).find(".as__panel").append('<span class="has-children as__panel__col"></span>');
		 }
		 if(child){

					$('#product_cat-'+categoryId).append(elmLiast(createdCategory.term_id,createdCategory.name,child)); 
		 }else{
	
		$($('#product_cat-'+categoryId).find("ul")[0]).append(elmLiast(createdCategory.term_id,createdCategory.name,child)); 
		 		

		 }
				
			
		}else{
				$('#product_cat-'+categoryId).after(elmLiast(createdCategory.term_id,createdCategory.name,!child));
			
		}                      
				
                } else {
                    console.log('Ошибка при создании категории'+createdCategory);
                }
            } catch (error) {
                console.log('Ошибка при обработке ответа: ' + error);
            }
        },
        error: function(errorThrown) {
            console.log('Ошибка при создании подкатегории: ' + errorThrown);
        }
    });
}
1	
	
	
function updateCategoryName(categoryId, newName,allId) {
    var data = {
        action: 'edit_category',
        category_id: categoryId,
        new_name: newName
    };

    jQuery.post(ajaxurl, data, function(response) {
        if (response.success) {
            var category_name = response.data.category_name;
$("#"+allId+" label").html('<input value="'+categoryId+'" type="checkbox" name="tax_input[product_cat][]" id="in-product_cat-'+allId+'">'+" "+category_name);
               } else {
         
            console.error(response.data);
        }
    });
}
	function deleteCategory(categoryId,categoryIdname) {
    var data = {
        action: 'delete_category',
        category_id: categoryId
    };

    jQuery.post(ajaxurl, data, function(response) {
        if (response.success) {
			if($("#"+categoryIdname).parent().find("li").length == 1)	{
						$($("#"+categoryIdname).parent().parent().find(".has-children")[0]).remove()

			$($("#"+categoryIdname).parent().parent().find(".children")[0]).remove()
			
			
		}else{
			  $("#"+categoryIdname).remove();
		}
     
		} else {
            // Обработка ошибки
            console.error(response.data);
        }
    });
}

function editPanei(e,param) {
if(param){

	$($(e).parent().parent().find('.as__panel__input__row[data-update="update"]')[0]).css("display", "flex");
	var nameCat=$($(e).parent().parent().find("label")[0]).text();
	$($(e).parent().parent().find('.as__panel__cot_input[data-update="update"]')[0]).val(nameCat)
		$(e).parent().parent().css("height", "33px");
}else{

	var newName = $($(e).parent().parent().find('.as__panel__cot_input[data-update="update"]')).val();
	var category= $(e).parent().parent().parent().attr("id");
	var categoryId=Number(category.split("-")[1]);
$($(e).parent().parent().parent().find('.as__panel__input__row[data-update="update"]')[0]).removeAttr("style");
	 $(e).parent().parent().parent().removeAttr("style");
	 console.log(categoryId+"  "+newName)
	 if(newName!= "")updateCategoryName(categoryId, newName,category); 

}	

}
function addPanei(e,param) {
	
if(param){

	$($(e).parent().parent().find('.as__panel__input__row[data-update="add"]')[0]).css("display", "flex");					if(!$($(e).parent().find(".has-children")[0]).hasClass("open")){
		
	$(e).parent().parent().css("height", "63px");
		
	}

}else{
	var name = $($(e).parent().parent().find('.as__panel__cot_input[data-update="add-1"]')).val();
	var slag = $($(e).parent().parent().find('.as__panel__cot_input[data-update="add-2"]')).val().toLowerCase().replace(/[_\s]+/g, '-');

	if(name== "")$($(e).parent().parent().find('.as__panel__cot_input[data-update="add-1"]')).css("border","1px solid red")
	if(slag == "")$($(e).parent().parent().find('.as__panel__cot_input[data-update="add-2"]')).css("border","1px solid red")
$(e).parent().parent().removeAttr("style");
$(e).parent().parent().parent().removeAttr("style");		 
	if(name != "" && slag != ""){
		var category= $(e).parent().parent().parent().attr("id");		
 var categoryId=Number(category.split("-")[1]);
var child=true;
		var akkord=false;
if($(e).parent().parent().parent().find("#in-product_cat-"+categoryId).is(':checked')){

	if($("#product_cat-"+categoryId).find(".children").length>0){
		 child=false;
		
	}
	if($($(e).parent().parent().parent().find(".as__panel")[0]).find("span").length!=4){
		akkord=true;
	}
	
	createProductSubcategory(name,slag,categoryId,categoryId,true,akkord,child)

$($(e).parent().parent().find('.as__panel__cot_input[data-update="add-1"]')).val("")
$($(e).parent().parent().find('.as__panel__cot_input[data-update="add-2"]')).val("")		
	
	
}else{
		if($(e).parent().parent().parent().parent().hasClass("children")){
		var sobCategoryId=Number($(e).parent().parent().parent().parent().parent().attr("id").split("-")[1]);
		console.log(sobCategoryId)

createProductSubcategory(name,slag,sobCategoryId,categoryId,false,akkord,child)
$($(e).parent().parent().find('.as__panel__cot_input[data-update="add-1"]')).val("")
$($(e).parent().parent().find('.as__panel__cot_input[data-update="add-2"]')).val("")
			
	}else{

createProductCategory(name,slag,categoryId)
		$($(e).parent().parent().find('.as__panel__cot_input[data-update="add-1"]')).val("")
$($(e).parent().parent().find('.as__panel__cot_input[data-update="add-2"]')).val("")
	}}		
		$($(e).parent().parent().find('.as__panel__cot_input[data-update="add-1"]')).removeAttr("style")
		$($(e).parent().parent().find('.as__panel__cot_input[data-update="add-2"]')).removeAttr("style")
	};
}	
}
function delPanei(e) {
	var category= $(e).parent().parent().attr("id");
				var categoryId=Number(category.split("-")[1]);
	deleteCategory(categoryId,category)
}
function akkordPanei(e) {
	$($(e).parent().parent().find('ul, .children')[0]).slideToggle(function() {
			var eimFirst=$($(this).parent().find('.as__panel')[0]).find("span").length-1;

		if ($(this).is(':visible')) {
			$($($(this).parent().find('.as__panel')[0]).find("span")[eimFirst]).addClass('open');
		} else {
			$(this).removeAttr("style")
			$($($(this).parent().find('.as__panel')[0]).find("span")[eimFirst]).removeClass('open');
		}
	});	
}
var edit="as__panel__cot__edit",
btn="as__panel__input__btn",
add="as__panel__cot_add",
akkord="has-children",
del="as__panel__cot_del";
if(document.querySelector("#product_catchecklist")!= null){
$("#product_catchecklist").on("click",function(e){
var tag=e.target;
///console.log(tag);
if($(tag).hasClass(akkord)){
	akkordPanei(tag)
}
if($(tag).hasClass(edit)){
	editPanei(tag,true)
}
if($(tag).hasClass(add)){
	addPanei(tag,true)
}
if($(tag).hasClass(del)){
	delPanei(tag)
}
if($(tag).hasClass(btn)){
if($(tag).attr("data-update")=="add"){
	addPanei(tag,false)
}else if($(tag).attr("data-update")=="update"){	
editPanei(tag,false)

}

}


})

}

});




