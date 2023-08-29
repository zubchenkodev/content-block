import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	InnerBlocks,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	MediaPlaceholder,
} from '@wordpress/block-editor';

import {
	Spinner,
	withNotices,
	ToolbarButton,
	PanelBody,
	TextareaControl,
	SelectControl,
	Icon,
	Tooltip,
	TextControl,
	Button,
	ColorPalette,
	ToggleControl,
} from '@wordpress/components';

import './editor.scss';

const EditBlock = ( { attributes, setAttributes } ) => {
	const ALLOWED_BLOCKS = [
		'viktorias-blocks/content-grid',
		'core/paragraph',
		'viktorias-blocks/content-wrapper',
		'viktorias-blocks/custom-buttons',
	];
	const MY_TEMPLATE = [];

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

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};

	const toggleBorder = () => {
		setAttributes( { hasBorder: ! hasBorder } );
	};

	const toggleRounded = () => {
		setAttributes( { isRounded: ! isRounded } );
	};

	const onSelectContainerSize = ( selectedSize ) => {
		setAttributes( { containerSize: selectedSize } );
	};

	const onChangeBackgroundColor = ( field, newColor ) => {
		setAttributes( { [ field ]: newColor } );
	};

	const onSelectImage = ( bgImage ) => {
		if ( ! bgImage || ! bgImage.url ) {
			setAttributes( {
				bgImageURL: undefined,
				bgImageID: undefined,
				bgImageAlt: '',
			} );
			return;
		}
		setAttributes( {
			bgImageURL: bgImage.url,
			bgImageID: bgImage.id,
			bgImageAlt: bgImage.alt,
		} );
	};

	const removeBgImage = () => {
		setAttributes( {
			bgImageURL: undefined,
			bgImageID: undefined,
			bgImageAlt: '',
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label={ __(
							'Select Container Size',
							'viktorias-block'
						) }
						value={ containerSize }
						options={ [
							{
								label: __( 'Small', 'viktorias-block' ),
								value: 'small',
							},
							{
								label: __( 'Medium', 'viktorias-block' ),
								value: 'medium',
							},
							{
								label: __( 'Big', 'viktorias-block' ),
								value: 'big',
							},
							{
								label: __( 'Fluid', 'viktorias-block' ),
								value: 'fluid',
							},
						] }
						onChange={ onSelectContainerSize }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Background Image', 'viktorias-block' ) }
				>
					{ bgImageURL && (
						<div>
							<img src={ bgImageURL } alt={ bgImageAlt } />
						</div>
					) }
					<MediaPlaceholder
						labels={ {
							title: __( 'Background Image' ),
							instructions: __(
								'Drag and drop onto this block, upload, or select existing media from your library.'
							),
						} }
						onSelect={ onSelectImage }
						onSelectURL={ ( val ) => console.log( val ) }
						onError={ ( err ) => console.log( err ) }
						accept="image/*"
						allowedTypes={ [ 'image' ] }
						disableMediaButtons={ bgImageURL }
					/>
					<Button isDestructive onClick={ removeBgImage }>
						{ __( 'Remove', 'viktorias-block' ) }
					</Button>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Heading Color Settings', 'viktorias-block' ) }
					icon="admin-appearance"
					initialOpen
					disableCustomColors={ false }
					colorSettings={ [
						{
							value: backgroundColor,
							onChange: ( value ) =>
								onChangeBackgroundColor(
									'backgroundColor',
									value
								),
							label: __( 'Background Color', 'viktorias-block' ),
						},
					] }
				/>
				<PanelBody
					title={ __( 'Content Settings', 'viktorias-block' ) }
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
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
				</div>
			</div>
		</>
	);
};

export default EditBlock;
