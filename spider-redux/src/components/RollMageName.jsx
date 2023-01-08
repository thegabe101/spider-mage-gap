import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMageFirstName, updateMageLastName } from "../redux/actions";
import API from "../API";

const Form = () => {
	const tempMage = API.getMages();

	const dispatch = useDispatch();
	const nameReducer = useSelector((state) => state.nameReducer);
	const { mageFirstName, mageLastName, message } = nameReducer;
	const handleFirstName = () => {
		dispatch(updateMageFirstName(tempMage));
	};
	const handleLastName = () => {
		dispatch(updateMageLastName(tempMage));
	};
	const handleReset = () => {
		dispatch({ type: "", action: {} });
	};
	return (
		<React.Fragment>
			<div className="container">
				<br />
				<br />
				<label>{mageFirstName}</label>
				<button
					style={{ marginLeft: "5vh" }}
					type="submit"
					onClick={handleFirstName}
				>
					Roll mage first name
				</button>
				<br />
				<br />
				<label>{mageLastName}</label>
				<button
					style={{ marginLeft: "5vh" }}
					type="submit"
					onClick={handleLastName}
				>
					Roll mage last name
				</button>

				<br />
				<br />
				<br />
				{message && (
					<label style={{ background: "lightgreen" }}>
						{message}
					</label>
				)}
				<br />
				<button
					style={{ background: "red", marginLeft: "5vh" }}
					type="submit"
					onClick={handleReset}
				>
					Reset
				</button>
			</div>
		</React.Fragment>
	);
};

export default Form;
