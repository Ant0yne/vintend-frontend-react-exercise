import { useState } from "react";
import ReactSwitch from "react-switch";

import "./querySwitch.css";

const QuerySwitch = () => {
	const [checked, setChecked] = useState(false);
	const handleChange = (nextChecked) => {
		setChecked(nextChecked);
	};

	return (
		<div id="checkbox-query">
			<label>
				<p>Trier par prix décroissant : </p>
				<ReactSwitch
					onChange={handleChange}
					checked={checked}
					className="react-switch"
					offColor="#868686"
					onColor="#2baeb7"
					// handleDiameter={10}
					height={18}
					width={40}
				/>
			</label>
		</div>
	);
};

export default QuerySwitch;
