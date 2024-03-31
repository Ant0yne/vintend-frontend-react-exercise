import ReactSwitch from "react-switch";

import "./querySwitch.css";

const QuerySwitch = ({ checked, setChecked, sendQuery }) => {
	const handleChange = (nextChecked) => {
		setChecked(nextChecked);
		sendQuery();
	};

	return (
		<div id="checkbox-query">
			<label>
				<p>Trier par prix décroissant : </p>
				<ReactSwitch
					onChange={handleChange}
					checked={checked}
					id="react-switch"
					offColor="#868686"
					onColor="#2baeb7"
					height={18}
					width={40}
					activeBoxShadow="0 0 2px 3px #2baeb7"
				/>
			</label>
		</div>
	);
};

export default QuerySwitch;
