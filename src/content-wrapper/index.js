import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import '../style.scss';
import '../custom-text';

import SaveBlock from './save';
import EditBlock from './edit';

registerBlockType( 'viktorias-blocks/content-wrapper', {
	title: __( 'Content Wrapper', 'viktorias-blocks' ),
	category: 'text',
	icon: 'welcome-add-page',
	description: __( 'Content Wrapper', 'viktorias-blocks' ),
	supports: {
		html: false,
		spacing: {
			padding: true,
		},
	},
	attributes: {
		alignment: {
			type: 'string',
			default: 'left',
		},
		backgroundColor: {
			type: 'string',
		},
		hasBorder: {
			type: 'boolean',
		},
		isRounded: {
			type: 'boolean',
		},
	},
	edit: EditBlock,
	save: SaveBlock,
} );
