import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const SaveBlock = ( { attributes, setAttributes } ) => {
	const { alignment, backgroundColor, hasBorder, isRounded } = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				className: `content-wrapper -text-align-${ alignment } ${
					hasBorder ? '-with-border' : null
				} ${ isRounded ? '-rounded' : null }`,
				style: { backgroundColor: backgroundColor },
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default SaveBlock;
