<?php
/*
Plugin Name:a.s costum cat wp
Description: Adds accordion functionality to the admin panel category checklist.
Version: 3.0
Author: A.S
*/

function as_costum_cat_wp_plugin_enqueue_scripts() {
  wp_enqueue_script('jquery');
	
  wp_enqueue_script('app-script', plugins_url('assets/js/app.js', __FILE__), array('jquery'), '1.0', true);
  
	wp_enqueue_style('app-style', plugins_url('assets/css/app.css', __FILE__));
	
}

add_action('admin_enqueue_scripts', 'as_costum_cat_wp_plugin_enqueue_scripts');

 function panel_tag($plus,$input){
	if($input){
$inputAddEdit='<div class="as__panel__input__row" data-update="add">
  <span class="as__panel__input__col as__panel__input__col_add"><input class="as__panel__cot_input" data-update="add-1" type="text" value="" placeholder="Введите имя категории"><input class="as__panel__cot_input" data-update="add-2" type="text" value="" placeholder="Введите url категории"></span> 
	<span class="as__panel__input__col"> <botton class="as__panel__input__btn button button-primary" data-update="add">Ок</botton>   </span></div><div class="as__panel__input__row" data-update="update"><span class="as__panel__input__col"><input class="as__panel__cot_input" data-update="update" type="text" value="" placeholder="Введите  новое  имя категории"> </span> <span class="as__panel__input__col"> <botton class="as__panel__input__btn button button-primary" data-update="update">Ок</botton>   </span></div>';
return $inputAddEdit;
	}else{
		$panel='<div class="as__panel">
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
	'.$plus.'
	</div>';
		return  $panel;
	}
	
}
function custom_wc_product_categories_metabox() {
    remove_meta_box('product_catdiv', 'product', 'side');
    add_meta_box('custom_product_catdiv', __('Категории товаров'), 'custom_wc_product_categories_meta_box_content', 'product', 'side', 'default');
}
function custom_wc_product_categories_meta_box_content($post) {
    $tax_name = 'product_cat';

    ?>
    <div id="taxonomy-<?php echo $tax_name; ?>" class="categorydiv">
        <ul id="<?php echo $tax_name; ?>-tabs" class="category-tabs">
            <li class="tabs"><a href="#<?php echo $tax_name; ?>-all" tabindex="3"><?php echo esc_html__('Все категории'); ?></a></li>
        </ul>

        <div id="<?php echo $tax_name; ?>-all" class="tabs-panel">
            <?php

    $categories = get_terms(array(
        'taxonomy' => $tax_name,
        'hide_empty' => false,
	   'parent' =>0,
	//"offset"=>0,
        ));
echo '<input type="hidden" name="tax_input[' . $tax_name . '][]" value="0">';
    if (!empty($categories) && !is_wp_error($categories)) {
		    $selected_categories = wp_get_object_terms($post->ID, $tax_name, array('fields' => 'ids'));
        $selected_categories = array_map('intval', $selected_categories); // Convert to integers
        echo '<ul id="product_catchecklist" data-wp-lists="list:' . $tax_name . '" class="categorychecklist form-no-clear">';

     
		foreach ($categories as $category) {
            if (!preg_match('/[_-]/', $category->name)) {
                custom_wc_display_category_recursive($category, $post->ID, $tax_name, $selected_categories);
            }
        }
        echo '</ul>';
    }
echo "</div></div>";
    echo '<p class="category-add"><a href="' . esc_url(admin_url('edit-tags.php?taxonomy=' . $tax_name)) . '">' . esc_html__('Добавить новую категорию') . '</a></p>';
}
function custom_wc_display_category_recursive($category, $post_id, $taxonomy , $selected_categories ,$depth=0) {
	 		
    $indent = str_repeat('&nbsp;', $depth * 3);

        $child_categories = get_terms(array(
            'taxonomy' => $taxonomy,
            'hide_empty' => false,
            'parent' => $category->term_id,
        ));
    $has_children = !empty($child_categories) && !is_wp_error($child_categories);

    $plus = $has_children ? '<span class="has-children as__panel__col"></span>' : '';

 
    echo '<li id="product_cat-' . $category->term_id . '">';
 
	echo  panel_tag(false,true);
    echo '<label class="selectit"><input value="' . $category->term_id . '" type="checkbox" name="' . $taxonomy . '[]" id="in-' . $taxonomy . '-' . $category->term_id . '"' .
        checked(in_array($category->term_id, $selected_categories), true, false) .
        ' />' . esc_html($category->name) . '</label>';
        echo panel_tag($plus,false);
    if (!empty($child_categories) && !is_wp_error($child_categories)) {
        echo '<ul class="children">';
        foreach ($child_categories as $child_category) {
            custom_wc_display_category_recursive($child_category, $post_id, $taxonomy, $selected_categories,$depth + 1);
        }
        echo '</ul>';
    }

    echo '</li>';
}
function custom_wc_save_product_categories($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;

    $tax_name = 'product_cat';

    if (isset($_POST[$tax_name])) {
        wp_set_post_terms($post_id, $_POST[$tax_name], $tax_name);
    }
}

