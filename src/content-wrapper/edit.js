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
	ToggleControl,
} from '@wordpress/components';

import '../editor.scss';

const EditBlock = ( { attributes, setAttributes } ) => {
	const ALLOWED_BLOCKS = [ 'viktorias-blocks/custom-text', 'core/paragraph' ];
	const MY_TEMPLATE = [
		[
			'viktorias-blocks/custom-text',
			{
				alignment: 'left',
				textContent:
					'A high-quality solution for those who want a beautiful startup website quickly.',
				textTag: 'h5',
				textClass: 'lead',
				textColor: '#404040',
			},
		],
		[
			'viktorias-blocks/custom-text',
			{
				alignment: 'left',
				textContent:
					'We have created this demo version in order to show you the structure of Startup Framework. It has some of the  components from the full version, 2 great samples (Bootstrap themes) and documentation. You can also find 2 images of a Macbook and an iPad, which you can use in your project. We hope you will like your first introduction to Startup Framework. The most important part of the Startup Framework are the samples or Bootstrap themes and templates. The samples consist of a set of few pages you can use «as is» or add new blocks from UI Kit. ',
				textTag: 'p',
				textClass: 'text',
				textColor: '#404040',
			},
		],
	];

	const { alignment, backgroundColor, hasBorder, isRounded } = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};

	const onChangeColor = ( field, newTextColor ) => {
		setAttributes( { [ field ]: newTextColor } );
	};

	const toggleBorder = () => {
		setAttributes( { hasBorder: ! hasBorder } );
	};

	const toggleRounded = () => {
		setAttributes( { isRounded: ! isRounded } );
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __(
						'Content Wrapper Color Settings',
						'viktorias-block'
					) }
					icon="admin-appearance"
					initialOpen
					disableCustomColors={ false }
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: ( value ) =>
								onChangeColor( 'backgroundColor', value ),
							label: __( 'Background Color', 'viktorias-block' ),
						},
					] }
				/>
				<PanelBody
					title={ __(
						'Content Wrapper Settings',
						'viktorias-block'
					) }
				>
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
					<ToggleControl
						label="Border"
						help={ hasBorder ? 'Has border.' : 'No border.' }
						checked={ hasBorder }
						onChange={ toggleBorder }
					/>

					<ToggleControl
						label="Rounded"
						help={ isRounded ? 'Is rounded.' : 'Is not rounded.' }
						checked={ isRounded }
						onChange={ toggleRounded }
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{ ...useBlockProps( {
					className: `content-wrapper -text-align-${ alignment } ${
						hasBorder ? '-with-border' : null
					} ${ isRounded ? '-rounded' : null }`,
					style: { backgroundColor: backgroundColor },
				} ) }
			>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</div>
		</>
	);
};

export default EditBlock;
