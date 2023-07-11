jQuery(document).ready(function($) {
	function updateCategoryName(categoryId, newName,allId) {
			var data = {
					action: 'edit_category',
					category_id: categoryId,
					new_name: newName
			};
	
			jQuery.post(ajaxurl, data, function(response) {
					if (response.success) {
							var category_name = response.data.category_name;
	$("#"+allId+" label").html('<input value="'+categoryId+'" type="checkbox" name="tax_input[product_cat][]" id="in-'+allId+'">'+" "+category_name);
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
				 $("#"+categoryIdname).remove();
			} else {
							// Обработка ошибки
							console.error(response.data);
					}
			});
	}
	
		
		var  iconEdit=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
	<path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
		$('.categorychecklist').find('li').each(function() {
			var $categoryItem = $(this);
			$categoryItem.append('<div class="as__panel"><span class="as__panel__cot__edit as__panel__col">'+iconEdit+'</span> <span class="as__panel__cot_del as__panel__col"></span> </div>');
			
		$categoryItem.prepend('<div class="as__panel__input__row"><span  class="as__panel__input__col"><input class="as__panel__cot_input" type="text"  value=""  placeholder="Введите  новое  имя категории" > </span> <span class="as__panel__input__col"> <botton class="as__panel__input__btn button button-primary">Ок</botton> </spsn>  </div>');
			$categoryItem.find('.as__panel__cot__edit').click(function(e){
			
				$($(this).parent().parent().find(".as__panel__input__row")[0]).css("display", "flex");
				var nameCat=$($(this).parent().parent().find("label")[0]).text();
				$($(this).parent().parent().find(".as__panel__cot_input")[0]).val(nameCat)
					$(this).parent().parent().css("height", "33px");
				
			})
			 $categoryItem.find('.as__panel__cot_del').click(function(e){
				var category= $(this).parent().parent().attr("id");
				var categoryId=Number(category.split("-")[1]);
	deleteCategory(categoryId,category)
				
			})
			
			
			 $categoryItem.find('.as__panel__input__btn').click(function(e){
				 var newName = $($(this).parent().parent().find(".as__panel__cot_input")).val();
				var category= $(this).parent().parent().parent().attr("id");
				var categoryId=Number(category.split("-")[1]);
		$($(this).parent().parent().parent().find(".as__panel__input__row")[0]).removeAttr("style");
				 $(this).parent().parent().parent().removeAttr("style");
				 console.log(categoryId+"  "+newName)
				 if(newName!= "")updateCategoryName(categoryId, newName,category); 
			})
			$categoryItem.find('.as__panel__cot_input').keydown(function(event) {
		if (event.which === 13) {
				 var newName = $(this).val();
				var category= $(this).parent().parent().parent().attr("id");
				var categoryId=Number(category.split("-")[1]);
		$($(this).parent().parent().parent().find(".as__panel__input__row")[0]).removeAttr("style");
				 $(this).parent().parent().parent().removeAttr("style");
				 console.log(categoryId+"  "+newName)
				 if(newName!= "")updateCategoryName(categoryId, newName,category);   }
	});
	
	
			var $childElements = $categoryItem.children('.children');
			
			if ($childElements.length > 0 ) {
			 $categoryItem.find('.as__panel').append('<span class="has-children as__panel__col"></span>');
				$categoryItem.find('.has-children').click(function(e) {
					
					e.stopPropagation();
			$($(this).parent().parent().find('ul, .children')[0]).slideToggle(function() {
				var eimFirst=	$(this).parent().parent().find('span').length;
				if(eimFirst==1){
						eimFirst=0;
					}else{
						eimFirst--;
					}
		
				if ($(this).is(':visible')) {
					$($(this).parent().find('span')[eimFirst]).addClass('open');
				} else {
					$(this).removeAttr("style")
					$($(this).parent().find('span')[eimFirst]).removeClass('open');
				}
			});
			
	});}
		});
	
	
	});