<?php
/**
 * Plugin Name:      Content Block
 * Description:       Text.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Viktoria Zubchenko
 * Text Domain:       viktorias-blocks
 */

function create_block_content_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_content_block_init' );
