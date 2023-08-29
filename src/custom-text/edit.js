import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InnerBlocks,
	RichText,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	HeadingLevelDropdown,
} from '@wordpress/block-editor';
import {
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	ToolbarDropdownMenu,
	SelectControl,
	PanelBody,
} from '@wordpress/components';

import '../editor.scss';

const EditBlock = ( { attributes, setAttributes } ) => {
	const { alignment, textContent, textTag, textClass, textColor } =
		attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};

	const onChangeTextContent = ( value ) => {
		setAttributes( { textContent: value } );
	};

	const onSelectTextTag = ( value ) => {
		setAttributes( {
			textTag: value.tag,
			textClass: value.class,
		} );
	};

	const onChangeColor = ( field, newColor ) => {
		setAttributes( { [ field ]: newColor } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Heading Settings', 'viktorias-block' ) }
				>
					<SelectControl
						label={ __( 'Select Text Tag', 'viktorias-block' ) }
						value={ JSON.stringify( {
							tag: textTag,
							class: textClass,
						} ) }
						options={ [
							{
								label: __( 'Heading 1', 'viktorias-block' ),
								value: JSON.stringify( {
									tag: 'h1',
									class: 'heading-1',
								} ),
							},
							{
								label: __( 'Heading 2', 'viktorias-block' ),
								value: JSON.stringify( {
									tag: 'h2',
									class: 'heading-2',
								} ),
							},
							{
								label: __( 'Heading 3', 'viktorias-block' ),
								value: JSON.stringify( {
									tag: 'h3',
									class: 'heading-3',
								} ),
							},
							{
								label: __( 'Heading 4', 'viktorias-block' ),
								value: JSON.stringify( {
									tag: 'h4',
									class: 'heading-4',
								} ),
							},
							{
								label: __(
									'Heading 5 Lead',
									'viktorias-block'
								),
								value: JSON.stringify( {
									tag: 'h5',
									class: 'lead',
								} ),
							},
							{
								label: __( 'Plain text', 'viktorias-block' ),
								value: JSON.stringify( {
									tag: 'p',
									class: 'text',
								} ),
							},
							{
								label: __( 'Label', 'viktorias-block' ),
								value: JSON.stringify( {
									tag: 'p',
									class: 'label',
								} ),
							},
						] }
						onChange={ ( value ) => {
							const option = JSON.parse( value );
							onSelectTextTag( option );
						} }
					/>
					<SelectControl
						label={ __( 'Select Alingment', 'viktorias-block' ) }
						value={ alignment }
						options={ [
							{
								label: __( 'Left', 'viktorias-block' ),
								value: 'left',
							},
							{
								label: __( 'Center', 'viktorias-block' ),
								value: 'center',
							},
							{
								label: __( 'Right', 'viktorias-block' ),
								value: 'right',
							},
						] }
						onChange={ onChangeAlignment }
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings', 'viktorias-block' ) }
					icon="admin-appearance"
					initialOpen
					disableCustomColors={ false }
					colorSettings={ [
						{
							value: textColor,
							onChange: ( value ) =>
								onChangeColor( 'textColor', value ),
							label: __( 'Text Color', 'viktorias-block' ),
						},
					] }
				/>
			</InspectorControls>
			<div
				{ ...useBlockProps( {
					className: `custom-text -text-align-${ alignment }`,
				} ) }
			>
				<RichText
					placeholder={ __(
						'Type your text here',
						'viktorias-blocks'
					) }
					tagName={ textTag }
					value={ textContent }
					onChange={ onChangeTextContent }
					className={ textClass }
					style={ { color: textColor } }
				/>
			</div>
		</>
	);
};

export default EditBlock;
