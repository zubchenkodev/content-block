import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const SaveBlock = ( { attributes, setAttributes } ) => {
	const {
		alignment,
		backgroundColor,
		hasBorder,
		isRounded,
		containerSize,
		bgImageURL,
		bgImageID,
		bgImageAlt,
	} = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				className: `custom-content -text-align-${ alignment } ${
					hasBorder ? '-with-border' : null
				} ${ isRounded ? '-rounded' : null }`,
				style: {
					backgroundColor: backgroundColor,
					backgroundImage: `url(${ bgImageURL })`,
				},
			} ) }
		>
			<div className={ `container -${ containerSize }` }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default SaveBlock;
