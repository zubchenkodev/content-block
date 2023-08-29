import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import './content-wrapper';
import './custom-text';
import './content-grid';
import './custom-buttons';
import './custom-button';

import metadata from './block.json';
import SaveBlock from './save';
import EditBlock from './edit';

import './custom-text';

registerBlockType( metadata.name, {
	edit: EditBlock,
	save: SaveBlock,
} );
