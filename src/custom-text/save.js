import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { Toolbar, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const SaveBlock = ( { attributes } ) => {
	const { alignment, textContent, textTag, textClass, textColor } =
		attributes;

	return (
		<>
			<div
				{ ...useBlockProps.save( {
					className: `custom-text -text-align-${ alignment }`,
				} ) }
			>
				<RichText.Content
					value={ textContent }
					tagName={ textTag }
					className={ textClass }
					style={ { color: textColor } }
				/>
			</div>
		</>
	);
};

export default SaveBlock;
