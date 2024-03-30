import { Range, getTrackBackground } from "react-range";

import "./queryRange.css";

const STEP = 1;
const MIN = 0;
const MAX = 200;

const QueryRange = ({ rtl, values, setValues, sendQuery }) => {
	return (
		<div id="range-container">
			<Range
				onFinalChange={(values) => {
					setValues(values);
					sendQuery();
				}}
				values={values}
				step={STEP}
				min={MIN}
				max={MAX}
				rtl={rtl}
				onChange={(values) => setValues(values)}
				renderTrack={({ props, children }) => (
					<div
						id="range-bg"
						onMouseDown={props.onMouseDown}
						onTouchStart={props.onTouchStart}>
						<div
							id="range-barre"
							ref={props.ref}
							style={{
								background: getTrackBackground({
									values,
									colors: ["#ccc", "var(--green-vinted)", "#ccc"],
									min: MIN,
									max: MAX,
									rtl,
								}),
							}}>
							{children}
						</div>
					</div>
				)}
				renderThumb={({ index, props, isDragged }) => (
					<div
						id="range-thumb"
						{...props}
						style={{
							...props.style,
						}}>
						<div id="range-thumb-value">{values[index].toFixed(0)} €</div>
						<div
							id="range-thumb-int"
							style={{
								backgroundColor: isDragged
									? "var(--green-vinted)"
									: "var(--bg-grey)",
							}}
						/>
					</div>
				)}
			/>
		</div>
	);
};

export default QueryRange;
