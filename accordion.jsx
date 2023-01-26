import { css } from '@emotion/css'

function Accordion({ children, title, icon = false, initialOpen = false }) {
	const { Panel, PanelBody, PanelRow, Spinner } = wp.components
	const { useState, Suspense } = wp.element
	const [isOpen, setIsOpen] = useState(initialOpen)

	function onToggle() {
		setIsOpen(!isOpen)
	}

	const AccordionContentCSS = css`
		padding: 20px 18px 0px 18px;

		> div {
			margin-bottom: 25px;

			+ [class*='ErrorCSS'] {
				margin-top: -20px;
			}
		}

		.components-base-control__field + .components-base-control__help {
			margin-top: -15px;
		}

		.components-flex
			.components-base-control__field
			+ .components-base-control__help {
			margin-top: 10px;
		}
	`

	return (
		<Panel>
			<PanelBody
				title={title}
				icon={icon}
				initialOpen={initialOpen}
				onToggle={onToggle}>
				<Suspense fallback={<Spinner />}>
					{isOpen && (
						<PanelRow>
							<div className={AccordionContentCSS}>{children}</div>
						</PanelRow>
					)}
				</Suspense>
			</PanelBody>
		</Panel>
	)
}

export default Accordion
