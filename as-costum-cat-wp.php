<?php
/*
Plugin Name:a.s costum cat wp
Description: Adds accordion functionality to the admin panel category checklist.
Version: 1.0
Author: A.S
*/

function as_costum_cat_wp_plugin_enqueue_scripts() {
  wp_enqueue_script('jquery');
	
  wp_enqueue_script('app-script', plugins_url('assets/js/app.js', __FILE__), array('jquery'), '1.0', true);
  
	wp_enqueue_style('app-style', plugins_url('assets/css/app.css', __FILE__));
	
}
add_action('admin_enqueue_scripts', 'as_costum_cat_wp_plugin_enqueue_scripts');



//function my_accordion_plugin_category_checklist() {
//  $categories = get_categories();

//  if (!empty($categories)) {
//    echo '<ul class="categorychecklist">';

//    foreach ($categories as $category) {
//      echo '<li>';
//      echo '<label class="selectit"><input value="' . esc_attr($category->term_id) . '" type="checkbox" name="post_category[]" id="in-category-' . esc_attr($category->term_id) . '">' . esc_html($category->name) . '</label>';
//      echo '</li>';
//    }

//    echo '</ul>';
//  }
//}
//add_action('post_edit_category_parent', 'my_accordion_plugin_category_checklist');
//add_action('post_edit_category', 'my_accordion_plugin_category_checklist');
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
function delete_category_callback() {
    if (isset($_POST['category_id'])) {
        $category_id = $_POST['category_id'];
        delete_category_recursive($category_id);
        wp_send_json_success();
    }

   
    wp_send_json_error('Invalid category ID.');
}
function delete_category_recursive($category_id) {
    $subcategories = get_categories(array(
        'taxonomy' => 'product_cat',
        'child_of' => $category_id,
        'hide_empty' => false,
    ));

    foreach ($subcategories as $subcategory) {
     
        delete_category_recursive($subcategory->term_id);
    }
    wp_delete_term($category_id, 'product_cat');
}
