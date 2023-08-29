import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

const SaveBlock = ( { attributes } ) => {
	const { columns, layoutType } = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				className: `content-grid -has-${ columns }-columns -${
					columns === 2 && layoutType
				}`,
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default SaveBlock;