add_action('add_meta_boxes', 'custom_wc_product_categories_metabox');
add_action('save_post_product', 'custom_wc_save_product_categories');

add_action('wp_ajax_edit_category', 'edit_category_callback');
add_action('wp_ajax_delete_category', 'delete_category_callback');

function edit_category_callback() {
    if (isset($_POST['category_id']) && isset($_POST['new_name'])) {
        $category_id = $_POST['category_id'];
        $new_name = $_POST['new_name'];
        $result = wp_update_term($category_id, 'product_cat', array(
            'name' => $new_name,
        ));

        if (is_wp_error($result)) {
            wp_send_json_error($result->get_error_message());
        } else {
       
            $category = get_term($category_id, 'product_cat');
            $category_name = $category->name;

            wp_send_json_success(array('category_name' => $category_name));
        }
    }

    wp_send_json_error('Invalid category ID or new name.');
}


// Добавляем AJAX-обработчик для создания категории
add_action('wp_ajax_create_product_category_2', 'create_product_category_2');
function create_product_category_2() {
    $category_name = $_POST['category_name'];
    $category_slug = $_POST['category_slug'];
    $parent_id = 0;
    $category_id = wp_create_category($category_name, $parent_id);


    if ($category_id && !is_wp_error($category_id)) {
		$category_name = sanitize_text_field($_POST["category_name"]);
wp_insert_term($category_name, 'product_cat', array('slug' => $category_slug));
///save_product_categories_list();
           wp_send_json(array('term_id' => $category_id, 'name' => $category_name));
    } else {
        // Ошибка при создании категории
        wp_send_json_error('Ошибка при создании категории'.$category_id);
    }
	
    die();
}
add_action('wp_ajax_create_product_subcategory_1', 'create_product_subcategory_1');
add_action('wp_ajax_nopriv_create_product_subcategory_1', 'create_product_subcategory_1');

function create_product_subcategory_1() {
    if (isset($_POST['subcategory_name']) && isset($_POST['subcategory_slug']) && isset($_POST['parent_category_id'])) {
        $subcategory_name = sanitize_text_field($_POST['subcategory_name']);
        $subcategory_slug = sanitize_title($_POST['subcategory_slug']); // Используем sanitize_title() для корректного формирования слага
        $parent_category_id = intval($_POST['parent_category_id']); // Преобразуем к int

        $args = array(
            'slug' => $subcategory_slug,
            'parent' => $parent_category_id,
        );

        $subcategory_id = wp_insert_term($subcategory_name, 'product_cat', $args);

        if (!is_wp_error($subcategory_id)) {
            wp_send_json(array('term_id' => $subcategory_id['term_id'], 'name' => $subcategory_name));
        } else {
            wp_send_json_error('Ошибка при создании подкатегории');
        }
    } else {
        wp_send_json_error('Недостаточно данных для создания подкатегории');
    }
    die();
}


function delete_category_callback() {
    if (isset($_POST['category_id'])) {
        $category_id = $_POST['category_id'];
        delete_category_recursive($category_id);
        wp_send_json_success();
    }

   
    wp_send_json_error('Invalid category ID.');
}function delete_category_recursive($category_id) {
    $subcategories = get_categories(array(
        'taxonomy' => 'product_cat',
        'child_of' => $category_id,
        'hide_empty' => false,
    ));

    foreach ($subcategories as $subcategory) {
        delete_category_recursive($subcategory->term_id);
    }

    $deleted = wp_delete_term($category_id, 'product_cat');

    if (is_wp_error($deleted)) {
        error_log('Error deleting category with ID ' . $category_id . ': ' . $deleted->get_error_message());
        return false;
    }

    return true;
}


function create_product_category($category_name, $category_slug, $parent_id = 0) {
    $category_id = wp_create_category($category_name, $parent_id);
var_dump($category_name);
    if ($category_id && !is_wp_error($category_id)) {
        // Установка слага (части URL) для категории
        wp_update_term($category_id, 'product_cat', array('slug' => $category_slug));
    }
}


function create_product_subcategory($subcategory_name, $subcategory_slug, $parent_category_slug) {
    $parent_category = get_term_by('slug', $parent_category_slug, 'product_cat');

    if ($parent_category) {
        $args = array(
            'name' => $subcategory_name,
            'slug' => $subcategory_slug,
            'parent' => $parent_category->term_id,
        );

        $subcategory_id = wp_insert_term($subcategory_name, 'product_cat', $args);

        if ($subcategory_id && !is_wp_error($subcategory_id)) {
            // Установка слага (части URL) для подкатегории
            wp_update_term($subcategory_id['term_id'], 'product_cat', array('slug' => $subcategory_slug));
        }
    }
}
