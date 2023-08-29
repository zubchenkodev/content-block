import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import '../style.scss';

import SaveBlock from './save';
import EditBlock from './edit';

registerBlockType( 'viktorias-blocks/custom-button', {
	title: __( 'Custom Button', 'viktorias-blocks' ),
	category: 'text',
	icon: {
		src: (
			<svg
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				aria-hidden="true"
				focusable="false"
			>
				<path d="M8 12.5h8V11H8v1.5Z M19 6.5H5a2 2 0 0 0-2 2V15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2ZM5 8h14a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8.5A.5.5 0 0 1 5 8Z"></path>
			</svg>
		),
		foreground: '#ffffff',
		background: '#482BE7',
	},
	description: __( 'Button', 'viktorias-blocks' ),
	supports: {
		html: false,
	},
	attributes: {
		buttonText: {
			type: 'string',
			default: 'Click me',
		},
		buttonLink: {
			type: 'string',
			default: '',
		},
		buttonSize: {
			type: 'string',
			default: 'medium',
		},
		buttonStyle: {
			type: 'string',
			default: 'filled',
		},
		textColor: {
			type: 'string',
			default: '#404040',
		},
		backgroundColor: {
			type: 'string',
			default: '#ffffff',
		},
		borderRadius: {
			type: 'string',
			default: false,
		},
	},
	edit: EditBlock,
	save: SaveBlock,
} );
