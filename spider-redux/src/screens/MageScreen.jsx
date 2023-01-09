import { Form } from "../components";
import "../styles/mageSheetStyle.css";

const initialMages = [
	{
		name: "Jui",
		power: 32,
	},
	{
		name: "Deab",
		cost: 36,
	},
];

export const MageScreen = () => {
	return (
		<div className="mageSheetStyle">
			<Form />
		</div>
	);
};
