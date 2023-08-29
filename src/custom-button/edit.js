import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InnerBlocks,
	RichText,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	HeadingLevelDropdown,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import {
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	ToolbarDropdownMenu,
	SelectControl,
	PanelBody,
	TextControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import '../editor.scss';

const EditBlock = ( { attributes, setAttributes } ) => {
	const {
		buttonText,
		buttonLink,
		buttonSize,
		buttonStyle,
		textColor,
		backgroundColor,
		borderRadius,
	} = attributes;

	const onChangeColor = ( field, newColor ) => {
		setAttributes( { [ field ]: newColor } );
	};

	const onChangeText = ( value ) => {
		setAttributes( { buttonText: value } );
	};

	const onChangeBorderRadius = () => {
		setAttributes( { borderRadius: ! borderRadius } );
	};

	const onChangeButtonLink = ( value ) => {
		setAttributes( { buttonLink: value } );
	};

	const onChangeButtonSize = ( value ) => {
		setAttributes( { buttonSize: value } );
	};

	const onChangeButtonStyle = ( value ) => {
		setAttributes( { buttonStyle: value } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Button Settings', 'viktorias-block' ) }>
					<TextControl
						label={ __( 'Button text', 'viktorias-block' ) }
						value={ buttonText }
						onChange={ onChangeText }
					/>
					<TextControl
						label={ __( 'Button URL', 'viktorias-block' ) }
						value={ buttonLink }
						onChange={ onChangeButtonLink }
					/>
					<ToggleGroupControl
						label={ __( 'Select Button Size', 'viktorias-block' ) }
						isBlock
						value={ buttonSize }
						onChange={ onChangeButtonSize }
					>
						<ToggleGroupControlOption
							value="small"
							label={ __( 'Small', 'viktorias-block' ) }
						/>
						<ToggleGroupControlOption
							value="medium"
							label={ __( 'Medium', 'viktorias-block' ) }
						/>
						<ToggleGroupControlOption
							value="big"
							label={ __( 'Big', 'viktorias-block' ) }
						/>
					</ToggleGroupControl>
					<ToggleControl
						label={ __(
							'Toggle Border Radius',
							'viktorias-block'
						) }
						help={
							borderRadius
								? __( 'Rounded border', 'viktorias-block' )
								: __( 'Default border', 'viktorias-block' )
						}
						checked={ borderRadius }
						onChange={ onChangeBorderRadius }
					/>
					<ToggleGroupControl
						label={ __( 'Select Button Style', 'viktorias-block' ) }
						value={ buttonStyle }
						onChange={ onChangeButtonStyle }
						isBlock
					>
						<ToggleGroupControlOption
							value="filled"
							label={ __( 'Filled', 'viktorias-block' ) }
						/>
						<ToggleGroupControlOption
							value="outlined"
							label={ __( 'Outlined', 'viktorias-block' ) }
						/>
					</ToggleGroupControl>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Button Color Settings', 'viktorias-block' ) }
					initialOpen
					disableCustomColors={ false }
					colorSettings={ [
						{
							value: textColor,
							onChange: ( value ) =>
								onChangeColor( 'textColor', value ),
							label: __( 'Text Color', 'viktorias-block' ),
						},
						{
							value: backgroundColor,
							onChange: ( value ) =>
								onChangeColor( 'backgroundColor', value ),
							label: __( 'Background Color', 'viktorias-block' ),
						},
					] }
				/>
			</InspectorControls>

			<RichText
				{ ...useBlockProps( {
					className: `button-main -${ buttonSize } ${
						borderRadius ? '-rounded' : null
					} `,
					style: {
						color: textColor,
						backgroundColor: backgroundColor,
						borderColor:
							buttonStyle === 'filled'
								? backgroundColor
								: textColor,
					},
				} ) }
				placeholder={ __( 'Add text…', 'viktorias-blocks' ) }
				value={ buttonText }
				onChange={ onChangeText }
				tagName="a"
			/>
		</>
	);
};

export default EditBlock;
