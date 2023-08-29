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
	TextControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';

import '../editor.scss';
import '../custom-button';

const EditBlock = ( { attributes, setAttributes } ) => {
	const { orientation, justification } = attributes;

	const ALLOWED_BLOCKS = [ 'viktorias-blocks/custom-button' ];

	const onChangeOrientation = ( value ) => {
		setAttributes( { orientation: value } );
	};

	const onChangeJustification = ( value ) => {
		setAttributes( { justification: value } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Button Group Settings', 'viktorias-block' ) }
				>
					<ToggleGroupControl
						label={ __( 'Select Button Group Orientation', 'viktorias-block' ) }
						value={ orientation}
						onChange={ onChangeOrientation }
						isBlock
					>
						<ToggleGroupControlOption
							value="horizontal"
							label={ __( 'Horizontal', 'viktorias-block' ) }
						/>
						<ToggleGroupControlOption
							value="vertical"
							label={ __( 'Vertical', 'viktorias-block' ) }
						/>
					</ToggleGroupControl>
					<SelectControl
						label={ __( 'Select Button Group Justification', 'viktorias-block' ) }
						value={ justification }
						options={ [
							{
								label: __( 'Start', 'viktorias-block' ),
								value: 'start',
							},
							{
								label: __( 'Center', 'viktorias-block' ),
								value: 'center',
							},
							{
								label: __( 'End', 'viktorias-block' ),
								value: 'end',
							},
							{
								label: __( 'Space around', 'viktorias-block' ),
								value: 'space-around',
							},
							{
								label: __( 'Space between', 'viktorias-block' ),
								value: 'space-between',
							},
							{
								label: __( 'Space evenly', 'viktorias-block' ),
								value: 'space-evenly',
							},
						] }
						onChange={ onChangeJustification }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps( {} ) } 
				className={`custom-buttons -${orientation} -${justification}`}
				>
				<p>Custom buttons</p>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					orientation={ orientation }
				/>
			</div>
		</>
	);
};

export default EditBlock;
