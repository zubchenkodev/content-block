import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import '../style.scss';

import SaveBlock from './save';
import EditBlock from './edit';

registerBlockType( 'viktorias-blocks/custom-text', {
	title: __( 'Text Block', 'viktorias-blocks' ),
	category: 'text',
	icon: 'media-text',
	description: __( 'Text block', 'viktorias-blocks' ),
	supports: {
		html: false,
	},
	attributes: {
		alignment: {
			type: 'string',
			default: 'left',
		},
		textContent: {
			type: 'string',
		},
		textTag: {
			type: 'string',
			default: 'p',
		},
		textClass: {
			type: 'string',
			default: 'text',
		},
		textColor: {
			type: 'string',
			default: '#404040',
		},
	},
	edit: EditBlock,
	save: SaveBlock,
} );
