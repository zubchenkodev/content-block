import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import '../style.scss';

import SaveBlock from './save';
import EditBlock from './edit';

registerBlockType( 'viktorias-blocks/content-grid', {
	title: __( 'Content Grid', 'viktorias-blocks' ),
	category: 'text',
	icon: 'columns',
	description: __( 'Content Grid', 'viktorias-blocks' ),
	supports: {
		html: false,
	},
	attributes: {
		columns: {
			type: 'number',
			default: 1,
		},
		layoutType: {
			type: 'string',
			default: 'layout-equal',
		},
	},
	edit: EditBlock,
	save: SaveBlock,
} );
