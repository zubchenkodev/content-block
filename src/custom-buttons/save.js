import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const SaveBlock = ( { attributes } ) => {
	const {} = attributes;

	return (
		<div { ...useBlockProps.save( {} ) }>
			<InnerBlocks.Content />
		</div>
	);
};

export default SaveBlock;
