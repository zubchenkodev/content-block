import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const SaveBlock = ( { attributes } ) => {
	const {
		buttonText,
		buttonLink,
		buttonSize,
		buttonStyle,
		textColor,
		backgroundColor,
		borderRadius,
	} = attributes;

	return (
		<a
			href={ buttonLink }
			{ ...useBlockProps.save( {
				className: `button-main -${ buttonSize } ${
					borderRadius ? '-rounded' : ''
				} `,
				style: {
					color: textColor,
					backgroundColor: backgroundColor,
					borderColor:
						buttonStyle === 'filled' ? backgroundColor : textColor,
				},
			} ) }
		>
			{ buttonText }
		</a>
	);
};

export default SaveBlock;
